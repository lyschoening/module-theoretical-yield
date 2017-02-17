import angular from 'angular';
import VARIANTS_ICON from '../../img/icons/variants.svg';
import {TheoreticalYieldService} from './yields.service';
import {PlotService} from './plot.service';
import {TheoreticalYieldComponent} from './yields.component'


export const TheoreticalYieldModule = angular.module('yields', [
	])
	.service('TheoreticalYieldService', TheoreticalYieldService)
	.service('PlotService', PlotService)
	.component('yields', TheoreticalYieldComponent)
	.config(function ($mdIconProvider, $stateProvider, appNavigationProvider) {
        $mdIconProvider.icon('variants', VARIANTS_ICON, 24);

        appNavigationProvider.register('app.project.yields', {
            title: 'Theoretical Yield',
            icon: 'variants',
            requiresProject: true
        });

        $stateProvider
            .state({
                name: 'app.project.yields',
                url: '/yields',
                component: 'yields',
                data: {
                    title: 'Theoretical Yield' // FIXME look up from app nagivation provider
                }
            })
    });
