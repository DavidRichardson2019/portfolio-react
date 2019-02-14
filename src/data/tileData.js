let array = [];
function size(screenSize){
  images = 0;
  switch(screenSize) {
    case 1:
      images = 5;
      break;
    case 2:
      images = 6;
      break;
    case 3:
      images = 10;
      break;
    case 4:
      images = 15;
      break;
  }
}
//Fisher-Yates Shuffle Algorithm
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default shuffle(array);
