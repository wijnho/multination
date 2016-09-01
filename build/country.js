'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils/utils');

var _utils2 = _interopRequireDefault(_utils);

var _countries = require('./countries');

var _countries2 = _interopRequireDefault(_countries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return avalibale country list base on locale
 * @param {String} locale - iso string. example: en-US, en, pt-BR
 * @param {Boolean} fallback - The express res object.
 * @return {Object} - Map with iso country code and data.
 */
function getMapInLocale() {
  var locale = arguments.length <= 0 || arguments[0] === undefined ? 'en' : arguments[0];
  var fallback = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  var defaultLocale = 'en';
  var refinedLoale = locale.replace(/[\-\_]{1}[a-zA-Z]{2}/, ''); // en-US => en
  var countryMap = _countries2.default[locale] || _countries2.default[refinedLoale];
  return countryMap || _countries2.default[defaultLocale];
}

/**
 * Return avalibale country list base on locale
 * @param {String} locale - iso string. example: en-US, en, pt-BR
 * @param {Boolean} fallback - The express res object.
 * @return {Array} - array with iso country code and data.
 */
function getListInLocale() {
  var locale = arguments.length <= 0 || arguments[0] === undefined ? 'en' : arguments[0];
  var fallback = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  var countryMap = getMapInLocale(locale, fallback);
  var countryKeys = Object.keys(countryMap);
  var countryList = countryKeys.map(function (cV) {
    return {
      code: cV,
      label: countryMap[cV]
    };
  });
  return countryList.sort(function (a, b) {
    return _utils2.default.alphabeticalOrder(a, b, 'label');
  });
}

exports.default = {
  getMapInLocale: getMapInLocale,
  getListInLocale: getListInLocale
};