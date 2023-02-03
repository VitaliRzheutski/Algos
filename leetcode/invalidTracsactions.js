// /**
//  * @param {string[]} transactions
//  * @return {string[]}
//  */
// var invalidTransactions = function (transactions) {
//   let info = [];
//   let invalid = [];
//   //create info arr,each element is an object
//   for (let i = 0; i < transactions.length; i++) {
//     let trans = transactions[i];
//     console.log("!:", trans.split(","));
//     let [name, time, price, city] = trans.split(",");
//     info.push({ name, time, price, city, raw: trans });
//   }
//   info.sort((a, b) => Number(a.time) - Number(b.time));
//   console.log("info;", info);

//   //if ammount exceeds 1000
//   for (let i = 0; i < info.length; i++) {
//     let currentTransaction = info[i];
//     if (currentTransaction.price > 1000) {
//       invalid.push(currentTransaction.raw);
//     }
//   }
//   console.log("invalid:", invalid);

//   for (let i = 0; i < info.length; i++) {
//     let currentEl = info[i];
//     let nextElIdx = i + 1;

//     while (
//       nextElIdx < info.length &&
//       info[nextElIdx].time - currentEl.time <= 60
//     ) {
//       if (
//         currentEl.name === info[nextElIdx].name &&
//         currentEl.city !== info[nextElIdx].city
//       ) {
//         invalid.push(currentEl.raw);
//         invalid.push(info[nextElIdx].raw);
//       }
//       nextElIdx++;
//     }
//   }
//   //  return invalid
//   return Array.from(invalid);
// };

/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
  const n = transactions.length;
  console.log("n:", n);
  const added = new Array(n).fill(false);

  const res = [];

  for (let i = 0; i < n; i++) {
    const [name1, time1, amount1, city1] = transactions[i].split(",");

    if (amount1 > 1000 && !added[i]) {
      res.push(transactions[i]);
      added[i] = true;
    }
    console.log("res:", res);
    console.log("added:", added);
    for (let j = i + 1; j < n; j++) {
      const [name2, time2, amount2, city2] = transactions[j].split(",");

      if (name1 === name2 && Math.abs(time1 - time2) <= 60 && city1 != city2) {
        if (!added[j]) {
          res.push(transactions[j]);
          added[j] = true;
        }

        if (!added[i]) {
          res.push(transactions[i]);
          added[i] = true;
        }
      }
      console.log("res in 2nd forloop:", res);
      console.log("added in 2nd forloop:", added);
    }
  }

  return res;
};
