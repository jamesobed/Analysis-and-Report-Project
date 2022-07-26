const { getTrips, getDriver, getVehicle } = require("api");
async function driverReport() {
  let data1 = (await getTrips()).map((i) => {
    i.billedAmount = +i.billedAmount.toString().split(",").join("");
    return i;
  });
  const vechicleInfo = (vehicles) => {
    const driverVechicle = vehicles.map((i) => {
      const plate = i.value.plate;
      const manufacturer = i.value.manufacturer;
      return { plate: plate, manufacturer: manufacturer };
    });
    return driverVechicle;
  };
  const tripsDetails = (passengers) => {
    const passenger = {
      ["user"]: passengers.user.name,
      ["created"]: passengers.created,
      ["pickup"]: passengers.pickup.address,
      ["destination"]: passengers.destination.address,
      ["billed"]: passengers.billedAmount,
      ["isCash"]: passengers.isCash,
    };
    return passenger;
  };
  const driverIDArray = [...new Set(data1.map((i) => i.driverID))];
  for (let item = 0; item < driverIDArray.length; item++) {
    let i = driverIDArray[item];
    let output = {};
    const driver = await Promise.allSettled(
      driverIDArray.map((i) => getDriver(i))
    );
    // const vehicleIdArray = driver[item].value.vehicleIDs;
    vehicleIdArray;
  }
}
driverReport();
