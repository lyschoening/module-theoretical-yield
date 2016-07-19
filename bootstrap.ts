import {
	bootstrap,
	module,
	element
} from 'angular';
import 'angular-material';
import 'angular-ui-router';
// Turn of WS TS inspection for the 'decaf-common' import.
// noinspection TypeScriptCheckImport
import {sharing, config, Config} from 'decaf-common';
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
	sharing.name,
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
	constructor($window, private config: Config) {
		$window.document.title = `Platform – Module({name: ${MODULE_NAME}})`;
		// noinspection TypeScriptUnresolvedFunction
		config.set('module', {});
	}

	// Update color from config
	get color() {
		// Turn off WS inspection for this
		// noinspection TypeScriptUnresolvedFunction
		return this.config.get('color');
	}

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
		'toolbar': 'appToolbar'
	},
	template: `
		<div layout="row" flex ui-view="root">
			<md-sidenav layout="column" class="md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="$mdMedia('gt-sm')">
				<!--<project-nav modules="app.modules" project="app.project" color="app.color || app.module.color"></project-nav>-->
				<div ng-transclude="navigation"></div>
				<div ui-view="navigation"></div>
				<!--<md-divider ng-if="app.modules.length"></md-divider>-->
				<!--<md-list>-->
					<!--<md-list-item ng-repeat="module in ::app.modulesWithoutProjects()" ui-sref="{{module.navigation.state}}">-->
						<!--<md-icon>{{ module.navigation.icon }}</md-icon>-->
						<!--<p>{{ module.navigation.label }}</p>-->
					<!--</md-list-item>-->
				<!--</md-list>-->
			</md-sidenav>
			<div layout="column" flex id="content">
				<md-toolbar class="module-color" ng-style="{'background-color': app.color || app.module.color}">
					<div class="md-toolbar-tools" ui-view="toolbar">
						<h1 flex>
							{{app.module.navigation.label}}
						</h1>
						<div ng-transclude="toolbar"></div>
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
