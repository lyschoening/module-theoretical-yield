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
	isWaiting: boolean;
	experiments: any[];
	samples: any;
	phases: any;
	formConfig: any[];
	searchTexts: any;
	data: any;

	constructor($timeout, TheoreticalYieldService: TheoreticalYieldService, PlotService: PlotService) {
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
				'list': () => this.experiments
			},
			{
				'title': 'Sample',
				'attr': 'samples',
				'list': () => this.samples[this.searchTexts.experiments]
			},
			{
				'title': 'Phases',
				'attr': 'phases',
				'list': () => this.phases[this.searchTexts.samples]
			},
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
				);
				console.log(1, this.samples, this.samples[1]);
				this.loadPhases();
		});
	}

	loadPhases() {
		this.experiments.forEach((value) => {
			angular.forEach(this.samples, (k, v) => {k.forEach((v) => {console.log(v)})});
			console.log(value.value, this.samples, this.samples[value.value]);
			let samples = this.samples[value.value];
			console.log(samples);
			samples.forEach((value) => {
				let sampleId = value.value;
				this.phases[sampleId] = {};
				this.theoreticalYieldService.loadPhases(sampleId)
					.then((data:any) => {
							data.data.forEach((phase) => {
								this.phases[sampleId].push({
									value: phase.id,
									display: phase.name
								})
							})
						}
					)
			});
		});
	}

	submit() {
		let currentSample = this.searchTexts['samples'];
		let currentPhase = this.searchTexts['phases'];
		this.isWaiting = true;
		this.theoreticalYieldService.sampleYields(currentSample, currentPhase)
			.then((data: any) =>
				{
					this.isWaiting = false;
					this.data = data.data;
					angular.forEach(this.data.metabolites, (metaboliteYield, metabolite) => {
						var id = 'plot_' + metabolite;
						angular.element(document.getElementById(id)).ready(() => this.plotService.plotPhase(id, metabolite, this.data['growth-rate'], metaboliteYield));
					});
				},
				// Error
				([status, dataResponse]) => {
					this.isWaiting = false;
				}
			);
	}
}

export default theoreticalYield;
