import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    // replaceWith will replace the current URL in the browser's history, while transitionTo will add to the history.
    this.replaceWith('rentals');
  }
});
