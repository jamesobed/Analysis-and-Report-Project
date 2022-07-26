const { getTrips, getDriver } = require('api');

/**
 * This function should return the data for drivers in the specified format
 *
 * Question 4
 *
 * @returns {any} Driver report data
 */
async function driverReport() {
    let trips = await getTrips();
    // trips
    const groupTripsByDriver = (i,arr)=>arr.reduce((a,b)=>({...a,[b[i]]:a[b[i]]?a[b[i]].concat(b):[b]}),{})
    let groupTrips = groupTripsByDriver('driverID',trips)

    let driverTrip=Array.from(groupTrips)
    driverTrip

    groupTrips
    let arr = []
    for (let i of trips){
        if(!arr.includes(i.driverID)){
            arr.push(i.driverID)
        }
    }
    // arr
    let driverPromis = Object.values(groupTrips)
    console.log(driverPromis.length)
    let driverPromise = []
    
    // driverPromise
    const driverDetails = await Promise.allSettled(driverPromise)
    // driverDetails
}
driverReport()


let objjj = {name:'Obed'}

objjj.name