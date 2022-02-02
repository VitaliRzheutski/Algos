// Time: O(n log n),n-number of queries(because we are sort)
//Space: O(1)
function minimumWaitingTime(queries) {
	//sort the input so that the longet querie will be always at the end
	queries = queries.sort((a,b)=>a-b) //[1,2,2,3,6]
	let total = 0;
	for(let i = 0; i < queries.length;i++){
		let duration = queries[i]; //each element in array
		let queriesLeft = queries.length - (i + 1); //queriesLeft to counnt
		total += duration * queriesLeft //4 + 6 + 4 + 3 = 17
	}
	return total
}

minimumWaitingTime([3, 2, 1, 2, 6])


