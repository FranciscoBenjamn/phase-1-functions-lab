// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
  return Math.abs(someValue - 42);
}
function distanceFromHqInFeet(someValue) { 
  return distanceFromHqInBlocks(someValue) * 264;
}
function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  return Math.abs(destination - start) * 264;
}
function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  
  if(distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) <= 2000)
  return (distanceTravelledInFeet(start,destination) - 400) * 0.02
  else if(distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500){
    return 25
  }
  else if (distanceTravelledInFeet(start, destination) > 2500){
    return 'cannot travel that far'
  } 
  else if(distanceTravelledInFeet(start, destination) < 400){
    return distanceTravelledInFeet(start, destination) * 0
  }
  }