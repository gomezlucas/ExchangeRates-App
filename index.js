/* eslint-disable import/extensions */
import { getRatesfromApi, getCurrenciesFromApi } from './cache.js';
import {
  showCurrencies,
  setCurrentDate,
  getDateSelected,
  getCurrencySelected,
  showRates,
  showUpdateMessage,
} from './ui.js';

async function updateRates() {
  showUpdateMessage();
  const changes = await getRatesfromApi(getCurrencySelected(), getDateSelected());
  showRates(changes);
}

async function initializeSite() {
  showCurrencies(await getCurrenciesFromApi(), updateRates);
  setCurrentDate(updateRates);
  updateRates();
}

initializeSite();
