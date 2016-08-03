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
			url: `${API_ROOT_URL}/list/experiment`
		});
	}
	loadSamples(experimentId) {
		return this.$http({
			method: 'GET',
			url: `${API_ROOT_URL}/list/sample/${experimentId}`
		});
	}
	sampleYields(sampleId) {
		return this.$http({
			method: 'GET',
			url: `${API_ROOT_URL}/sample/${sampleId}`
		});
	}
}

theoreticalYieldService.service('TheoreticalYieldService', TheoreticalYieldService);
export default theoreticalYieldService;
