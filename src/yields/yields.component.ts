// import {PlotService} from './plot.service';
import {TheoreticalYieldService} from './yields.service';


class TheoreticalYieldController {
    private $timeout: angular.ITimeoutService;
    theoreticalYieldService: TheoreticalYieldService;
    // plotService: PlotService;
    isWaiting: boolean;
    experiments: any[];
    samples: any[];
    formConfig: any[];
    searchTexts: any;
    data: any;

    constructor($timeout, theoreticalYieldService: TheoreticalYieldService) {
        this.$timeout = $timeout;
        this.theoreticalYieldService = theoreticalYieldService;
        // this.plotService = PlotService;
        this.experiments = [];
        this.samples = [];
        this.isWaiting = false;
        this.loadLists();
        this.formConfig = [
            {
                'title': 'Experiment',
                'attr': 'experiments',
                'list': () => this.experiments
            },
            {
                'title': 'Sample',
                'attr': 'samples',
                'list': () => this.samples[this.searchTexts.experiments]
            }
        ];
        this.searchTexts = {};
        this.data = {};
    }

    querySearch (query, data) {
        return query ? data.filter( this.createFilterFor(query) ) : data;
    }

    createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(option) {
            return (angular.lowercase(option.display).indexOf(lowercaseQuery) !== -1);
        };
    }

    loadLists() {
        this.loadExperiments();
    }

    loadExperiments() {
        // this.theoreticalYieldService.loadExperiments()
        //     .then((data: any) => {
        //         data.data.forEach((value) => {
        //             this.experiments.push({
        //                 value: value.id,
        //                 display: value.name
        //             })
        //         });
        //         this.loadSamples();
        //     })
    }

    loadSamples() {
        this.experiments.forEach((value) => {
            let experimentId = value.value;
            this.samples[experimentId] = [];
            // this.theoreticalYieldService.loadSamples(experimentId)
            //     .then((data: any) => {
            //             data.data.forEach((sample) => {
            //                 this.samples[experimentId].push({
            //                     value: sample.id,
            //                     display: sample.name
            //                 })
            //             })
            //         }
            //     )
        });
    }

    submit() {
        let currentSample = this.searchTexts['samples'];
        this.isWaiting = true;
        // this.theoreticalYieldService.sampleYields(currentSample)
        //     .then((data: any) =>
        //         {
        //             this.isWaiting = false;
        //             this.data[currentSample] = data.data;
        //             angular.forEach(this.data[currentSample], (phaseYields, phase) => {
        //                 angular.forEach(phaseYields.metabolites, (metaboliteYield, metabolite) => {
        //                     var id = 'plot_' + phase + '_' + metabolite;
        //                     // angular.element(document.getElementById(id)).ready(() => this.plotService.plotPhase(id, metabolite, phaseYields['growth-rate'], metaboliteYield));
        //                 });
        //             });
        //         },
        //         // Error
        //         ([status, dataResponse]) => {
        //             this.isWaiting = false;
        //         }
        //     );
    }
}

export const TheoreticalYieldComponent: angular.IComponentOptions = {
    controller: TheoreticalYieldController,
    controllerAs: 'TheoreticalYieldController',
    template: `<html>{{TheoreticalYieldController.formConfig}}</html>`,
    bindings: {
        project: '<project'
    },
};
