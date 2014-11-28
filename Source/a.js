/*global define,console*/
define([
        './indent',
        './d',
        './e'
    ], function(
        indent,
        d,
        e) {
    'use strict';

    return function(depth) {
        console.log(indent(depth, 'a'));
        d(depth + 1);
        e(depth + 1);
        return 'a';
    };
});