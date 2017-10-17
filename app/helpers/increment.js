import Ember from 'ember';

export function increment(index/*, hash*/) {
// console.log("increment:" + index);
  let integer = Number(index);
  return integer + 1;
}

export default Ember.Helper.helper(increment);
