define([
    'underscore',
    'backbone',
    'models/project'
], function(_, Backbone, ProjectModel) {
    var ProjectsCollection = Backbone.Collection.extend({
        model: ProjectModel
    });

    return ProjectsCollection;
});