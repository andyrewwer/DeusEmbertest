import DS from 'ember-data';

export default DS.Model.extend({
	username: DS.attr('string'),
	password: DS.attr('string'),
	characterName: DS.attr('string'),
	committee: DS.attr('string'),
	role: DS.attr('string'),
	reservedDirective: DS.attr('string'),
	id: DS.attr('int'),
	lastDirective: DS.attr('string', {
		defaultValue: function() {
			return new Date();
		}
	})	// lastDirective: DS.attr('date', {default CURRENT_TIMESTAMP})
});
