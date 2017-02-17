import angular from 'angular';
import VARIANTS_ICON from '../../img/icons/variants.svg';
import theoreticalYieldService from './yields.service';
import {TheoreticalYieldComponent} from './yields.component'


export const TheoreticalYieldModule = angular.module('yields', [
		theoreticalYieldService.name
	])
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
