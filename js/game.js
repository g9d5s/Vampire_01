// import {
//   getRandomNumber,
//   getDistance,
//   getDistanceHint
// } from './helper';


// Diego coordinates
const WIDTH = 400;
const HEIGH = 400;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
  
};
console.log(target);
// click handler
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (evento) {
  console.log('click');
  clicks++;
  let distance = getDistance(evento, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}  </h1>`

  if (distance < 20 ) {
    alert(`Found the Diego 🧛🏻‍♀️ ${clicks} clicks!`);
    location.reload();
  }
});
