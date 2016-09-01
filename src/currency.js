import currencies from '../data/currencies';

function getSelectedCurrency(selected = []) {
  return selected.map((cV) => {
    const currency = currencies[cV];

    if(!currency) {
      throw new Error(`Unsupport currency ${cV}`);
    }

    return currency;
  })
}

export default {
  getSelectedCurrency,
}
