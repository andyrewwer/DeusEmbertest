import DS from 'ember-data';

export default DS.Model.extend({
	backgroundImage: DS.attr('string', { defaultValue: "deusbackgroundImage.png" }),
	backgroundImageBackup: DS.attr('string', { defaultValue: "deusbackgroundImage.png" }),
	crisisName: DS.attr('string', { defaultValue: "Deus Crisis Platform" }),
	directiveTimer: DS.attr('string', { defaultValue: "0" }),
	directivesFrozen: DS.attr('string', { defaultValue: "0" }),
	favicon: DS.attr('string', { defaultValue: "deusLogo425" }),
	faviconBackup: DS.attr('string', { defaultValue: "deusLogo425" }),
	googleDoc: DS.attr('string'),
	googleDocBackup: DS.attr('string')
});
