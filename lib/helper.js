/**
 * Bind All
 *
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All rights reserved]
 */

/*jshint node:true, laxbreak:true, forin:false*/

'use strict';

/**
 * Module Dependencies
 */


/**
 * Locals
 */

var has = {}.hasOwnProperty;

function bind(method, context) {
  return function() {
    return method.apply(context, arguments);
  };
}

/**
 * Binds all the passed properties
 * that are functions, onto the
 * target.
 *
 * @param  {Object} props
 * @param  {View} target
 */
function bindAll(props, target) {
  var shouldBind;

  for (var key in props) {
    shouldBind = 'function' === typeof props[key]
      && key !== 'constructor'
      && has.call(props, key);

    if (shouldBind) {
      target[key] = bind(props[key], target);
    }
  }
}

/**
 * Exports
 */

module.exports = function(view) {
  view.on('initialize', function() {
    bindAll(view.constructor.prototype, view);
  });
};
