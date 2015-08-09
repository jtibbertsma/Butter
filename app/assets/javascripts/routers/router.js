TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'boardIndex',
    'boards': 'boardIndex',
    'boards/:id': 'boardShow'
  },

  initialize: function (options) {
    this.boards = options.boards;
    this.mainView = options.mainView;
  },

  boardIndex: function () {
    this.mainView.destroyEverything();

    var index = new TrelloClone.Views.BoardIndex({
      collection: this.boards
    });
    this.mainView.addSubview(".everything", index);
    this.mainView.attachSubviews();
    this.boards.fetch();
  },

  boardShow: function (id) {
    this.mainView.destroyEverything();

    var show = new TrelloClone.Views.BoardShow({
      model: this.boards.getOrFetch(id)
    });
    this.mainView.addSubview(".everything", show);
    this.mainView.attachSubviews();
  }
});