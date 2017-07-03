var analytics = require('@segment/analytics.js-core');

module.exports = {
    create: function (integrations) {
        var initializeObj = {};

        integrations.forEach(function(config){
          analytics.use(config.package);
          initializeObj[config.name] = config.settings;
        })

        analytics.initialize(initializeObj);

        return analytics;
    }

}
