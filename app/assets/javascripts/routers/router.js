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
    var index = new TrelloClone.Views.BoardIndex({collection: this.boards});
    this.mainView.addSubview(".everything", index);
    this.mainView.attachSubviews();
    this.boards.fetch();
  },

  boardShow: function (id) {

  }
});