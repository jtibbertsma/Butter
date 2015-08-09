TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST["boards/show"],

  initialize: function () {
    this.addSubview(
      ".list-index",
      new TrelloClone.Views.ListIndex({ collection: this.model.lists()})
    );
    this.addSubview(".board-menu", new TrelloClone.Views.BoardMenu());
    $("body").css("background", "#9898FF");
  },

  render: function () {
    this.$el.html(this.template({ board: this.model }));
    this.attachSubviews();
    return this;
  },

  remove: function () {
    $("body").css("background", "#FFF");
    Backbone.CompositeView.prototype.remove.call(this);
  }
});