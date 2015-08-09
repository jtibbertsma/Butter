TrelloClone.Views.BoardIndexItem = Backbone.View.extend({
  template: JST['boards/index_item'],
  className: "board-index-item",

  events: {
    "click": "gotoBoard"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({ board: this.model }));
    return this;
  },

  gotoBoard: function () {
    Backbone.history.navigate("#boards/" + this.model.id, {trigger: true});
  }
});