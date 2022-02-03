function classPhotos(redShirtHeights, blueShirtHeights) {
	
    redShirtHeights = redShirtHeights.sort((a,b)=>a-b);
      blueShirtHeights = blueShirtHeights.sort((a,b)=>a-b);
      
      //whoever is lower will be in the first row
      let wearingShirtInFirstRow = redShirtHeights[0]  <  blueShirtHeights[0] ? "RED": "BLUE"
      let p1 = 0;
      while(p1 < blueShirtHeights.length){
          if(wearingShirtInFirstRow === "RED"){
              if(blueShirtHeights[p1] <= redShirtHeights[p1]) return false;
          }else{
              if(redShirtHeights[p1] <= blueShirtHeights[p1]) return false;
          }
          p1++
      }	
      return true;
  }
console.log(classPhotos([5,8,1,3,4],[6,9,2,4,5]))