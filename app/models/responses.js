import DS from 'ember-data';

export default DS.Model.extend({
//recipient + recipient name
//read by directive other stuff. See what we need

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
