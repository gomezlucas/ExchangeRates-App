/* eslint-disable import/extensions */
import * as exchange from './exchange.js';

export async function getRatesfromApi(base = 'EUR', date = 'latest') {
  const key = `exchange_${base}_${date}`;
  const urlCache = localStorage.getItem(key);

  if (urlCache) {
    return JSON.parse(urlCache);
  }

  const changes = await exchange.getRatesfromApi(base, date);
  localStorage.setItem(key, JSON.stringify(changes));
  return changes;
}

export async function getCurrenciesFromApi() {
  const key = 'currencies';
  const currenciesCache = localStorage.getItem(key);
  if (currenciesCache) {
    return JSON.parse(currenciesCache);
  }

  const currencies = await exchange.getCurrenciesFromApi();
  localStorage.setItem(key, JSON.stringify(currencies));
  return currencies;
}
