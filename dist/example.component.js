"use strict";
// Turn of WS TS inspection for the 'decaf-common' import.
// noinspection TypeScriptCheckImport
var decaf_common_1 = require('decaf-common');
require('./example.component.css!');
exports.COMPONENT_NAME = 'example';
var example = angular.module(exports.COMPONENT_NAME, []);
// TODO: we need to make it so the module name and the .register() are decoupled and not dependant on each other
example.config(function (platformProvider) {
    platformProvider
        .register(exports.COMPONENT_NAME, {
        sharing: {
            accept: [{ type: 'data', multiple: true }],
            name: 'Example Component'
        }
    })
        .state(exports.COMPONENT_NAME, {
        url: "/" + exports.COMPONENT_NAME,
        views: {
            'content@': {
                templateUrl: decaf_common_1.dirname(module.id) + "/example.component.html",
                controller: ExampleComponentController,
                controllerAs: 'example'
            },
            'toolbar@': {
                templateUrl: decaf_common_1.dirname(module.id) + "/toolbar.tpl.html"
            },
            'navigation@': {
                templateUrl: decaf_common_1.dirname(module.id) + "/nav.tpl.html",
                controller: ExampleComponentNavController,
                controllerAs: 'nav'
            }
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
        .state(exports.COMPONENT_NAME + ".test", {
        url: '/test',
        views: {
            'content@': {
                templateUrl: decaf_common_1.dirname(module.id) + "/test.html",
            }
        }
    });
});
var ExampleComponentController = (function () {
    function ExampleComponentController(config, sharing) {
        // Turn of WS inspection for TS
        // noinspection TypeScriptUnresolvedFunction
        var component = config.get('componentConfig');
        console.info('COMPONENT CONFIG: ', component);
        // Data from the sharing provider
        var data = sharing.items('data');
        console.info('SHARED DATA: ', data);
    }
    return ExampleComponentController;
}());
var ExampleComponentNavController = (function () {
    function ExampleComponentNavController() {
        this.name = exports.COMPONENT_NAME;
    }
    return ExampleComponentNavController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = example;

//# sourceMappingURL=example.component.js.map
