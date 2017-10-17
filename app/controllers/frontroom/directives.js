import Ember from 'ember';

export default Ember.Controller.extend({
   resetDirectiveText: function(directiveType, directiveSender) {
        this.setProperties({
            directiveText: '',
            directiveMeetingPeople: '',
            directiveBringingPeople: ''
        });
        var checkedDirectiveType = document.getElementById(directiveType);
        checkedDirectiveType.checked=false;

        var checkedDirectiveSender = document.getElementById(directiveSender);
        checkedDirectiveSender.checked=false;   

    },
    directiveSentSuccessfully: function() {
        var actionResultNewsBar = document.getElementsByClassName('actionResultNewsBar');
        actionResultNewsBar = actionResultNewsBar[0];
        actionResultNewsBar.className = "actionResultNewsBar actionResultNewsBar-Green";
        actionResultNewsBar.innerHTML = "Directive has been sent";
        this.hideAction();
    },
    directivesFrozen: function() {
        var actionResultNewsBar = document.getElementsByClassName('actionResultNewsBar');
        actionResultNewsBar = actionResultNewsBar[0];
        actionResultNewsBar.className = "actionResultNewsBar actionResultNewsBar-Red";
        actionResultNewsBar.innerHTML = "Directives are frozen, please try again later";
        this.hideAction();
    },
    directiveThrewError: function() {
        var actionResultNewsBar = document.getElementsByClassName('actionResultNewsBar');
        actionResultNewsBar = actionResultNewsBar[0];
        actionResultNewsBar.className = "actionResultNewsBar actionResultNewsBar-Red";
        actionResultNewsBar.innerHTML = "Sorry there was a problem processing your request, please try again later";
        this.hideAction();
        //try to save to log
    },
    directiveIncomplete: function() {
        var actionResultNewsBar = document.getElementsByClassName('actionResultNewsBar');
        actionResultNewsBar = actionResultNewsBar[0];
        actionResultNewsBar.className = "actionResultNewsBar actionResultNewsBar-Red";
        actionResultNewsBar.innerHTML = "Sorry please make sure you have selected who the directive is from, the request type and the description!";
        this.hideAction();
    },
    directiveIncompleteMeeting: function() {
        var actionResultNewsBar = document.getElementsByClassName('actionResultNewsBar');
        actionResultNewsBar = actionResultNewsBar[0];
        actionResultNewsBar.className = "actionResultNewsBar actionResultNewsBar-Red";
        actionResultNewsBar.innerHTML = "Sorry you selected meeting but didn't fill out the requisite forms!";
        this.hideAction();
    },
    hideAction: function() {
        setTimeout(function() {
            var actionResultNewsBar = document.getElementsByClassName('actionResultNewsBar');
            actionResultNewsBar[0].classList += " hidden";
        }, 3000);
    },
    actions: {
        
        hideNews: function() {
            var actionResultNewsBar = document.getElementsByClassName('actionResultNewsBar');
            actionResultNewsBar = actionResultNewsBar[0];
            actionResultNewsBar.className += "actionResultNewsBar hidden";

        },
        helloWorld: function() {
            console.log("Fsdf");
        },
        submitDirective: function() {
            var self = this;

            console.log("Submitting a directive with:");

            var directiveSender = this.get('directiveSender');
            var directiveType = this.get('directiveType');
            var directiveText = this.get('directiveText');
            var directiveNonCabinetMembers = "";
            var directiveCabinetMembers = "";
            // console.log("DirectiveSender: " + directiveSender);
            // console.log("DirectiveType: " + directiveType);
            // console.log("DirectiveText: " + directiveText);

            if (directiveType.includes("Request a Meeting")) {
              directiveNonCabinetMembers = this.get('directiveMeetingPeople');
              directiveCabinetMembers = this.get('directiveBringingPeople');

              if (!(directiveNonCabinetMembers && directiveCabinetMembers)) {
                this.directiveIncompleteMeeting();
                return;
              }
            }
            if (!(directiveSender && directiveType && directiveText))  {
                this.directiveIncomplete();
                return;
            }
            
            //create new Directive
            var newDirective = this.store.createRecord('directive', {
                directiveSender: directiveSender,
                directiveType: directiveType,
                directiveText: directiveText,
                directiveNonCabinetMembers: directiveNonCabinetMembers,
                directiveCabinetMembers: directiveCabinetMembers
            });

            // if directives are not frozen
                // this('directivesFrozen');  


            //save to firebase

            var directiveTypeId = "Type" + directiveType;
            console.log("ID: " + directiveTypeId);
            var directiveSenderId = "Behalf" + directiveSender;
            newDirective.save().then(function(response) {
                self.directiveSentSuccessfully();  
                self.resetDirectiveText(directiveTypeId, directiveSenderId);

                console.log("Save Directive to the server");
                //save to log
            },function(response) {
                self.directiveThrewError()  ;
                //try to save to log + throw me a bone
            });           

            }
        },
        someAction: function() {
            alert("wroking");
        }
    });
