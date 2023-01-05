// A company is planning to interview 2n people. Given the array costs where
//  costs[i] = [aCosti, bCosti], the cost of flying the ith person to city 
//  a is aCosti, and the cost of flying the ith person to city b is bCosti.
// Return the minimum cost to fly every person to a city such that exactly
//  n people arrive in each city.
// Time O(NlogN)||Space O(1)
var twoCitySchedCost = function(costs) {
    let h = costs.length/2;
    let output = 0;

    //sort by descending order.
    costs.sort((a,b)=>(b[1]-b[0])-(a[1]-a[0]));
    console.log(costs)

    for (let i=0;i<h;i++) {
        output += costs[i][0];
    }

    for (let i=h;i<costs.length;i++) {
        output += costs[i][1];
    }

    return output;
};