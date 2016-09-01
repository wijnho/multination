import utils from './utils/utils';
import countries from './countries';

/**
 * Return avalibale country list base on locale
 * @param {String} locale - iso string. example: en-US, en, pt-BR
 * @param {Boolean} fallback - The express res object.
 * @return {Object} - Map with iso country code and data.
 */
function getMapInLocale(locale = 'en', fallback = false) {
  const defaultLocale = 'en';
  const refinedLoale = locale.replace(/[\-\_]{1}[a-zA-Z]{2}/,''); // en-US => en
  const countryMap = countries[locale] || countries[refinedLoale];
  return countryMap || countries[defaultLocale];
}

/**
 * Return avalibale country list base on locale
 * @param {String} locale - iso string. example: en-US, en, pt-BR
 * @param {Boolean} fallback - The express res object.
 * @return {Array} - array with iso country code and data.
 */
function getListInLocale(locale = 'en', fallback = false) {
  const countryMap = getMapInLocale(locale, fallback);
  const countryKeys = Object.keys(countryMap);
  const countryList = countryKeys.map((cV) => {
    return {
      code: cV,
      label: countryMap[cV],
    };
  });
  return countryList.sort((a, b) => utils.alphabeticalOrder(a, b, 'label'));
}

export default {
  getMapInLocale,
  getListInLocale,
}
