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
    return "πΏπΏπΏπΏ!";
  } else if (distance < 40) {
    return "πΏπΏπΏ";
  } else if (distance < 60) {
    return "πΏπΏ";
  } else if (distance < 100) {
    return "πΏ";
  } else if (distance < 180) {
    return "π§";
  } else if (distance < 360) {
    return " π§π§";
  } else {
    return "π₯Άπ§π§π§";
  }
}
