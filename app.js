// https://calculator.swiftutors.com/cash-conversion-cycle-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cashConversionCycleRadio = document.getElementById('cashConversionCycleRadio');
const daysInventoryOutstandingRadio = document.getElementById('daysInventoryOutstandingRadio');
const daysSalesOutstandingRadio = document.getElementById('daysSalesOutstandingRadio');
const daysPayableOutstandingRadio = document.getElementById('daysPayableOutstandingRadio');

let cashConversionCycle;
let daysInventoryOutstanding = v1;
let daysSalesOutstanding = v2;
let daysPayableOutstanding = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

cashConversionCycleRadio.addEventListener('click', function() {
  variable1.textContent = 'Days Inventory Outstanding (DIO)';
  variable2.textContent = 'Days Sales Outstanding (DSO)';
  variable3.textContent = 'Days Payable Outstanding (DPO)';
  daysInventoryOutstanding = v1;
  daysSalesOutstanding = v2;
  daysPayableOutstanding = v3;
});

daysInventoryOutstandingRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash Conversion Cycle (CCC)';
  variable2.textContent = 'Days Sales Outstanding (DSO)';
  variable3.textContent = 'Days Payable Outstanding (DPO)';
  cashConversionCycle = v1;
  daysSalesOutstanding = v2;
  daysPayableOutstanding = v3;
});

daysSalesOutstandingRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash Conversion Cycle (CCC)';
  variable2.textContent = 'Days Inventory Outstanding (DIO)';
  variable3.textContent = 'Days Payable Outstanding (DPO)';
  cashConversionCycle = v1;
  daysInventoryOutstanding = v2;
  daysPayableOutstanding = v3;
});

daysPayableOutstandingRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash Conversion Cycle (CCC)';
  variable2.textContent = 'Days Inventory Outstanding (DIO)';
  variable3.textContent = 'Days Sales Outstanding (DSO)';
  cashConversionCycle = v1;
  daysInventoryOutstanding = v2;
  daysSalesOutstanding = v3;
});

btn.addEventListener('click', function() {
  
  if(cashConversionCycleRadio.checked)
    result.textContent = `Cash Conversion Cycle (CCC) = ${computeCashConversionCycle().toFixed(2)} Days`;

  else if(daysInventoryOutstandingRadio.checked)
    result.textContent = `Days Inventory Outstanding (DIO) = ${computeDaysInventoryOutstanding().toFixed(2)}`;

  else if(daysSalesOutstandingRadio.checked)
    result.textContent = `Days Sales Outstanding (DSO) = ${computeDaysSalesOutstanding().toFixed(2)}`;

  else if(daysPayableOutstandingRadio.checked)
    result.textContent = `Days Payable Outstanding (DPO) = ${computeDaysPayableOutstanding().toFixed(2)}`;
})

// calculation

function computeCashConversionCycle() {
  return Number(daysInventoryOutstanding.value) + Number(daysSalesOutstanding.value) - Number(daysPayableOutstanding.value);
}

function computeDaysInventoryOutstanding() {
  return Number(cashConversionCycle.value) - Number(daysSalesOutstanding.value) + Number(daysPayableOutstanding.value);
}

function computeDaysSalesOutstanding() {
  return Number(cashConversionCycle.value) - Number(daysInventoryOutstanding.value) + Number(daysPayableOutstanding.value);
}

function computeDaysPayableOutstanding() {
  return Number(daysInventoryOutstanding.value) + Number(daysSalesOutstanding.value) - Number(cashConversionCycle.value);
}