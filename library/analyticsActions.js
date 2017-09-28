module.exports = {
    createActions : function(analytics) {
        return [
            {
                type: 'identify',
                push: function(data) {
                    analytics.identify(data.id, data.user);
                }
            },
            {
                type: 'page Viewed',
                push: function(data) {
                    analytics.page(data);
                }
            },

            //Browsing
            {
                type: 'Products Searched',
                push: function(data) {
                  analytics.track('Products Searched', data);
                }
            },
            {
                type: 'Product List Viewed',
                push: function(data) {
                  analytics.track('Product List Viewed', data);
                }
            },
            {
                type: 'Product List Filtered',
                push: function(data) {
                  analytics.track('Product List Filtered', data);
                }
            },

            //Promotions
            {
                type: 'Promotion Viewed',
                push: function(data) {
                  analytics.track('Promotion Viewed', data);
                }
            },
            {
                type: 'Promotion Clicked',
                push: function(data) {
                  analytics.track('Promotion Clicked', data);
                }
            },
            
            //Ordering
            {
                type: 'Product Clicked',
                push: function(data) {
                  analytics.track('Product Clicked', data);
                }
            },
            {
                type: 'Product Viewed',
                push: function(data) {
                  analytics.track('Product Viewed', data);
                }
            },
            {
                type: 'Product Added',
                push: function(data) {
                  analytics.track('Product Added', data);
                }
            },
            {
                type: 'Product Removed',
                push: function(data) {
                  analytics.track('Product Removed', data);
                }
            },
            {
                type: 'Cart Viewed',
                push: function(data) {
                  analytics.track('Cart Viewed', data);
                }
            },
            {
                type: 'Checkout Started',
                push: function(data) {
                  analytics.track('Checkout Started', data);
                }
            },
            {
                type: 'Checkout Step Viewed',
                push: function(data) {
                  analytics.track('Checkout Step Viewed', data);
                }
            },
            {
                type: 'Checkout Step Completed',
                push: function(data) {
                  analytics.track('Checkout Step Completed', data);
                }
            },
            {
                type: 'Payment Info Entered',
                push: function(data) {
                  analytics.track('Payment Info Entered', data);
                }
            },
            {
                type: 'Order Completed',
                push: function(data) {
                  analytics.track('Order Completed', data);
                }
            },
            {
                type: 'Order Updated',
                push: function(data) {
                  analytics.track('Order Updated', data);
                }
            },
            {
                type: 'Order Refunded',
                push: function(data) {
                  analytics.track('Order Refunded', data);
                }
            },
            {
                type: 'Order Cancelled',
                push: function(data) {
                  analytics.track('Order Cancelled', data);
                }
            },


            
            //Coupons
            {
                type: 'Coupon Entered',
                push: function(data) {
                  analytics.track('Coupon Entered', data);
                }
            },
            {
                type: 'Coupon Applied',
                push: function(data) {
                  analytics.track('Coupon Applied', data);
                }
            },
            {
                type: 'Coupon Denied',
                push: function(data) {
                  analytics.track('Coupon Denied', data);
                }
            },
            {
                type: 'Coupon Removed',
                push: function(data) {
                  analytics.track('Coupon Removed', data);
                }
            },


            //Wishlisting
            {
                type: 'Product Added to Wishlist',
                push: function(data) {
                  analytics.track('Product Added to Wishlist', data);
                }
            },
            {
                type: 'Product Removed from Wishlist',
                push: function(data) {
                  analytics.track('Product Removed from Wishlist', data);
                }
            },
            {
                type: 'Wishlist Product Added to Cart',
                push: function(data) {
                  analytics.track('Wishlist Product Added to Cart', data);
                }
            },

            //Sharing
            {
                type: 'Product Shared',
                push: function(data) {
                  analytics.track('Product Shared', data);
                }
            },
            {
                type: 'Cart Shared',
                push: function(data) {
                  analytics.track('Cart Shared', data);
                }
            },

            //Reviewing
            {
                type: 'Product Reviewed',
                push: function(data) {
                  analytics.track('Product Reviewed', data);
                }
            },

            //Registration
            {
                type: 'Registration Completed',
                push: function(data) {
                    analytics.track('Registration Completed', data);
                }
            }
        ]
    }
}
