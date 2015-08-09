TrelloClone.Views.ListIndex = Backbone.CompositeView.extend({
  template: JST["lists/index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addIndexItem);
    this.collection.each(function (list) {
      this.addIndexItem(list);
    }.bind(this));
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  addIndexItem: function (list) {
    this.addSubview(
      ".list-index-main",
      new TrelloClone.Views.ListShow({ model: list })
    );
  }
});