// Code your solution in this file!

//DRIVERS ARRAY
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

// FUNCTION TO RETURN FIRST TWO DRIVERS FROM ARRAY
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// FUNCTION TO RETURN LAST TWO DRIVERS FROM ARRAY
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}
// ARRAY CONTAINING SELECTING DRIVERS FUNCTIONS
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// FUNCTION TO CREATE THE FARE MULTIPLIER
function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

// FUNCTION OT DOUBLE FARES
const fareDoubler = createFareMultiplier(2);

// FUNCTION OT triple FARES
const fareTripler = createFareMultiplier(3);

// FUNCTION TO SELECT DIFF. DRIVERS BASEED ON PROVIDED FUNC.
function selectDifferentDrivers(drivers, selectingFunction) {
  return selectingFunction(drivers);
}
