function validStartingCity(distances, fuel, mpg) {
  // brute force
  //1.start at city 0
  //2.for aech candidate ->simulate going through all other cities
  for (let i = 0; i < distances.length; i++) {
    let fuelLeft = 0;
    for (let j = i; j < i + distances.length; j++) {
      if (fuelLeft < 0) continue;

      //when we are let's say at city 3(i=3) , we need to chech all the cities before it, so we have to go back
      let currentCityIdxRotated = j % distances.length;
      let fuelFromCurrentCity = fuel[currentCityIdxRotated];
      let milesFromCurrentCity = distances[currentCityIdxRotated];
      fuelLeft += fuelFromCurrentCity * mpg - milesFromCurrentCity;
    }
    if (fuelLeft >= 0) return i;
  }
}
