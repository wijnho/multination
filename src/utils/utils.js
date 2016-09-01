/**
 * Return avalibale country list base on locale
 * @param {StringObject} a - to compared
 * @param {StringObject} b - compared with
 * @param {String} compare - if object, what to compare
 */
function alphabeticalOrder(a, b, compare) {
  const aa = (typeof a === 'object') ? a[compare] : a;
  const bb = (typeof b === 'object') ? b[compare] : b;
  if (aa > bb) {
    return 1;
  }
  if (aa < bb) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

export default {
  alphabeticalOrder,
}
