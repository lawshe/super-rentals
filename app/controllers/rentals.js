import Ember from 'ember';

// Ember will know that a controller with the name of rentals will apply to the route with the same name.
// Controllers contain actions and properties available to the template of its corresponding route.

export default Ember.Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('rental', { city: param });
      } else {
        return this.get('store').findAll('rental');
      }
    }
  }
});
