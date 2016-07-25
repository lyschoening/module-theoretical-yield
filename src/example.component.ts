// Turn of WS TS inspection for the 'decaf-common' import.
// noinspection TypeScriptCheckImport
import {Config, dirname} from 'decaf-common';
import './example.component.css!';


export const COMPONENT_NAME = 'example';
const example = angular.module(COMPONENT_NAME, []);

// TODO: we need to make it so the module name and the .register() are decoupled and not dependant on each other
example.config(function (platformProvider) {
	platformProvider
		.register(COMPONENT_NAME, {
			sharing: {
				accept: [{type: 'data', multiple: true}],
				name: 'Example Component'
			}
		})
		.state(COMPONENT_NAME, {
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
		.state(`${COMPONENT_NAME}.test`, {
			url: '/test',
			views: {
				'content@': {
					templateUrl: `${dirname(module.id)}/test.html`,
				}
			}
		});
});


class ExampleComponentController {
	constructor(config: Config, sharing) {
		// Turn of WS inspection for TS
		// noinspection TypeScriptUnresolvedFunction
		let component = config.get('componentConfig');
		console.info('COMPONENT CONFIG: ', component);

		// Data from the sharing provider
		let data = sharing.items('data');
		console.info('SHARED DATA: ', data);
	}
}

class ExampleComponentNavController {
	name = COMPONENT_NAME
}

export default example;
