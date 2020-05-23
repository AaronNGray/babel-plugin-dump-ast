"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    enter(path) {
        console.log("babel-plugin-dump-ast: Program enter: ", path);
    },
    exit(path) {
        console.log("babel-plugin-dump-ast: Program exit: ", path);
    }
};
//# sourceMappingURL=ProgramVisitor.js.map