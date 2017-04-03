/**
* Light weight event emitter library.
* @url https://hesambayat.github.io/spark-javascript
* @git git@github.com:hesambayat/spark-javascript.git
*/
;(function() {

  'use strict';

  function spark(element, event, options, emit){

    /**
    * Fallback
    * if window is undefined
    * or event is not a string
    * or element is not specified
    */
    if (typeof window === 'undefined' || typeof event !== 'string' || !element ) return;

    try {
      emit = new CustomEvent(event, {detail: options});
    } catch (e) {
      emit = document.createEvent('CustomEvent');
      emit.initCustomEvent(event, true, true, options);
    } finally {
      element.dispatchEvent(emit);
    }
  }

  window.spark = spark
}());
