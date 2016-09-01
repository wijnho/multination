'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en = require('../data/country/en');

var _en2 = _interopRequireDefault(_en);

var _ptBR = require('../data/country/pt-BR');

var _ptBR2 = _interopRequireDefault(_ptBR);

var _zh = require('../data/country/zh');

var _zh2 = _interopRequireDefault(_zh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  en: _en2.default.en.countries,
  'pt-BR': _ptBR2.default['pt-BR'].countries,
  zh: _zh2.default.zh.countries
};