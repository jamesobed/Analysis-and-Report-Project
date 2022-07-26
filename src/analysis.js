const { getTrips, getDriver } = require("api");

/**
 * This function should return the trip data analysis
 *
 * Question 3
 * @returns {any} Trip data analysis
 */
async function analysis() {
  const input = await getTrips();
  const data = input.map((i) => {
    i.billedAmount = Number(i.billedAmount.toString().split(",").join(""));
    return i;
  });
  let output = {};
  output.noOfCashTrips = 0;
  output.noOfNonCashTrips = 0;
  output.billedTotal = 0;
  output.cashBilledTotal = 0;
  output.nonCashBilledTotal = 0;
  output.noOfDriversWithMoreThanOneVehicle = 0;
  let uniqueDriversID = [];
  for (let i of data) {
    if (i.isCash) {
      output.noOfCashTrips = ++output.noOfCashTrips;
      output.cashBilledTotal = parseFloat(
        (output.cashBilledTotal + i.billedAmount).toFixed(2)
      );
    } else {
      output.noOfNonCashTrips = ++output.noOfNonCashTrips;
      output.nonCashBilledTotal = parseFloat(
        (output.nonCashBilledTotal + i.billedAmount).toFixed(2)
      );
    }
    output.billedTotal = parseFloat(
      (output.billedTotal + i.billedAmount).toFixed(2)
    );
    if (!uniqueDriversID.includes(i.driverID)) uniqueDriversID.push(i.driverID);
  }

  const drivers = [];
  uniqueDriversID.forEach((i) => drivers.push(getDriver(i)));

  const driverData = await Promise.allSettled(drivers);
  // console.log(driverData);
  for (let i of driverData) {
    if (i.status === "fulfilled" && i.value.vehicleID.length > 1)
      output.noOfDriversWithMoreThanOneVehicle =
        ++output.noOfDriversWithMoreThanOneVehicle;
  }
  const eachDriverTotalTrips = {};
  const eachDriverTotalEarning = {};
  for (let i of uniqueDriversID) {
    eachDriverTotalTrips[i] = 0;
    eachDriverTotalEarning[i] = 0;
    for (let j of data) {
      if (i === j.driverID) {
        eachDriverTotalTrips[i] = ++eachDriverTotalTrips[i];
        eachDriverTotalEarning[i] = parseFloat(
          (eachDriverTotalEarning[i] + j.billedAmount).toFixed(2)
        );
      }
    }
  }
  // console.log(eachDriverTotalEarning,eachDriverTotalTrips)
  const sumDriverTrips = Object.values(eachDriverTotalTrips);
  const sumDriverEarning = Object.values(eachDriverTotalEarning);
  // console.log(sumDriverEarning,sumDriverTrips)
  const mostTripDriver = sumDriverTrips.reduce((a, b) => (a > b ? a : b), 0);
  const highestEarner = sumDriverEarning.reduce((a, b) => (a > b ? a : b), 0);
  console.log(highestEarner, mostTripDriver);
  const mostTripDriverIndex = sumDriverTrips.indexOf(mostTripDriver);
  const highestEarnerIndex = sumDriverEarning.indexOf(highestEarner);
  console.log(mostTripDriverIndex, highestEarnerIndex);
  // console.log(uniqueDriversID[mostTripDriverIndex])
  const mostTripsByDriver = await getDriver(
    uniqueDriversID[mostTripDriverIndex]
  );
  const highestEarningDriver = await getDriver(
    uniqueDriversID[highestEarnerIndex]
  );
  // console.log(mostTripsByDriver,highestEarningDriver)
  output.mostTripsByDriver = {
    name: mostTripsByDriver.name,
    email: mostTripsByDriver.email,
    phone: mostTripsByDriver.phone,
    noOfTrips: mostTripDriver,
    totalAmountEarned: sumDriverEarning[mostTripDriverIndex],
  };
  output.highestEarningDriver = {
    name: highestEarningDriver.name,
    email: highestEarningDriver.email,
    phone: highestEarningDriver.phone,
    noOfTrips: sumDriverTrips[highestEarnerIndex],
    totalAmountEarned: highestEarner,
  };
  return output;
}
analysis();
module.exports = analysis;
