window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new TrelloClone.Routers.Router({
      boards: new TrelloClone.Collections.Boards(),
      mainView: new TrelloClone.Views.MainView({el: $("#main-div")})
    });

    Backbone.history.start();
  }
};
