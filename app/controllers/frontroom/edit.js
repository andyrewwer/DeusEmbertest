import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        editNews: function(id) {
            var self = this;
            
            var responseTitle = this.get('model.responseTitle');
            var responseText = this.get('model.responseText');

            this.store.findRecord('news', id).then(function(news) {
                news.set('responseTitle', responseTitle);
                news.set('responseText', responseText);

                news.save();

                self.transitionToRoute('frontroom.index');
            })
            var editNewsButton = document.getElementById("editNewsButton");
            editNewsButton.style.visibility = "visible";
        },

        deleteNews: function(id) { 
            var self = this;
            this.store.findRecord('news', id).then(function(news){
                news.deleteRecord();

                news.save();

                self.transitionToRoute('frontroom.index');
            });
        }

    }
});
