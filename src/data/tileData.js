import image1 from '../images/image1.JPG';
import image2 from '../images/image2.JPG';
import image3 from '../images/image3.JPG';
import image4 from '../images/image4.JPG';
import image5 from '../images/image5.JPG';
import image6 from '../images/image6.JPG';
import image7 from '../images/image7.JPG';
import image9 from '../images/image9.JPG';
import image11 from '../images/image11.JPG';
import image13 from '../images/image13.JPG';

let array = [
  {
    img: image1,
    title: '',
    author: '',
    cols: 1,
    rows: 1,
  },
  {
    img: image2,
    title: '',
    author: '',
    cols: 1,
    rows: 1,
  },
  {
    img: image3,
    title: '',
    author: '',
    cols: 1,
    rows: 1,
  },
  {
    img: image4,
    title: '',
    author: '',
    cols: 1,
    rows: 1,
  },
  {
    img: image5,
    title: '',
    author: '',
    cols: 1,
    rows: 1,
  },
  {
    img: image6,
    title: '',
    author: '',
    cols: 1,
    rows: 1,
  },
  {
    img: image7,
    title: '',
    author: '',
    cols: 1,
    rows: 1,
  },
  {
    img: image9,
    title: '',
    author: '',
    cols: 1,
    rows: 1,
  },
  {
    img: image11,
    title: '',
    author: '',
    cols: 1,
    rows: 1,
  },
  {
    img: image13,
    title: '',
    author: '',
    cols: 1,
    rows: 1,
  },
];

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
