// Time O(nlogN) | Space O(n)
function mergeOverlappingIntervals(array) {
    let sortedIntervals = array.sort((a,b) => a[0] - b[0])
    let resIntervals = [];
    let currentInterval = sortedIntervals[0];
    resIntervals.push(currentInterval);
  
    for(let i = 1; i < sortedIntervals.length;i++){
      let nextInterval = sortedIntervals[i];
      let [_, currentEndInterval] = currentInterval;
      let [nextStartInterval, nextEndInterval] = nextInterval;
  
      if(currentEndInterval >= nextStartInterval){
          currentInterval[1] = Math.max(currentEndInterval, nextEndInterval)
      }else{
        currentInterval = nextInterval;
        resIntervals.push(currentInterval)
      }
    }
    return resIntervals
  }
  