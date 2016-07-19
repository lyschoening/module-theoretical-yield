"use strict";
var angular_1 = require('angular');
// Turn of WS TS inspection for the 'decaf-common' import.
// noinspection TypeScriptCheckImport
var decaf_common_1 = require('decaf-common');
require('./module.css!');
exports.MODULE_NAME = 'example';
var app = angular_1.module(exports.MODULE_NAME, []);
app.config(function ($stateProvider) {
    $stateProvider
        .state("root." + exports.MODULE_NAME, {
        url: "/" + exports.MODULE_NAME,
        views: {
            'content@': {
                templateUrl: decaf_common_1.dirname(module.id) + "/module.html",
                controller: ModuleController,
                controllerAs: 'module'
            },
            'toolbar@': {
                templateUrl: decaf_common_1.dirname(module.id) + "/toolbar.tpl.html"
            },
            'navigation@': {
                templateUrl: decaf_common_1.dirname(module.id) + "/nav.tpl.html",
                controller: ModuleNavController,
                controllerAs: 'nav'
            }
        },
        data: {
            module: exports.MODULE_NAME
        },
        onEnter: function (config) {
            // Turn of WS inspection for TS
            // noinspection TypeScriptUnresolvedFunction
            config.set('color', '#ff5200');
        },
        onExit: function (config) {
            // Turn of WS inspection for TS
            // noinspection TypeScriptUnresolvedFunction
            config.set('color', null);
        }
    })
        .state("root." + exports.MODULE_NAME + ".test", {
        url: '/test',
        views: {
            'content@': {
                templateUrl: decaf_common_1.dirname(module.id) + "/test.html",
            }
        }
    });
});
var ModuleController = (function () {
    function ModuleController(config) {
        // Turn of WS inspection for TS
        // noinspection TypeScriptUnresolvedFunction
        var module = config.get('module');
        console.info('MODULE CONFIG: ', module);
    }
    return ModuleController;
}());
var ModuleNavController = (function () {
    function ModuleNavController() {
        this.name = exports.MODULE_NAME;
    }
    return ModuleNavController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;

//# sourceMappingURL=module.component.js.map
