"use strict";
var angular_1 = require('angular');
require('./module.css!');
exports.MODULE_NAME = 'example';
var app = angular_1.module(exports.MODULE_NAME, []);
app.config(function ($stateProvider) {
    $stateProvider.state("platform." + exports.MODULE_NAME, {
        url: "/" + exports.MODULE_NAME,
        views: {
            'content@': {
                templateUrl: 'module.html',
                controller: ModuleController,
                controllerAs: 'module'
            }
        }
    });
});
var ModuleController = (function () {
    function ModuleController() {
    }
    return ModuleController;
}());

//# sourceMappingURL=module.js.map
