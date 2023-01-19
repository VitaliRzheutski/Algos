var UndergroundSystem = function () {
  this.idMap = {};
  this.durationMap = {};
};

UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.idMap[id] = { startStation: stationName, time: t };
  console.log(this.idMap);
};
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  let checkInTime = this.idMap[id].time;
  let totalTime = t - checkInTime;
  let route = `${this.idMap[id].startStation} - ${stationName}`;
  if (!this.durationMap[route]) {
    this.durationMap[route] = [totalTime];
  } else {
    this.durationMap[route].push(totalTime);
  }
  return totalTime;
};

UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  let trip = `${startStation} - ${endStation}`;
  let routeInfo = this.durationMap[trip];
  let res = routeInfo.reduce((a, b) => a + b) / routeInfo.length;
  return res;
};
