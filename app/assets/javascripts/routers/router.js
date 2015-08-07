Butter.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'boardIndex',
    'boards': 'boardIndex'
  },

  initialize: function (options) {
    this.boards = options.boards;
    this.mainView = options.mainView;
  },

  boardIndex: function () {
    var index = new Butter.Views.BoardIndex({collection: this.boards});
    this.mainView.addSubview(".everything", index);
    this.mainView.attachSubviews();
    this.boards.fetch();
  }
});