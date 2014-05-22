define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!../../../templates/project/list.html'
], function($, _, Backbone, Handlebars, projectListTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $('#container'),
    template: Handlebars.compile(projectListTemplate),
    render: function() {
      // Using Underscore we can compile our template with data
      var data = { name: 'Haj' };
      //var compiledTemplate = _.template( projectListTemplate, data );
      //var compiledTemplate = self.template({'myData': data});
      // Append our compiled template to this Views "el"
      this.$el.append(this.template(data));
      return this;
    }
  });
  // Our module now returns our view
  return ProjectListView;
});