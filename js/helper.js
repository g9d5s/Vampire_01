// generate a random Number
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// get the Distance of two points
let getDistance = (evento, target) => {
  let diffX = evento.offsetX - target.x;
  let diffY = evento.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// return an String depending on the distances 
let getDistanceHint = distance => {
  if (distance < 30) {
    return "👿👿👿👿!";
  } else if (distance < 40) {
    return "👿👿👿";
  } else if (distance < 60) {
    return "👿👿";
  } else if (distance < 100) {
    return "👿";
  } else if (distance < 180) {
    return "🧊";
  } else if (distance < 360) {
    return " 🧊🧊";
  } else {
    return "🥶🧊🧊🧊";
  }
}
