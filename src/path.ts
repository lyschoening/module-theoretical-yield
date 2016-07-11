// TODO: move this to a common place
// CommonJS `module.id` standard,
// is the path to the current file
// Check specs http://wiki.commonjs.org/wiki/Modules/1.1
export function dirname(moduleId = '') {
	return moduleId.replace(
		moduleId.replace(/^.*[\\\/]/, ''), // File name, platform (Windows/Linux) agnostic
		''
	);
}
