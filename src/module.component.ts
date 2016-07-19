import {module as ngModule} from 'angular';
// Turn of WS TS inspection for the 'decaf-common' import.
// noinspection TypeScriptCheckImport
import {dirname, Config} from 'decaf-common';
import './module.css!';


export const MODULE_NAME = 'example';
const app = ngModule(MODULE_NAME, []);


app.config(function ($stateProvider) {
	$stateProvider
		.state(`root.${MODULE_NAME}`, {
			url: `/${MODULE_NAME}`,
			views: {
				'content@': {
					templateUrl: `${dirname(module.id)}/module.html`,
					controller: ModuleController,
					controllerAs: 'module'
				},
				'toolbar@': {
					templateUrl: `${dirname(module.id)}/toolbar.tpl.html`
				},
				'navigation@': {
					templateUrl: `${dirname(module.id)}/nav.tpl.html`,
					controller: ModuleNavController,
					controllerAs: 'nav'
				}
			},
			data: {
				module: MODULE_NAME
			},
			onEnter(config: Config) {
				// Turn of WS inspection for TS
				// noinspection TypeScriptUnresolvedFunction
				config.set('color', '#ff5200');
			},
			onExit(config: Config) {
				// Turn of WS inspection for TS
				// noinspection TypeScriptUnresolvedFunction
				config.set('color', null);
			}
		})
		.state(`root.${MODULE_NAME}.test`, {
			url: '/test',
			views: {
				'content@': {
					templateUrl: `${dirname(module.id)}/test.html`,
				}
			}
		});
});


class ModuleController {
	constructor(config: Config) {
		// Turn of WS inspection for TS
		// noinspection TypeScriptUnresolvedFunction
		let module = config.get('module');

		console.info('MODULE CONFIG: ', module);
	}
}

class ModuleNavController {
	name = MODULE_NAME
}

export default app;
