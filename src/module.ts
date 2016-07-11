import {module} from 'angular';
import {dirname} from './path';
import './module.css!';


export const MODULE_NAME = 'example';
const app = module(MODULE_NAME, []);


app.config(function ($stateProvider) {
	$stateProvider.state(`${MODULE_NAME}`, {
		url: `/${MODULE_NAME}`,
		views: {
			'content@': {
				templateUrl: `${dirname}/module.html`,
				controller: ModuleController,
				controllerAs: 'module'
			}
		}
	});
});


class ModuleController {
	constructor() {}
}
