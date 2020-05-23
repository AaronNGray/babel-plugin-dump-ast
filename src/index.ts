import { PluginObj, Visitor } from '@babel/core';
import { PluginOptions, PluginPass } from './types';

import Program from './visitors/Program';

const visitor: Visitor<PluginPass> = {
  Program
};

// tslint:disable-next-line:no-any
export default (_babel: any, options: PluginOptions = {} as PluginOptions) => {
  console.log("babel-plugin-dump-ast: plugin install: ", options);
  return {
    name: 'babel-plugin-dump-ast',
    visitor,

    // tslint:disable-next-line:no-any
    manipulateOptions(_babel: any, parserOpts:any) {
        console.log("babel-plugin-dump-ast: plugin manipulateOptions: ", parserOpts);
    },
  } as PluginObj<PluginPass>;
};

