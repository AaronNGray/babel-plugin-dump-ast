"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("./visitors/Program");
const visitor = {
    Program: Program_1.default
};
// tslint:disable-next-line:no-any
exports.default = (_babel, options = {}) => {
    console.log("babel-plugin-dump-ast: plugin install: ", options);
    return {
        name: 'babel-plugin-dump-ast',
        visitor,
        // tslint:disable-next-line:no-any
        manipulateOptions(_babel, parserOpts) {
            console.log("babel-plugin-dump-ast: plugin manipulateOptions: ", parserOpts);
        },
    };
};
//# sourceMappingURL=index.js.map