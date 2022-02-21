function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  let maxSpeed = 0;
  let minSpeed = 0;
  let p1 = 0;
  redShirtSpeeds.sort((a, b) => a - b); //[2,3,5,5,9]

  if (fastest === true) {
    blueShirtSpeeds.sort((a, b) => b - a); //[7,6,3,2,1]
    while (p1 < blueShirtSpeeds.length) {
      maxSpeed += Math.max(blueShirtSpeeds[p1], redShirtSpeeds[p1]);
      p1++;
    }
    // console.log('maxSpeed:',maxSpeed)
    return maxSpeed;
  } else {
    blueShirtSpeeds.sort((a, b) => a - b);
    while (p1 < blueShirtSpeeds.length) {
      minSpeed += Math.max(blueShirtSpeeds[p1], redShirtSpeeds[p1]);
      p1++;
      console.log("minSpeed:", minSpeed);
    }
    return minSpeed;
  }
}
