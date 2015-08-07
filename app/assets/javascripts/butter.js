window.Butter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Butter.Routers.Router({
      boards: new Butter.Collections.Boards(),
      mainView: new Butter.Views.MainView({el: $("#main-div")})
    });

    Backbone.history.start();
  }
};
