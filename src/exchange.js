export function getRatesfromApi(base = 'EUR', date = 'latest') {
  const URL = `https://api.exchangeratesapi.io/${date}?base=${base}`;
  return fetch(URL)
    .then((result) => result.json())
    .then((currencies) => currencies.rates);
}

export function getCurrenciesFromApi() {
  return getRatesfromApi().then((currencies) => Object.keys(currencies).concat('EUR').sort());
}
