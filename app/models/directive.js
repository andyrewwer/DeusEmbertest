import DS from 'ember-data';

export default DS.Model.extend({
	directiveSender: DS.attr('string'),
	directiveType: DS.attr('string'),
	directiveText: DS.attr('string'),
	directiveCabinetMembers: DS.attr('string'),
	directiveNonCabinetMembers: DS.attr('string'),
	
	createdAt: DS.attr('string', {
		defaultValue: function() {
			return new Date();
		}
	})
});
