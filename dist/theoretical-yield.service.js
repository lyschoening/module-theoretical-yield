"use strict";
var theoreticalYieldService = angular.module('theoreticalYield.service', []);
var TheoreticalYieldService = (function () {
    function TheoreticalYieldService($http) {
        this.$http = $http;
    }
    TheoreticalYieldService.prototype.loadExperiments = function () {
        return this.$http({
            method: 'GET',
            // url: `${API_ROOT_URL}/list/experiment`
            url: 'http://www.mocky.io/v2/57a1c5c8100000fe143b68da'
        });
    };
    TheoreticalYieldService.prototype.loadSamples = function (experimentId) {
        return this.$http({
            method: 'GET',
            // url: `${API_ROOT_URL}/list/sample/${experimentId}`
            url: 'http://www.mocky.io/v2/57a1c5c8100000fe143b68da'
        });
    };
    TheoreticalYieldService.prototype.sampleYields = function (sampleId) {
        return this.$http({
            method: 'GET',
            // url: `${API_ROOT_URL}/sample/${sampleId}`,
            url: 'http://www.mocky.io/v2/57a1c55d100000db143b68d9',
        });
    };
    return TheoreticalYieldService;
}());
exports.TheoreticalYieldService = TheoreticalYieldService;
theoreticalYieldService.service('TheoreticalYieldService', TheoreticalYieldService);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = theoreticalYieldService;

//# sourceMappingURL=theoretical-yield.service.js.map
