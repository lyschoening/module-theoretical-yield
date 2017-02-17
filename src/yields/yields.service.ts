import {API_ROOT_URL} from './constants';


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
	sampleYields(sampleId) {
		return this.$http({
			method: 'GET',
			url: `${API_ROOT_URL}/samples/${sampleId}/maximum-yield`
		});
	}
}

