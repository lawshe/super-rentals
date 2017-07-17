import Ember from 'ember';
import MapUtil from '../utils/google-maps';

// Accessing our maps API through a service will give us several benefits:

// It is injected with a service locator, meaning it will abstract the maps API from the code that uses it, allowing for easier refactoring and maintenance.

// It is lazy-loaded, meaning it won't be initialized until it is called the first time. In some cases this can reduce your app's processor load and memory consumption.

// It is a singleton, which means there is only one instance of the service object in browser. This will allow us to keep map data while the user navigates around the app, so that returning to a page doesn't require it to reload its maps.


export default Ember.Service.extend({

  init() {
    if (!this.get('cachedMaps')) {
      this.set('cachedMaps', Ember.Object.create());
    }
    if (!this.get('mapUtil')) {
      this.set('mapUtil', MapUtil.create());
    }
  },

  getMapElement(location) {
    let camelizedLocation = location.camelize();
    // camelized so that it may be used as a key to look up our element
    let element = this.get(`cachedMaps.${camelizedLocation}`);
    if (!element) {
      element = this.createMapElement();
      this.get('mapUtil').createMap(element, location);
      this.set(`cachedMaps.${camelizedLocation}`, element);
    }
    return element;
  },

  createMapElement() {
    let element = document.createElement('div');
    element.className = 'map';
    return element;
  }

});
