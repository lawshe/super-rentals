import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //The model function acts as a hook, meaning that Ember will call it for us during different times in our app.
    return this.get('store').findAll('rental');
  }
});
