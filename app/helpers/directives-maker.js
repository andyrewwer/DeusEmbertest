import Ember from 'ember';

export function directivesMaker(params/*, hash*/) {
  console.log(directiveType);
	var directiveType = params[0];
	var inputItem;
	if (directiveType == "Request a Meeting") {
		inputItem = '<input type="radio" name="directiveType" id='+directiveType+' change=(action (mut directiveType) '+directiveType+') value='+directiveType+'> ' + directiveType + '</input>';
		// alert("meeting");
	}else {
		inputItem = '<input type="radio" name="directiveType" class="ember-text-field ember-view" id='+directiveType+' change=(action (mut directiveType) '+directiveType+') value='+directiveType+'>' + directiveType + '</input>';
		// return "type='radio' name='directiveType' id=directiveName.directiveType change=(action (mut directiveType) directiveName.directiveType) value=directiveName.directiveType";
	}
	return Ember.String.htmlSafe(inputItem);

        
}

export default Ember.Helper.helper(directivesMaker);
