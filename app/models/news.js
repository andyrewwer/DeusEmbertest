import DS from 'ember-data';

export default DS.Model.extend({
	responseTitle: DS.attr('string'),
	responseText: DS.attr('string'),
	responseImage: DS.attr('string'),
	directive: DS.attr('string'),
	
	createdAt: DS.attr('string', {
		defaultValue: function() {
			return new Date();
		}
	})
});
