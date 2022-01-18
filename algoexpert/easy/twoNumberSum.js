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
//time O(n^2)
//space O(1)
function twoNumberSum(array, targetSum) {
	// Write your code here.
	  for(let i=0;i<array.length;i++){
		  for(let j=i+1;j<array.length;j++){
			  if(array[i]+array[j]===targetSum) return [array[i],array[j]]
		  }
	  }
	  return []
  }

// Better solution(faster)
  //time O(n);
  // space O(n)
  function twoNumberSum(array, targetSum) {

	let hash = {}; //use to store preveiosly seen elements
		for(let i=0;i<array.length;i++){
			let diff = targetSum-array[i]; // x+y=z
			if(diff in hash){
				 return [diff,array[i]];
			}
			else{
				hash[array[i]] = true;
			}
		}
		return []
	}
  