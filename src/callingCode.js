import utils from './utils/utils';
import callingCode from '../data/calling-code';
import country from './country';

function combineCallingCodeWithCountry(locale = 'en', fallback = false) {
  const countryMap = country.getMapInLocale(locale, fallback);
  const callingKeys = Object.keys(callingCode);
  return callingKeys.reduce((pV, cV) => {
    const currentCountry = countryMap[cV];
    const currentCallingCode = callingCode[cV];
    if (currentCallingCode) {
      pV[cV] = {
        code: cV,
        label: currentCountry,
        callingCode: currentCallingCode,
      }
    }
    return pV;
  }, {});
}

function getListInLocale(locale = 'en', fallback = false) {
  const callingCodeMap = combineCallingCodeWithCountry(locale, fallback);
  const callingKeys = Object.keys(callingCodeMap);
  const responeArray = callingKeys.reduce((pV, cV) => {
    pV.push(callingCodeMap[cV]);
    return pV;
  }, []);

  return responeArray.sort((a, b) => utils.alphabeticalOrder(a, b, 'label'))
}

export default {
  getListInLocale,
}
