define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    var ProjectModel = Backbone.Model.extend({
        default: {
            title: 'Postman',
            author: 'Charles Bukowski'
        }
    });

    return ProjectModel;
});
