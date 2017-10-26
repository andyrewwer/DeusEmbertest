import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),

	actions: {
		logout: function() {
			console.log("invalidate");

			this.get('session').invalidate();

			// alert("You are logging out");
		},
		    showResponse: function(index, id, numberOfElements) {
            var newsNumber = numberOfElements - index;

            console.log("Response Index: " + index+ "||||id: " +id + "||||#numberOfElements: " + numberOfElements);
            //Making previous news inactive
            for (var i = 0; i < numberOfElements; i++) {
                // console.log("Start: i: " + i);
                if (document.getElementById(numberOfElements-i+'r')) {
                    document.getElementById(numberOfElements-i+'r').classList.remove("active");
                    // console.log("Over");
                    continue;
                }
                // console.log("Error");
                break;
            }
            // console.log("1");
            //So that responses can be marked as inactive when news pressed
            var responseIdElement = document.getElementById("responseIndex");
            responseIdElement.className = newsNumber + "r";
            // console.log("2");

            //Making current news active
            var elementToMakeActive = newsNumber + 'r';
            elementToMakeActive = document.getElementById(elementToMakeActive);
            elementToMakeActive.className += " active";
            // console.log("3");

            //make sure that

            //Hide edit button
            // var editNewsButton = document.getElementById("editNewsButton");
            // editNewsButton.style.visibility = "hidden";

            //Obvious
            var newsTitle = document.getElementById("newsTitle");
            var newsText = document.getElementById("newsText");
            console.log("res[ponses id: " + id);
            this.store.findRecord('responses', id).then(function(news) {
                newsTitle.innerHTML = newsNumber + ": " + news.get('responseTitle');
                newsText.innerHTML = news.get('responseText');
            });
            // console.log("4");

            //Making news item inactive
            var activeNewsItem = document.getElementById("newsIndex");
            if (activeNewsItem) {
                document.getElementById(activeNewsItem.className).classList.remove("active");
            }
         },
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
    }.property('model.[]'),
    reverseResponses: function(){
            return this.get('model').toArray().reverse();
      }.property('model.[]')

});
