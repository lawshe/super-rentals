import DS from 'ember-data';

// An Adapter is an object that Ember Data uses to determines how we communicate with our backend. 

export default DS.JSONAPIAdapter.extend({
  namespace: 'api'
});
