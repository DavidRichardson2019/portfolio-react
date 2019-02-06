import project1 from '../images/number-memory.png';
import project2 from '../images/homework.png';
import project3 from '../images/greenhouse.png';

let array = [
  {
    img: project1,
    imgUrl: '../images/number-memory.png',
    title: "Number Memory",
    text: "This is a project I made for my AP Computer Science class. This app displays an x digit number for an x amount of time both depending on your level, and then you repeat the number back correctly to move on. This app was creeated in Swift using xCode and was tested on an iPhone 8.",
  },
  {
    img: project2,
    imgUrl: '../images/number-memory.png',
    title: "Homework List",
    text: "This is an app I made to help me remember my homework assignments. With this, I can add items, mark them as completed, and delete them. I put a lot of effort into making this app write to the device, saving the data after closing the application. In previeus versions of this program, I had it writing to a database API hosted by google, but the API has sense updated and the old app is broken.",
  },
  {
    img: project3,
    imgUrl: '../images/number-memory.png',
    title: "David's Greenhouse",
    text: "This is a website I made displaying a project for school, an enviormently friendly tiny house. I made this website to display my tiny house at the State Museum Eco Science Fair.",
  },
]

export default array;
