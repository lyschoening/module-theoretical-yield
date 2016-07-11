"use strict";
// TODO: move this to a common place
// CommonJS `module.id` standard,
// is the path to the current file
// Check specs http://wiki.commonjs.org/wiki/Modules/1.1
function dirname(moduleId) {
    if (moduleId === void 0) { moduleId = ''; }
    return moduleId.replace(moduleId.replace(/^.*[\\\/]/, ''), // File name, platform (Windows/Linux) agnostic
    '');
}
exports.dirname = dirname;

//# sourceMappingURL=path.js.map
