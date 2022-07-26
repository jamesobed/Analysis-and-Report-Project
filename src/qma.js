const { getTrips, getDriver, getVehicle } = require("api");
async function driverReport() {
  //   const response = await getTrips();
  //   response;

  //   const driverIdArray = response.map((object) => {
  //     return object.driverID;
  //   });

  //   const singleDriverIdArray = Array.from(new Set(driverIdArray));

  //   const output = [];

  //   /**
  //    * @createUser function that create customer transported by each driverID
  //    *  return an array of customer objects for each driver
  //    */

  //   const createUser = (trip) => {
  //     const user = {
  //       user: trip.user.name,
  //       created: trip.created,
  //       pickup: trip.pickup.address,
  //       destination: trip.destination.address,
  //       billed: parseFloat(String(trip.billedAmount).replace(/,/g, "")),
  //       isCash: trip.isCash,
  //     };
  //     return user;
  //   };

  //   /**
  //    * @createVechicle function that create user vechicle for each driver
  //    * function map the given array of vechicle info to an array of user objects
  //    *  return just the plate number and manufacturer for each driver
  //    */

  //   const createVehicle = (arr) => {
  //     const vehicleArray = arr.map((object) => {
  //       const plate = object.value.plate;
  //       const manufacturer = object.value.manufacturer;
  //       return { plate: plate, manufacturer: manufacturer };
  //     });
  //     return vehicleArray;
  //   };

  //   /**
  //    * @forloop iterate through all the unique driver IDs
  //    * and create all the trips carried by each driver
  //    *  return an object report of driver, each driver trips and vechicle info
  //    */

  //   for (let i = 0; i < singleDriverIdArray.length; i++) {
  //     const driverReport = {};

  //     const driverResponse = getDriver(singleDriverIdArray[i]);
  //     const driverInfo = await Promise.allSettled([driverResponse]);
  //     console.log(driverInfo);

  //     const vehiclePromise = [];
  //     const vehicleInfoArray = [];
  //     //   get some basic details about the driver
  //     if (driverInfo[0].status === "fulfilled") {
  //       driverReport["fullName"] = driverInfo[0].value.name;
  //       driverReport["phone"] = driverInfo[0].value.phone;

  //       const vehicleIdArray = driverInfo[0].value.vehicleID;

  //       for (let id of vehicleIdArray) {
  //         const vehicleResponse = getVehicle(id);
  //         vehiclePromise.push(vehicleResponse);
  //       }
  //     }
  //     // console.log(vehiclePromise);
  //     for (let promise of vehiclePromise) {
  //       const vehicleInfo = await Promise.allSettled([promise]);
  //       vehicleInfoArray.push(vehicleInfo);
  //     }
  //     //   console.log(vehicleInfoArray.flat(1));
  //     // console.log(vehicleInfoArray.flat(Infinity));
  //     const vehicleInfoArrayFlat = vehicleInfoArray.flat(Infinity);
  //       vehicleInfoArrayFlat;

  //     driverReport["id"] = singleDriverIdArray[i];
  //     driverReport["vehicles"] = createVehicle(vehicleInfoArrayFlat);
  //     driverReport["noOfTrips"] = 0;
  //     driverReport["noOfCashTrips"] = 0;
  //     driverReport["noOfNonCashTrips"] = 0;
  //     (driverReport["trips"] = []),
  //       (driverReport["totalAmountEarned"] = 0),
  //       (driverReport["totalCashAmount"] = 0),
  //       (driverReport["totalNonCashAmount"] = 0);
  //     //   response;
  //     for (let object of response) {
  //       if (singleDriverIdArray[i] === object.driverID) {
  //         driverReport.noOfTrips = ++driverReport.noOfTrips;
  //         driverReport.trips.push(createUser(object));
  //         const billedAmount =
  //           driverReport.totalAmountEarned +
  //           parseFloat(String(object.billedAmount).replace(/,/g, ""));
  //         driverReport.totalAmountEarned = Number(billedAmount.toFixed(2));

  //         if (object.isCash) {
  //           driverReport.noOfCashTrips = ++driverReport.noOfCashTrips;
  //           const billedAmount =
  //             driverReport.totalCashAmount +
  //             parseFloat(String(object.billedAmount).replace(/,/g, ""));
  //           driverReport.totalCashAmount = Number(billedAmount.toFixed(2));
  //         } else {
  //           driverReport.noOfNonCashTrips = ++driverReport.noOfNonCashTrips;
  //           const billedAmount =
  //             driverReport.totalNonCashAmount +
  //             parseFloat(String(object.billedAmount).replace(/,/g, ""));
  //           driverReport.totalNonCashAmount = Number(billedAmount.toFixed(2));
  //         }
  //       }
  //     }
  //     output.push(driverReport);
  //   }

  //   return output;

  let trips = await getTrips();
  let input = trips.map((i) => {
    i.billedAmount = Number(i.billedAmount.toString().split(",").join(""));
    return i;
  });
  let uniqueID = [];
  for (let i of input) {
    if (!uniqueID.includes(i.driverID)) {
      uniqueID.push(i.driverID);
    }
  }
  let driverPromise = [];
  for (let i of uniqueID) {
    driverPromise.push(getDriver(i));
  }
  const driverInfo = await Promise.allSettled(driverPromise);
  // driverInfo
  const vechicleId = [];
  for (let i of driverInfo) {
    if (i.status === "fulfilled") vechicleId.push(i.value.vehicleID);
  }
  // vechicleId;
  let vechiclePromise = [];
  for (let i of vechicleId) {
    let response = [];
    for (let j of i) {
      response.push(getVehicle(j));
    }
    vechiclePromise.push(response);
  }
  vechiclePromise;

  let vechicleDetails = [];
  for (let i of vechiclePromise) {
    vechicleDetails.push(await Promise.allSettled(i));
  }
  console.log(vechicleDetails.flat(1));
  /////////////////////////////////
  const vehi = (arr) => {};

  ///////////////////////
  const vechicle = [];
  for (let i of vechicleDetails) {
    // vechicle.push(vech(i))
  }
}
driverReport();
