/*global define,console*/
define([
        './indent'
    ], function(
        indent) {
    'use strict';

    return function(depth) {
        console.log(indent(depth, 'c'));
        return 'c';
    };
});