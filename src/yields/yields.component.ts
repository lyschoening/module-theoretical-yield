import angular from 'angular';


class Greeter {
    greet(greeting: string) {
        return greeting;
    }
}

export const TheoreticalYieldComponent: angular.IComponentOptions = {
    controller: Greeter,
    controllerAs: 'ctrl',
    template: `Hello <b>{{ctrl.greet('world')}}</b>`,
    bindings: {
        project: '<project'
    },
};
