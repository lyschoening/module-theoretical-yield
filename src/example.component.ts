import {module as ngModule} from 'angular';
// Turn of WS TS inspection for the 'decaf-common' import.
// noinspection TypeScriptCheckImport
import {dirname, Config} from 'decaf-common';
import './example.component.css!';


export const COMPONENT_NAME = 'example';
const example = ngModule(COMPONENT_NAME, []);


example.config(function ($stateProvider) {
	$stateProvider
		.state(`root.${COMPONENT_NAME}`, {
			url: `/${COMPONENT_NAME}`,
			views: {
				'content@': {
					templateUrl: `${dirname(module.id)}/example.component.html`,
					controller: ExampleComponentController,
					controllerAs: 'example'
				},
				'toolbar@': {
					templateUrl: `${dirname(module.id)}/toolbar.tpl.html`
				},
				'navigation@': {
					templateUrl: `${dirname(module.id)}/nav.tpl.html`,
					controller: ExampleComponentNavController,
					controllerAs: 'nav'
				}
			},
			data: {
				component: COMPONENT_NAME
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
		.state(`root.${COMPONENT_NAME}.test`, {
			url: '/test',
			views: {
				'content@': {
					templateUrl: `${dirname(module.id)}/test.html`,
				}
			}
		});
});


class ExampleComponentController {
	constructor(config: Config) {
		// Turn of WS inspection for TS
		// noinspection TypeScriptUnresolvedFunction
		let component = config.get('component');

		console.info('COMPONENT CONFIG: ', component);
	}
}

class ExampleComponentNavController {
	name = COMPONENT_NAME
}

export default example;
