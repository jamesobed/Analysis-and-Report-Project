const { getTrips, getDriver, getVehicle } = require("api");

/**
 * This function should return the data for drivers in the specified format
 *
 * Question 4
 *
 * @returns {any} Driver report data
 */
async function driverReport() {
  const data = await getTrips();
  const data1 = data.map((trip) => {
    trip.billedAmount = +trip.billedAmount.toString().split(",").join("");
    return trip;
  });

  let output = {};
  // "noOfTrips": 6,
  //     "noOfCashTrips": 1,
  //     "noOfNonCashTrips": 5,
  //     "trips":[]
  //     "totalAmountEarned": 11793.04,
  //     "totalCashAmount": 1715.16,
  //     "totalNonCashAmount": 10077.87

  const mySorted = (i, arr) =>
    arr.reduce(
      (a, b) => ({ ...a, [b[i]]: [b[i]] in a ? a[b[i]].concat([b]) : [b] }),
      {}
    );

  const sortedData = mySorted("driverID", data1);
  const data2 = Object.values(sortedData);
  // console.log(data2);
  const data3 = data2.map((i) => {
    i.noOfTrips = 0;
    i.noOfCashTrips = 0;
    i.noOfNonCashTrips = 0;

    i.totalAmountEarned = 0;
    i.totalCashAmount = 0;
    i.totalNonCashAmount = 0;

    for (j of i) {
      if (j.isCash === true) {
        i.totalCashAmount += j.billedAmount;
        i.noOfCashTrips++;
      } else {
        i.totalNonCashAmount += j.billedAmount;
        i.noOfNonCashTrips++;
      }
      i.totalAmountEarned += j.billedAmount;
      i.noOfTrips++;
    }
    return i;
  });
  // console.log(data3);
  const driverIDArray = [...new Set(data.map((i) => i.driverID))];
  // for (let i of data) {
  //     if(!driverIDArray.includes(i.driverID))driverIDArray.push(i.driverID)
  // }
  // driverIDArray;
  const driverPromise = driverIDArray.map((i) => getDriver(i));
  // driverPromise;
  const driverInfo = await Promise.allSettled(driverPromise);
//   driverInfo;

    output = {
        // fullName: 0,
        // phone: 0
    };
//   for (let i of driverInfo) {
//     // i.value.name
//     output["fullName"][i] = 0;
//     // output["phone"][i] = 0;
//     if (i.status === "fulfilled") {
//       // output.i.fullName = i.value.name;
//       //   output.i.phone = 0;
//       //   i.value.name
//     }
//   }
    for (let i = 0; i < driverInfo.length; i++){
      output['fullName'] = 0;
    }
  console.log(output);
}
driverReport();
