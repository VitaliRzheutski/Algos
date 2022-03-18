// Time: O(N^2)
// Space : O(1)
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

// Time: O(N)
// Space : O(1)
//Find the city that we enter with the minimum amount of gas left ,it doesn't matter which city we started at to get there
//We MUST start at that city. because otherwise we'll never be able to reach it from any other city as we'll have
//the minimum(negative) amount of gas if we start from any other city

//NOTICE! the prompt says that we'll always have enough fuel amount to get to each city
//The city with the biggest amount of fuel is the answer, because if we start from that city we'll have the max amoubt of fuel
//to go further

//lets assume that at city 0 our gas start at 0 (because we haven't travelled to city 0 from anywhere);
//So when we are at next city i (let's say we drove to city i=1)-> let's count how much we have gas remaining
//after we drove from prev city

//keep track of the minimum fuel we can get at each city
//ONCE we get to the city that has the least amount of gas left =>IT means THAT IS THE CITY WE SHUOLD START AT
//It means that if we start at any other city anyway we will always reach city 4 with a negative amount of gas
//and we'll always have the minimum amount of gas
//!!!Plan:!!!
//1.go through all the cities
//2.calculate how much fuel left we have at each city
//3.save the minimum fuel amount we have while travelling
//4.return the city that has the minimum amount of fuel when we reached it
function validStartingCity(distances, fuel, mpg) {
  let fuelLeft = 0;
  let start = 0; //idx of city candidate (from the beginning we assume it's city 0)
  let fuelRemainingFromCityCandidate = 0; //-5

  for (let i = 1; i < distances.length; i++) {
    let distanceFromPrevCity = distances[i - 1]; //how much I had to drive to get here   //5
    let fuelFromPrevCity = fuel[i - 1]; //how much can I get at the previous citi's gas station ///1

    //how much fuel we have left at our tank when we reached current city i
    fuelLeft += fuelFromPrevCity * mpg - distanceFromPrevCity; //10

    if (fuelLeft < fuelRemainingFromCityCandidate) {
      fuelRemainingFromCityCandidate = fuelLeft; //store at city that we started that fuelcount
      start = i; //remember the city that has the minimum amount of fuel when we reached it
    }
  }
  return start;
}

// Do not edit the line below.
exports.validStartingCity = validStartingCity;
