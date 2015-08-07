Butter.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],

  className: "container",

  initialize: function () {
    this.listenTo(this.collection, "sync add", this.render);
    this.listenTo(this.collection, "add", this.addBoardIndexItem);
    this.collection.each(function (board) {
      this.addBoardItem(board);
    }.bind(this));
  },

  addBoardIndexItem: function (board) {
    this.addSubview(
      ".board-list",
      new Butter.Views.BoardIndexItem({model: board})
    );
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  }
});