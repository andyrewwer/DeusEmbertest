import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin'

export default Ember.Route.extend({
  model: function() {
        var store = this.store;
        return Ember.RSVP.hash({
          news: store.findAll('news'),
          responses: store.findAll('responses')
        });


  },

  setupController: function(controller, models) {
    var news = models.news;
    var responses = models.responses;

    controller.set('news', news);
    controller.set('responses', responses);
  }
});
