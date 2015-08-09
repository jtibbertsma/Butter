TrelloClone.Views.MainView = Backbone.CompositeView.extend({
  initialize: function () {
    this.addSubview('.navigation', new TrelloClone.Views.Navbar());
  },

  destroyEverything: function () {
    this.subviews(".everything").each(function (subview) {
      subview.remove();
    });
    delete this._subviews[".everything"];
  }
});