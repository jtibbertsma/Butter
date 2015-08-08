TrelloClone.Views.MainView = Backbone.CompositeView.extend({
  initialize: function () {
    this.addSubview('.everything', new TrelloClone.Views.Navbar());
  }
});