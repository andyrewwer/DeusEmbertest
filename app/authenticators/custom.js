import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
	store: Ember.inject.service(),

    restore: function (data) {
        var _this = this;
        return new Ember.RSVP.Promise(function(resolve, reject) {
            if(Ember.isEmpty(data)) {
                reject();
            }

            _this.get('store').find('session', data.id).then(function() {
                        resolve();
            }, function() {
                        reject();
            });

        });
    },
    authenticate: function (username, password) {
    	console.log("ANDREW'S Username: " +  username + " Andrew's Password :" + password);
		var self = this;
        return new Ember.RSVP.Promise(function (resolve, reject) {
			if(!username || !password) {
	            console.log("someError");
	            reject("Missing username/password. Ensure you filled out both fields");
	            return;
	        }

            self.get('store').findAll('directive').then(function (user) {
                console.log("working");
                console.log("The 'user' = " + user);

                if(user) {//USERNAME / PASSWORD
	                console.log("sucess");
                    resolve("success");
                } else {
	                console.log("error");
                    reject("some Error");
                }
            }, function() {
            	reject("other error");
            });
        });

    },
    invalidate: function (data) {
        console.log('Attempt to invalidate');
        return new Ember.RSVP.Promise(function (resolve, reject) {
            resolve();
        });    
    }

});

// return new Ember.RSVP.Promise(function(resolve, reject) {
//             if(!username || !password) {
//                 console.log("someError");
//                 reject("Missing username/password. Ensure you filled out both fields");
//                 return;
//             }
//             console.log("gotThrough");

//             self.get('store').findAll('directive').then(function() {
// 	    		console.log("did not find error");
//                 resolve();
//             }, function() {
// 	    		console.log("did find error");
//                 reject("Invalid username/password combination");
//             });

//         });


