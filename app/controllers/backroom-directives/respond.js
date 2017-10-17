import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitPublicResponse: function(id) {
      console.log("Submitting a news item");
      var self = this;

      var responseTitle = this.get('responseTitle');
      var responseText = this.get('responseText');
      var directiveText = "";
      
      this.store.findRecord('directive', id).then(function(directive) {
        directiveText = directive.get('directiveText');
        console.log(directive.get('directiveText'));
        var newPublicResponse = self.store.createRecord('news', {
          responseTitle: responseTitle,
          responseText: responseText,
          directive: directiveText,
        });  
        var newPrivateResponse = self.store.createRecord('responses', {
          responseTitle: responseTitle,
          responseText: responseText,
          directive: directiveText,
        });  
        newPrivateResponse.save();
        newPublicResponse.save();
        console.log("Successfully saved news item to server");
      })

      this.transitionToRoute('backroomDirectives');

      this.setProperties({
          responseTitle: '',
          responseText: '',
       })
      console.log("Transitioning back to backroomDirectives");
      //save to log
    }
    
  }
});
