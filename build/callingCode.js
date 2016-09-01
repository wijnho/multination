'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils/utils');

var _utils2 = _interopRequireDefault(_utils);

var _callingCode = require('../data/calling-code');

var _callingCode2 = _interopRequireDefault(_callingCode);

var _country = require('./country');

var _country2 = _interopRequireDefault(_country);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function combineCallingCodeWithCountry() {
  var locale = arguments.length <= 0 || arguments[0] === undefined ? 'en' : arguments[0];
  var fallback = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  var countryMap = _country2.default.getMapInLocale(locale, fallback);
  var callingKeys = Object.keys(_callingCode2.default);
  return callingKeys.reduce(function (pV, cV) {
    var currentCountry = countryMap[cV];
    var currentCallingCode = _callingCode2.default[cV];
    if (currentCallingCode) {
      pV[cV] = {
        code: cV,
        label: currentCountry,
        callingCode: currentCallingCode
      };
    }
    return pV;
  }, {});
}

function getListInLocale() {
  var locale = arguments.length <= 0 || arguments[0] === undefined ? 'en' : arguments[0];
  var fallback = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  var callingCodeMap = combineCallingCodeWithCountry(locale, fallback);
  var callingKeys = Object.keys(callingCodeMap);
  var responeArray = callingKeys.reduce(function (pV, cV) {
    pV.push(callingCodeMap[cV]);
    return pV;
  }, []);

  return responeArray.sort(function (a, b) {
    return _utils2.default.alphabeticalOrder(a, b, 'label');
  });
}

exports.default = {
  getListInLocale: getListInLocale
};