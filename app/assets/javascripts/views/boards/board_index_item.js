Butter.Views.BoardIndexItem = Backbone.View.extend({
  template: JST['boards/index_item'],
  className: "board-index-item",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({ board: this.model }));
    return this;
  }
});