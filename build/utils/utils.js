'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Return avalibale country list base on locale
 * @param {StringObject} a - to compared
 * @param {StringObject} b - compared with
 * @param {String} compare - if object, what to compare
 */
function alphabeticalOrder(a, b, compare) {
  var aa = (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' ? a[compare] : a;
  var bb = (typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object' ? b[compare] : b;
  if (aa > bb) {
    return 1;
  }
  if (aa < bb) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

exports.default = {
  alphabeticalOrder: alphabeticalOrder
};