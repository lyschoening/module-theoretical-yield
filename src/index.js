import angular from 'angular';
import {DevAppModule} from 'iloop-frontend-core';
import {TheoreticalYieldModule} from './yields/yields.module';
export {TheoreticalYieldModule} from './yields/yields.module';

export const TheoreticalYieldAppModule = angular.module('TheoreticalYieldApp', [
	DevAppModule.name,
    TheoreticalYieldModule.name
]);
