/*global require*/
'use strict';

require.config({
    shim: {
        dialog : {
            exports : 'Dialog'
        },
        handlebars: {
            exports : 'Handlebars'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars/handlebars',
        moment: '../bower_components/momentjs/moment',
        text: '../bower_components/requirejs-text/text'
    }
});

require([
    'app',
    'moment'
], function (App, moment) {
    App.initialize();
    console.log(moment().format());
});
