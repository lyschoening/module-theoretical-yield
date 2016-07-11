import {module as ngModule} from 'angular';
import {dirname} from './path';
import './module.css!';


export const MODULE_NAME = 'example';
const app = ngModule(MODULE_NAME, []);


app.config(function ($stateProvider) {
	$stateProvider.state(`${MODULE_NAME}`, {
		url: `/${MODULE_NAME}`,
		views: {
			'content@': {
				templateUrl: `${dirname(module.id)}/module.html`,
				controller: ModuleController,
				controllerAs: 'module'
			}
		}
	});
});


class ModuleController {
	constructor() {}
}
