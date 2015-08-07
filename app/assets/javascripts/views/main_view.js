Butter.Views.MainView = Backbone.CompositeView.extend({
  initialize: function () {
    this.addSubview('.everything', new Butter.Views.Navbar());
  }
});