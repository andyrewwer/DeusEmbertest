import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        showNews: function(index, id, numberOfElements) {
            var newsNumber = numberOfElements - index;

            console.log("News Index: " + index+ "||||id: " +id + "||||#numberOfElements: " + numberOfElements);
            //Making previous news inactive
            for (var i = 0; i < numberOfElements; i++) {
                document.getElementById(numberOfElements-i).classList.remove("active");
            }
            //Making current news active

            var elementToMakeActive = document.getElementById(newsNumber);
            elementToMakeActive.className += " active";

            //Set the name so that edit can work, this is 
            var newsIdElement = document.getElementById("newsId");
            newsIdElement.className = id;

            //So that news can be marked as inactive when response pressed
            var newsIdElement = document.getElementById("newsIndex");
            newsIdElement.className = newsNumber;

            //Show edit button
            var editNewsButton = document.getElementById("editNewsButton");
            editNewsButton.style.visibility = "visible";

            //Obvious
            var newsTitle = document.getElementById("newsTitle");
            var newsText = document.getElementById("newsText");

            this.store.findRecord('news', id).then(function(news) {
                newsTitle.innerHTML = newsNumber + ": " + news.get('responseTitle');
                newsText.innerHTML = news.get('responseText');
            });
            if (window.location.href.indexOf('/edit/') !== -1) {
                // this.send('editNews');  #000000
                this.transitionToRoute('frontroom.index');                   
            }
            //Making response item inactive
            var activeResponseItem = document.getElementById("responseIndex");
            if (activeResponseItem) {
                document.getElementById(activeResponseItem.className).classList.remove("active");
            } 

       },
        editNews: function() { 
            var editNewsButton = document.getElementById("editNewsButton");
            editNewsButton.style.visibility = "hidden";

            var newsIdElement = document.getElementById("newsId");
            newsIdElement = newsIdElement.className;
                        
            this.transitionToRoute('frontroom.edit', newsIdElement);
        }
    },
    reverseNews: function(){
        return this.get('model').toArray().reverse();
    }.property('model.[]')

});
