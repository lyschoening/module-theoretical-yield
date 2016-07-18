import {
	bootstrap,
	module,
	element
} from 'angular';
import 'angular-material';
import 'angular-ui-router';
// Turn of WS TS inspection for the 'decaf-common' import.
// noinspection TypeScriptCheckImport
import {config} from 'decaf-common';
import {API_HOST, API_PREFIX} from './bootstrap.config';
import {MODULE_NAME} from 'src/module.component';


const app = module('app', [
	// Angular
	'ngAnimate',
	'ngAria',
	'ngMaterial',
	// 3rd Party
	'ui.router',
	// Common
	config.name,
	// Module
	MODULE_NAME
]);


// AM theme config
app.config(function ($mdThemingProvider) {
	$mdThemingProvider
		.theme('default')
		.primaryPalette('blue-grey')
		.accentPalette('grey');
});

// Router config
app.config(function ($urlMatcherFactoryProvider, $urlRouterProvider, $stateProvider) {
	// Optional slash
	$urlMatcherFactoryProvider.strictMode(false);

	// TODO: perhaps this should not happen
	// Always go to the module state when visiting the root
	$urlRouterProvider.when('', `${MODULE_NAME}`);

	// Root state
	$stateProvider.state('root', {
		url: '',
		abstract: true
	});
});


// Main component
class AppController {
	constructor() {}
	$onInit() {
		console.info('App is running.');
	}
}

app.component('app', {
	bindings: {},
	controller: AppController,
	controllerAs: 'app',
	transclude: {
		'navigation': '?appNavigation',
		'header': 'appHeader'
	},
	template: `
		<div layout="row" flex>
			<md-sidenav layout="column" class="md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="$mdMedia('gt-sm')">
				<div ng-transclude="navigation"></div>
				<!--<md-list>-->
					<!--<md-list-item ng-repeat="module in ::app.modules" ui-sref="{{module.navigation.state}}">-->
						<!--<md-icon>{{ module.navigation.icon }}</md-icon>-->
						<!--<p>{{ module.navigation.label }}</p>-->
					<!--</md-list-item>-->
				<!--</md-list>-->
			</md-sidenav>
			<div layout="column" flex id="content">
				<md-toolbar>
					<div class="md-toolbar-tools">
						<div ng-transclude="header"></div>
					</div>
				</md-toolbar>
				<md-content layout="column"
							ui-view="content"
							flex>
				</md-content>
			</div>
		</div>
	`
});


// Bootstrap
element(document).ready(() => {
	bootstrap(document.documentElement, [app.name], {
		strictDi: false
	});
});
