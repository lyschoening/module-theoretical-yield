import {module as ngModule} from 'angular';
// Turn of WS TS inspection for the 'decaf-common' import.
// noinspection TypeScriptCheckImport
import {dirname} from 'decaf-common';
import './module.css!';


export const MODULE_NAME = 'example';
const app = ngModule(MODULE_NAME, []);


app.config(function ($stateProvider) {
	$stateProvider.state(`root.${MODULE_NAME}`, {
		url: `/${MODULE_NAME}`,
		views: {
			'content@': {
				templateUrl: `${dirname(module.id)}/module.html`,
				controller: ModuleController,
				controllerAs: 'module'
			},
			'toolbar@': {
				templateUrl: `${dirname(module.id)}/toolbar.tpl.html`
			}
		},
		data: {
			module: MODULE_NAME
		}
	});
});


class ModuleController {
	constructor(modulesConfig) {
		console.log(modulesConfig);
	}
}

export default app;
