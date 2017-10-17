import Ember from 'ember';

export function reverseNewsNumbers(params/*, hash*/) {
	// console.log("reverse:" + params);
	let current = Number(params[0]);
	let total = Number(params[1]);

  return total - current;
}

export default Ember.Helper.helper(reverseNewsNumbers);
