define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'collections/projects',
  'models/project',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!../../../templates/project/list.html'
], function($, _, Backbone, Handlebars, ProjectsCollection, ProjectModel, projectListTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $('#container'),
    template: Handlebars.compile(projectListTemplate),
    render: function() {
      var book = new ProjectModel();
      book.set('title', 'Man');
      this.collection = new ProjectsCollection();
      this.collection.add({title: 'Hemsöborna', author: 'August Strindberg'});
      this.collection.add(book);

      this.$el.append(this.template({ projects: this.collection.toJSON() }));
      return this;
    }
  });
  // Our module now returns our view
  return ProjectListView;
});