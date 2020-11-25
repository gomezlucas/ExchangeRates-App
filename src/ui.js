/* eslint-disable import/prefer-default-export */

export function activateRow(row) {
  const $activeRow = document.querySelector('.active');
  if ($activeRow) {
    $activeRow.classList.remove('active');
  }
  row.classList.add('active');
}

export function showCurrencies(currenciesArray, callbackUpdate) {
  const $currencyTable = document.getElementById('currencyTable');
  currenciesArray.forEach((currency) => {
    const $currencyRow = document.createElement('tr');
    if (currency !== 'EUR') {
      $currencyRow.classList = 'flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 cursor-pointer';
    } else {
      $currencyRow.classList = 'flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 cursor-pointer active';
    }
    $currencyRow.dataset.currency = currency;
    $currencyRow.innerHTML = `
      <td class="border-grey-light border hover:bg-gray-100 p-3 font-bold" >${currency}
      `;
    $currencyRow.addEventListener('click', () => {
      activateRow($currencyRow);
      callbackUpdate();
    });
    $currencyTable.appendChild($currencyRow);
  });
}

export function setCurrentDate(calbackUpdate) {
  const $inputDate = document.getElementById('date');
  const currentDate = new Date().toISOString().slice(0, 10);
  $inputDate.setAttribute('max', currentDate);
  $inputDate.value = currentDate;
  $inputDate.addEventListener('change', () => {
    calbackUpdate();
  });
}

export function getDateSelected() {
  const $inputDate = document.getElementById('date');
  return $inputDate.value;
}

export function getCurrencySelected() {
  const $activeItem = document.querySelector('.active');

  if ($activeItem) {
    return $activeItem.dataset.currency;
  }

  return undefined;
}

export function showRates(rows) {
  const $ratesTable = document.getElementById('ratesTable');
  $ratesTable.innerHTML = '';

  Object.keys(rows).forEach((currency) => {
    const rateRow = document.createElement('tr');
    rateRow.classList = 'flex flex-col flex-no wrap table-row mb-2 sm:mb-0';
    rateRow.innerHTML = `
    <td class="border-grey-light border hover:bg-gray-100 p-3"> 
        ${currency} 
    </td>
    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
        ${rows[currency]}
    </td>
    `;

    $ratesTable.appendChild(rateRow);
  });
}

export function showUpdateMessage() {
  const $ratesTable = document.getElementById('ratesTable');
  $ratesTable.innerHTML = '<h4> Cargando... </h4>';
}
