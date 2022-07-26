// var cars = [
//     { make: "audi", model: "r8", year: "2012" },
//     { make: "audi", model: "rs5", year: "2013" },
//     { make: "ford", model: "mustang", year: "2012" },
//     { make: "ford", model: "fusion", year: "2015" },
//     { make: "kia", model: "optima", year: "2012" },
//   ],
//   result = cars.reduce((r, a) => {
//     r[a.make] = r[a.make] || [];
//     r[a.make].push(a);
//     return r;
//   }, Object.create(null));

// console.log(result);

// grpBy = (make, cars) => {
//   cars.reduce((a, b) => ({
//     ...a,
//     [b[make]]: b[make] in a ? a[b[make]].concat[b] : [b],
//   }));
// };

// // console.log(grpBy('make',cars))

// const { getTrips, getDriver } = require("./node_modules/api/index");
const { getTrips, getDriver } = require("api");

/**
 * This function should return the trip data analysis
 *
 * Question 3
 * @returns {any} Trip data analysis
 */
async function analysis() {
  let trips = await getTrips();
  // Your code goes here
  const response = await getTrips();

  const myResponse = JSON.parse(JSON.stringify(response)).map((input) => {
    // console.log(input);
    input.myBilledAmount = parseFloat(
      input.billedAmount.toString().replace(/,/g, "")
    );
    return input;
  });
  // console.log(myResponse)
  const output = {};
  let vD = [];
  const mostTripsByDriver = {};
  const highestEarningDriver = {};
  let noOfCashTrips = 0;
  let noOfNonCashTrips = 0;
  let billedTotal = 0;
  let cashBilledTotal = 0;
  let nonCashBilledTotal = 0;

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  const arr1 = [];
  const obj1 = {};
  let dataOb = [];
  let dataMoney = [];
  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  for (let i of myResponse) {
    if (i.isCash === true) {
      cashBilledTotal += Math.round(i.myBilledAmount);
      noOfCashTrips++;
    } else {
      nonCashBilledTotal += Math.round(i.myBilledAmount);
      noOfNonCashTrips++;
    }

    arr1.push(i.driverID);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  // console.log('DriverID',arr1)
  // for (let i of arr1) {
  //   obj1[i] = getDriver(i).catch(() => null);
  // }
  // let sepo = await Promise.all(Object.values(obj1));
  // console.log(sepo);

  // for (let i of sepo) {
  //   if (i !== null) {
  //     if (i.vehicleID.length > 1) {
  //       vD.push(i);
  //     }
  //   }
  // }
  // // console.log(sepo);
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////
  // driversArray = myResponse.reduce((r, a) => {
  //   r[a.driverID] = r[a.driverID] || [];
  //   r[a.driverID].push(a);
  //   return r;
  // }, Object.create(null));

  // // console.log(driversArray);
  // // console.log(Object.keys(driversArray))
  // // console.log(Object.keys(driversArray).length)

  // for (const key of Object.keys(driversArray)) {
  //   dataOb.push(driversArray[key]);
  // }
  // // console.log(dataOb.flat());

  // const work = dataOb.map((i) => {
  //   // i.totalAmountEarned = i['billedAmount'].reduce((a, b) => a + b, 0);
  //   return i;
  // });
  // // console.log(work)

  // let check = [];
  // for (let i of dataOb) {
  //   check.push(i.length);
  // }
  // // console.log(check)
  // // console.log(check.reduce((i,j)=>i+j,0))

  // const mostTripsByDriverM = dataOb.reduce((a, b) =>
  //   a.length > b.length ? a : b
  // );
  // console.log(mostTripsByDriverM.length);
  // mostTripsByDriver.noOfTrips = mostTripsByDriverM.length;

  // ////////////////////////////////////////////////////////////////////////////////////////////////////////

  // billedTotal = nonCashBilledTotal + cashBilledTotal;
  // output.noOfCashTrips = noOfCashTrips;
  // output.noOfNonCashTrips = noOfNonCashTrips;
  // output.billedTotal = billedTotal;
  // output.cashBilledTotal = cashBilledTotal;
  // output.nonCashBilledTotal = nonCashBilledTotal;
  // output.noOfDriversWithMoreThanOneVehicle = vD.length;
  // output.mostTripsByDriver = {};
  // output.highestEarningDriver = {};

  // console.log(JSON.parse(JSON.stringify(output)));
  // return output;
}

analysis();

module.exports = analysis;
