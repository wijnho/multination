'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _currencies = require('../data/currencies');

var _currencies2 = _interopRequireDefault(_currencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSelectedCurrency() {
  var selected = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return selected.map(function (cV) {
    var currency = _currencies2.default[cV];

    if (!currency) {
      throw new Error('Unsupport currency ' + cV);
    }

    return currency;
  });
}

exports.default = {
  getSelectedCurrency: getSelectedCurrency
};