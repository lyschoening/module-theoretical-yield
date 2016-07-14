import {module} from 'angular';


const config = module('config', []);

config.service('modulesConfig', class ModulesConfig {
	config = [];
	configForModule(moduleName) {
		return this.config.find(({name}) => name === moduleName);
	}
});

export default config;
