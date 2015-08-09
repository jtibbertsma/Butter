TrelloClone.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],
  className: "container",

  initialize: function () {
    this.listenTo(this.collection, "sync add remove", this.render);
    this.listenTo(this.collection, "add", this.addBoardIndexItem);
    this.collection.each(function (board) {
      this.addBoardIndexItem(board);
    }.bind(this));
  },

  addBoardIndexItem: function (board) {
    this.addSubview(
      ".board-list",
      new TrelloClone.Views.BoardIndexItem({model: board})
    );
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  }
});