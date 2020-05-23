import { Program } from '@babel/types';
import { NodePath } from '@babel/traverse';

export default {
    enter(path: NodePath<Program>) {
        console.log("babel-plugin-dump-ast: Program enter: ", path);
    },
    exit(path: NodePath<Program>) {
        console.log("babel-plugin-dump-ast: Program exit: ", path);
    }
}
