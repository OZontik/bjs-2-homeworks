"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let D = b * b - 4 * a * c;

  if (D > 0) {

    arr.push((-b + Math.sqrt(D)) / (2 * a));
    arr.push((-b - Math.sqrt(D)) / (2 * a));

  } else if (D == 0) {
    arr.push((-b + Math.sqrt(D)) / (2 * a));
  } else if (D < 0) {
    return arr;
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  let monthlyPercent = (percent / 100) / 12;

  let principal = amount - contribution;

  if (principal <= 0) {
    return 0;
  }

  let monthlyPayment = principal * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

  let totalAmount = monthlyPayment * countMonths;


  return Number(totalAmount.toFixed(2));
}
