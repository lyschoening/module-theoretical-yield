"use strict";
var angular_1 = require('angular');
var decaf_common_1 = require('decaf-common');
require('./module.css!');
exports.MODULE_NAME = 'example';
var app = angular_1.module(exports.MODULE_NAME, []);
app.config(function ($stateProvider) {
    $stateProvider.state("root." + exports.MODULE_NAME, {
        url: "/" + exports.MODULE_NAME,
        views: {
            'content@': {
                templateUrl: decaf_common_1.dirname(module.id) + "/module.html",
                controller: ModuleController,
                controllerAs: 'module'
            }
        },
        data: {
            module: exports.MODULE_NAME
        }
    });
});
var ModuleController = (function () {
    function ModuleController(modulesConfig) {
        console.log(modulesConfig);
    }
    return ModuleController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;

//# sourceMappingURL=module.js.map
