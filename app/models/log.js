import DS from 'ember-data';

export default DS.Model.extend({
	username: DS.attr('string'),
	action: DS.attr('string'),
	object: DS.attr('string'),

	//more stuff I guess? 
	createdAt: DS.attr('string', {
		defaultValue: function() {
			return new Date();
		}
	})
});
