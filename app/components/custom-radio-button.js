import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'radio',
  attributeBindings: ['type', 'htmlChecked:checked', 'value', 'name', 'disabled'],

  value: null,
  checked: null,

  htmlChecked: Ember.computed('value', 'checked', function() {
    return this.get('value') === this.get('checked');
  }),

  change: function() {
    this.checkForm();
    this.set('checked', this.get('value'));
  },

  checkForm: function() {
    if(this.get('id').includes('Behalf')){
      this.alterFrom();
    }else if (this.get('id').includes('Type')) {
      this.alterMeeting();
    }
  },

  alterFrom: function() {
    if(this.get('value') == "Multiple") {
    	console.log("Will do some magic");
    	document.getElementById("prepareForMagic").innerText += " magic";
    }
  },

  alterMeeting: function() { 
    if(this.get('value') == "Request a Meeting") {
      document.getElementById('directiveMeetingElement').className = "form-group col-sm-12 col-md-12 col-xs-12";
    }else { 
      document.getElementById('directiveMeetingElement').className += " hidden";
    }
  },

  _setCheckedProp: function() {
    if (!this.$()) { return; }
    this.$().prop('checked', this.get('htmlChecked'));
  },

  _updateElementValue: Ember.observer('htmlChecked', function() {
    Ember.run.once(this, '_setCheckedProp');
  })
});
