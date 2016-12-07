"use strict";
// Turn of WS TS inspection for the 'decaf-common' import.
// noinspection TypeScriptCheckImport
var decaf_common_1 = require('decaf-common');
require('./theoretical-yield.component.css!');
var theoretical_yield_service_1 = require('./theoretical-yield.service');
var plot_service_1 = require('./plot.service');
exports.COMPONENT_NAME = 'theoretical-yield';
var theoreticalYield = angular.module(exports.COMPONENT_NAME, [
    theoretical_yield_service_1.default.name,
    plot_service_1.default.name
]);
theoreticalYield.config(function (platformProvider) {
    platformProvider
        .register(exports.COMPONENT_NAME)
        .state(exports.COMPONENT_NAME, {
        url: "/" + exports.COMPONENT_NAME,
        views: {
            'content@': {
                templateUrl: decaf_common_1.dirname(module.id) + "/theoretical-yield.component.html",
                controller: TheoreticalYieldController,
                controllerAs: 'TheoreticalYieldController'
            }
        }
    });
});
var TheoreticalYieldController = (function () {
    function TheoreticalYieldController($timeout, TheoreticalYieldService, PlotService) {
        var _this = this;
        this.$timeout = $timeout;
        this.theoreticalYieldService = TheoreticalYieldService;
        this.plotService = PlotService;
        this.experiments = [];
        this.samples = {};
        this.phases = {};
        this.isWaiting = false;
        this.loadLists();
        this.formConfig = [
            {
                'title': 'Experiment',
                'attr': 'experiments',
                'list': function () { return _this.experiments; }
            },
            {
                'title': 'Sample',
                'attr': 'samples',
                'list': function () { return _this.samples[_this.searchTexts.experiments]; }
            },
            {
                'title': 'Phases',
                'attr': 'phases',
                'list': function () { return _this.phases[_this.searchTexts.samples]; }
            },
        ];
        this.searchTexts = {};
        this.data = {};
    }
    TheoreticalYieldController.prototype.querySearch = function (query, data) {
        return query ? data.filter(this.createFilterFor(query)) : data;
    };
    TheoreticalYieldController.prototype.createFilterFor = function (query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(option) {
            return (angular.lowercase(option.display).indexOf(lowercaseQuery) !== -1);
        };
    };
    TheoreticalYieldController.prototype.loadLists = function () {
        this.loadExperiments();
    };
    TheoreticalYieldController.prototype.loadExperiments = function () {
        var _this = this;
        this.theoreticalYieldService.loadExperiments()
            .then(function (data) {
            data.data.forEach(function (value) {
                _this.experiments.push({
                    value: value.id,
                    display: value.name
                });
            });
            _this.loadSamples();
        });
    };
    TheoreticalYieldController.prototype.loadSamples = function () {
        var _this = this;
        this.experiments.forEach(function (value) {
            var experimentId = value.value;
            _this.samples[experimentId] = [];
            _this.theoreticalYieldService.loadSamples(experimentId)
                .then(function (data) {
                data.data.forEach(function (sample) {
                    _this.samples[experimentId].push({
                        value: sample.id,
                        display: sample.name
                    });
                });
            });
            console.log(1, _this.samples, _this.samples[1]);
            _this.loadPhases();
        });
    };
    TheoreticalYieldController.prototype.loadPhases = function () {
        var _this = this;
        this.experiments.forEach(function (value) {
            angular.forEach(_this.samples, function (k, v) { k.forEach(function (v) { console.log(v); }); });
            console.log(value.value, _this.samples, _this.samples[value.value]);
            var samples = _this.samples[value.value];
            console.log(samples);
            samples.forEach(function (value) {
                var sampleId = value.value;
                _this.phases[sampleId] = {};
                _this.theoreticalYieldService.loadPhases(sampleId)
                    .then(function (data) {
                    data.data.forEach(function (phase) {
                        _this.phases[sampleId].push({
                            value: phase.id,
                            display: phase.name
                        });
                    });
                });
            });
        });
    };
    TheoreticalYieldController.prototype.submit = function () {
        var _this = this;
        var currentSample = this.searchTexts['samples'];
        var currentPhase = this.searchTexts['phases'];
        this.isWaiting = true;
        this.theoreticalYieldService.sampleYields(currentSample, currentPhase)
            .then(function (data) {
            _this.isWaiting = false;
            _this.data = data.data;
            angular.forEach(_this.data.metabolites, function (metaboliteYield, metabolite) {
                var id = 'plot_' + metabolite;
                angular.element(document.getElementById(id)).ready(function () { return _this.plotService.plotPhase(id, metabolite, _this.data['growth-rate'], metaboliteYield); });
            });
        }, 
        // Error
        function (_a) {
            var status = _a[0], dataResponse = _a[1];
            _this.isWaiting = false;
        });
    };
    return TheoreticalYieldController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = theoreticalYield;

//# sourceMappingURL=theoretical-yield.component.js.map
