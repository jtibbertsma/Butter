TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards/",

  parse: function (payload) {
    if (payload.lists) {
      payload.lists.forEach(function (listObject) {
        var list = new TrelloClone.Models.List();
        list.set(list.parse(listObject));
        this.lists().add(list);
      }.bind(this))
      delete payload.lists;
    }

    return payload;
  },

  lists: function() {
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.Lists();
    }
    return this._lists;
  }
});