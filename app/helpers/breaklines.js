import Ember from 'ember';

export function breaklines(text) {


      return new Ember.Handlebars.SafeString(text.replace(/\n/g, '<br>'));
//  var escaped = Handlebars.Utils.escapeExpression(text);
//  return new Handlebars.SafeString("<b>" + escaped + "</b>");
//
//    var breaklinesText = text;
//    breaklinesText = Handlebars.Utils.escapeExpression(breaklinesText);
//    breaklinesText = breaklinesText.toString();
//    breaklinesText = breaklinesText.replace(/(\r\n|\n|\r)/gm, '<br>');
//    return new Handlebars.SafeString(breaklinesText);
//	 return text;
}

export default Ember.Helper.helper(breaklines);
