import {
	bootstrap,
	module,
	element
} from 'angular';
import 'angular-material';
import 'angular-ui-router';
import {API_HOST, API_PREFIX} from './bootstrap.config';
import {MODULE_NAME} from './src/module';


const app = module('app', [
	// Angular
	'ngAnimate',
	'ngAria',
	'ngMaterial',
	// 3rd Party
	'ui.router',
	// Module
	MODULE_NAME
]);


// App configuration
app.config(function ($mdThemingProvider) {
	$mdThemingProvider
		.theme('default')
		.primaryPalette('blue-grey')
		.accentPalette('grey');
});


// Main component
class AppController {
	constructor() {}
	$onInit() {
		console.info('App running.');
	}
}

app.component('app', {
	bindings: {},
	controller: AppController,
	controllerAs: 'app',
	template: `
		<div>
			<h1>Hello!</h1>
		</div>
	`
});


// Bootstrap
element(document).ready(() => {
	bootstrap(document.documentElement, [app.name], {
		strictDi: false
	});
});
