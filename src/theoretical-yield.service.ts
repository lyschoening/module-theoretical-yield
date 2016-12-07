import {API_ROOT_URL} from './constants';

const theoreticalYieldService = angular.module('theoreticalYield.service', []);


export class TheoreticalYieldService {
	private $http: angular.IHttpService;

	constructor($http) {
		this.$http = $http;
	}
	loadExperiments() {
		return this.$http({
			method: 'GET',
			url: `${API_ROOT_URL}/experiments`
		});
	}
	loadSamples(experimentId) {
		return this.$http({
			method: 'GET',
			url: `${API_ROOT_URL}/experiments/${experimentId}/samples`
		});
	}
	loadPhases(sampleId) {
		return this.$http({
			method: 'GET',
			url: `${API_ROOT_URL}/samples/${sampleId}/phases`
		});
	}
	sampleYields(sampleId, phaseId) {
		return this.$http({
			method: 'GET',
			url: `${API_ROOT_URL}/samples/${sampleId}/maximum-yield?phase-id=${phaseId}`,
		});
	}
}

theoreticalYieldService.service('TheoreticalYieldService', TheoreticalYieldService);
export default theoreticalYieldService;
