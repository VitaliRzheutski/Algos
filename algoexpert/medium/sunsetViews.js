// Time O(N);Space O(N)
function sunsetViews(buildings, direction) {
  let resIdxArr = [];
  if (buildings.length === 0) return [];
  if (direction === "WEST") {
    let p1 = 0;
    let p2 = 1;
    resIdxArr.push(p1);
    while (p2 <= buildings.length) {
      if (buildings[p1] < buildings[p2]) {
        resIdxArr.push(p2);
        p1 = p2;
        p2++;
      } else {
        p2++;
      }
    }
  }
  if (direction === "EAST") {
    let p1 = buildings.length - 1;
    let p2 = buildings.length - 2;
    resIdxArr.push(p1);
    while (p2 >= 0) {
      if (buildings[p1] < buildings[p2]) {
        resIdxArr.push(p2);
        p1 = p2;
        p2--;
      } else {
        p2--;
      }
    }
  }
  if (direction === "EAST") resIdxArr.reverse();
  return resIdxArr;
}
