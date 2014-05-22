define([
  'jquery',
  'underscore',
  'backbone',
  'views/project/list'/*,
  'views/user/list'*/
], function($, _, Backbone, ProjectListView, UserListView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      '/users': 'showUsers',

      // Default
      '*actions': 'defaultAction',
      '' : 'showProjects'
    },
    showProjects: function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var projectListView = new ProjectListView();
      projectListView.render();
    },
    showUsers: function() {
      var userListView = new UserListView();
      userListView.render();
    },
    defaultAction: function() {
      console.log('No route');
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});