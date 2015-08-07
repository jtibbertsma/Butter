Butter.Views.Navbar = Backbone.View.extend({
  template: JST['navbar'],
  tagName: "nav",
  className: "navbar navbar-default",

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});