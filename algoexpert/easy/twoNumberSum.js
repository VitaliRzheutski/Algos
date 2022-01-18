//time O(n log(n))
//space O(1)
function twoNumberSum(array, targetSum) {
	array.sort((a,b)=>a-b)//we got sorted array
	let p1 = 0; //first index
	let p2 = array.length - 1;//last indnex
	while(p1 < p2){
		let sum = array[p1] + array[p2];
		console.log('sum:',sum)
		if(targetSum < sum){
			p2--
		}else if(targetSum > sum){
			p1++
		}else if(targetSum === sum){
			return [array[p1],array[p2]]
		}
	}
	return []
}
	