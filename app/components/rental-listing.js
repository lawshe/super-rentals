import Ember from 'ember';

// An actions hash is an object in the component that contains functions.

export default Ember.Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
  }
});
