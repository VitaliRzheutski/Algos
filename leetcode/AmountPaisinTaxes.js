/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  let total = 0;
  let prev = 0;

  if (income <= 0) return total;

  for (let i = 0; i < brackets.length; i++) {
    let [dollars, percent] = brackets[i];

    console.log("prev:", prev);
    console.log("income:", income);
    console.log("dollars:", dollars);

    let current = Math.min(income, dollars - prev); //3
    console.log("current:", current);

    let tax = current * (percent / 100);

    income -= current;
    total += tax;
    prev = dollars;
  }
  return total;
};
