//Image data for all modules (not background)
//Projects
import project1 from '../images/number-memory.png';
import project2 from '../images/homework.png';
import project3 from '../images/greenhouse.png';
//Contact
import github from '../images/logos/github.png';
import youtube from '../images/logos/youtube.png';
import gmail from '../images/logos/gmail.png';

let array = {
  projects: [
    {
      img: project1,
      imgUrl: '../images/number-memory.png',
      title: "Number Memory",
      text: "This is a project I made for my AP Computer Science class. This app displays an x digit number for an x amount of time both depending on your level and then you repeat the number back correctly to move on. This app was created in Swift using xCode and was tested on an iPhone 8.",
      key:"1",
    },
    {
      img: project2,
      imgUrl: '../images/number-memory.png',
      title: "Homework List",
      text: "This is an app I made to help me remember my homework assignments. With this, I can add items, mark them as completed, and delete them. I put a lot of effort into making this app write to the device, saving the data after closing the application. In previous versions of this program, I had it writing to a database API hosted by Google, but the API has since updated and the old app is broken.",
      key:"2",
    },
    {
      img: project3,
      imgUrl: '../images/number-memory.png',
      title: "David's Greenhouse",
      text: "This is a website I made displaying a project for school, an environmentally friendly tiny house. I made this website to display my tiny house at the State Museum Eco Science Fair.",
      key:"3",
    },
  ],
  contact: {
    github: {
      img: github,
      imgUrl: '../images/logos/github.png',
      key:"4",
    },
    youtube: {
      img: youtube,
      imgUrl: '../images/logos/youtube.png',
      key:"5",
    },
    gmail: {
      img: gmail,
      imgUrl: '../images/logos/youtube.png',
      key:"5",
    }
  }
}


export default array;
