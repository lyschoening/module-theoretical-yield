// Turn of WS TS inspection for the 'decaf-common' import.
// noinspection TypeScriptCheckImport
import {Config, dirname} from 'decaf-common';
import './theoretical-yield.component.css!';
import theoreticalYieldService, {TheoreticalYieldService} from './theoretical-yield.service';
import plotService, {PlotService} from './plot.service';


export const COMPONENT_NAME = 'theoretical-yield';
const theoreticalYield = angular.module(COMPONENT_NAME, [
	theoreticalYieldService.name,
	plotService.name
]);

theoreticalYield.config(function (platformProvider) {
	platformProvider
		.register(COMPONENT_NAME)
		.state(COMPONENT_NAME, {
			url: `/${COMPONENT_NAME}`,
			views: {
				'content@': {
					templateUrl: `${dirname(module.id)}/theoretical-yield.component.html`,
					controller: TheoreticalYieldController,
					controllerAs: 'TheoreticalYieldController'
				}
			}
		})
});

class TheoreticalYieldController {
	private $timeout: angular.ITimeoutService;
	theoreticalYieldService: TheoreticalYieldService;
	plotService: PlotService;
	experiments: any[];
	samples: any[];
	formConfig: any[];
	searchTexts: any;
	data: any;

	constructor($timeout, TheoreticalYieldService: TheoreticalYieldService, PlotService: PlotService) {
		this.$timeout = $timeout;
		this.theoreticalYieldService = TheoreticalYieldService;
		this.plotService = PlotService;
		this.experiments = [];
		this.samples = [];
		this.loadLists();
		this.formConfig = [
			{
				'title': 'Experiment',
				'attr': 'experiments',
				'list': () => this.experiments
			},
			{
				'title': 'Sample',
				'attr': 'samples',
				'list': () => this.samples[this.searchTexts.experiments]
			}
		];
		this.searchTexts = {};
		this.data = {};
	}

	querySearch (query, data) {
		return query ? data.filter( this.createFilterFor(query) ) : data;
	}

	createFilterFor(query) {
		var lowercaseQuery = angular.lowercase(query);
		return function filterFn(option) {
			return (angular.lowercase(option.display).indexOf(lowercaseQuery) !== -1);
		};
	}

	loadLists() {
		this.loadExperiments();
	}

	loadExperiments() {
		this.theoreticalYieldService.loadExperiments()
			.then((data: any) => {
				data.data.forEach((value) => {
					this.experiments.push({
						value: value.id,
						display: value.name
					})
				});
				this.loadSamples();
			})
	}

	loadSamples() {
		this.experiments.forEach((value) => {
			let experimentId = value.value;
			this.samples[experimentId] = [];
			this.theoreticalYieldService.loadSamples(experimentId)
				.then((data: any) => {
						data.data.forEach((sample) => {
							this.samples[experimentId].push({
								value: sample.id,
								display: sample.name
							})
						})
					}
				)
		});
	}

	submit() {
		let currentSample = this.searchTexts['samples'];
		this.theoreticalYieldService.sampleYields(currentSample)
			.then((data: any) => {
				this.data[currentSample] = data.data;
				angular.forEach(this.data[currentSample], (phaseYields, phase) => {
					angular.forEach(phaseYields.metabolites, (metaboliteYield, metabolite) => {
						// this.$timeout(this.plotService.plotPhase('plot_' + phase + '_' + metabolite, metabolite, phaseYields['growth-rate'], metaboliteYield), 0);
					});
				});
			});
	}
}

export default theoreticalYield;
