import { NoteTwoTone } from "@material-ui/icons";
import firoj from "./assets/founder3.png";
// import { GitHub } from "@material-ui/icons";
// constants

const cardData = [
  {
    id: 1,
    name: "Ace-Development",
    date: "2021-05-11",
    type: "fullstack",
    image: firoj,
    data: "It is production ready software solution company. It was my initial journey to learn MaterialUI Framework Practically.",
    technologies: [
      "React",
      "Material-UI",
      "React-Lotte",
      "NextJS",
      "Lambda-function",
    ],
    live: "https://ace-development.netlify.app/",
    sourceCode: "https://github.com/fir0j/arc-developent-with-nextjs",
  },

  {
    id: 2,
    name: "Current Portfolio",
    date: "2020-02-01",
    image: firoj,
    data: "It is the portfolio which your are viewing right now. It is also my most recent work in frontend.",
    type: "fullstack",
    technologies: [
      "React",
      "Material-UI",
      "React-Spring",
      "VisX",
      "Lambda-function",
    ],
    live: "https://fir0j.netlify.app/",
    sourceCode: "https://github.com/fir0j/MyPresenceInInternet",
  },

  {
    id: 3,
    name: "Google Calender Clone",
    date: "2018-10-02",
    type: "frontend",
    image: firoj,
    data: "I tried to clone the basic features of google calender. It can perform CRUD Operation on calendar events.",
    technologies: ["React", "Tailwind", "FullCalendar"],
    live: "https://fir0j.github.io/Google-Calender/",
    sourceCode: "https://github.com/fir0j/Google-Calender",
  },

  {
    id: 4,
    name: "Social-Network API",
    image: firoj,
    date: "2021-05-10",
    type: "backend",
    data: "It supports sophisticated authentication with CRUD operation on users and their post along with features such as comment, like, follow and many other features.",
    technologies: [
      "Node.js",
      "Express.js",
      "JWT",
      "Mongoose",
      "MongoDB",
      "Express-Validator",
      "bcrypt",
    ],
    live: "url",
    sourceCode: "https://github.com/fir0j/SocialNetworkAPI",
  },

  {
    id: 5,
    name: "Portfolio Server",
    date: "2017-07-07",
    image: firoj,
    type: "backend",
    data: "I created it as the backend for this portfolio app. It supports authentication coupled with Redis database, CRUD operations along with Filter, Sorting and Pagination its dataset.",
    technologies: [
      "Node",
      "Express",
      "cors",
      "mongoose",
      "redis",
      "helmet",
      "mongoDB",
      "multer-s3",
    ],
    live: "url",
    sourceCode: "https://github.com/fir0j/portfolio-server",
  },

  {
    id: 6,
    name: "UCGPA Calculator",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    data: " This app has ability to find out correct CGPA for both regualar and for students having backlog history in VTU. Generally apps available in the market for this purpose only works for students having regular history.",
    technologies: ["HTML", "CSS", "Javascript"],
    live: "https://fir0j.github.io/Universal-cgpa-calculator/",
    sourceCode: "https://github.com/fir0j/Universal-cgpa-calculator",
  },

  {
    id: 7,
    name: "Shopping-Cart Assessment",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    data: "It was an assessment work given by totalCloud Corporation for shortlisting candidate as web developer.",
    technologies: ["React", "font-awesome"],
    live: "url",
    sourceCode: "https://github.com/fir0j/shopping-cart_assessment",
  },

  {
    id: 8,
    name: "Andrie shopping Store",
    date: "2018-10-01",
    image: firoj,
    data: "It is an online shopping store.",
    type: "fullstack",
    technologies: ["React", "Material-UI", "React-Spring", "Javascript"],
    live: "url",
    sourceCode: "url",
  },

  {
    id: 9,
    name: "Trendy-Fashion-Ecommerce",
    date: "2018-10-01",
    image: firoj,
    type: "fullstack",
    data: "It is an online shopping store.",
    technologies: ["React", "Node"],
    live: "url",
    sourceCode: "https://github.com/fir0j/Trendy-Fashion-Ecommerce",
  },

  {
    id: 10,
    name: "Google.com Clone",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    data: "It was task given to me for the selection for Internship.",
    technologies: ["HTML", "CSS"],
    live: "https://fir0j.github.io/Google-Homepage/",
    sourceCode: "https://github.com/fir0j/Google-Homepage",
  },
  {
    id: 11,
    name: "Google Result Clone",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    data: "It was task given to me for the selection for Internship.",
    technologies: ["HTML", "CSS"],
    live: "https://fir0j.github.io/Google-Result/",
    sourceCode: "https://github.com/fir0j/Google-Result",
  },

  {
    id: 12,
    name: "Facebook Login Clone",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    data: "It was task given to me for the selection for Internship.",
    technologies: ["HTML", "CSS"],
    live: "https://fir0j.github.io/Facebook-Login/",
    sourceCode: "https://github.com/fir0j/Facebook-Login",
  },

  {
    id: 13,
    name: "Gradient-Generator",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    data: "It helps developer to generate gradient background for their app.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    live: "https://fir0j.github.io/Background-Generator/",
    sourceCode: "https://github.com/fir0j/Background-Generator",
  },

  {
    id: 14,
    name: "SmartBrain FaceDetection",
    date: "2018-10-01",
    image: firoj,
    type: "fullstack",
    data: "It was my very first react project. It supports crud on users profile. It uses clarifai API to detect face in images.",
    technologies: [
      "React",
      "React-tilt",
      "clarifai",
      "Tachyons",
      "Node",
      "PosgreSQL",
    ],
    live: "https://smartbr4in.herokuapp.com",
    sourceCode: "https://github.com/fir0j/smartbrain-front-end",
  },

  {
    id: 15,
    name: "Meeting Scheduler",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    data: "It was an assessment given by totalCloud incorporation to me. It visualizes the day on which interns have day off.",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "bootstrap", "chart.js"],
    live: "https://fir0j.github.io/Meeting-Schedular/",
    sourceCode: "https://github.com/fir0j/Meeting-Schedular",
  },

  {
    id: 16,
    name: "Old Portfolio",
    date: "2011-10-01",
    image: firoj,
    data: "It is my very first portfolio app. It includes by academic background and work details.",
    type: "frontend",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "jQuery"],
    live: "https://fir0j.github.io/",
    sourceCode: "https://github.com/fir0j/fir0j.github.io",
  },
];

// functions
const sortArrayOfObjectByStringValue = (filteredData, order = "asc") => {
  if (order === "asc") {
    let sortedObjectArray = filteredData.sort((a, b) => {
      const firstElement = a.name.toLowerCase();
      const secondElement = b.name.toLowerCase();
      if (firstElement < secondElement) return -1;
      if (firstElement > secondElement) return 1;
      return 0; // firstElement === seconoElement
    });
    return sortedObjectArray;
  } else {
    let sortedObjectArray = filteredData.sort((b, a) => {
      const firstElement = a.name.toLowerCase();
      const secondElement = b.name.toLowerCase();
      if (firstElement < secondElement) return -1;
      if (firstElement > secondElement) return 1;
      return 0; // firstElement === seconodElement
    });
    return sortedObjectArray;
  }
};

const sortArrayOfObjectByDateValue = (filteredData, order = "oldFirst") => {
  if (order === "oldFirst") {
    let sortedObjectArray = filteredData.sort((a, b) => {
      let timeStamp1 = new Date(a.date).valueOf();
      let timeStamp2 = new Date(b.date).valueOf();
      return timeStamp1 - timeStamp2; // similar to interger sort
      // sorting byMonth
      // let date1 = new Date(a.date);
      // let date2 = new Date(b.date);
      // if (date1.getUTCMonth() > date2.getUTCMonth()) return -1;
      // if (date1.getUTCMonth() < date2.getUTCMonth()) return 1;
      // return date1.getUTCDate() - date2.getUTCDate();
    });
    return sortedObjectArray;
  } else {
    let sortedObjectArray = filteredData.sort((b, a) => {
      let timeStamp1 = new Date(a.date).valueOf();
      let timeStamp2 = new Date(b.date).valueOf();
      return timeStamp1 - timeStamp2;
      // sorting byMonth
      // let date1 = new Date(a.date);
      // let date2 = new Date(b.date);
      // if (date1.getUTCMonth() > date2.getUTCMonth()) return -1;
      // if (date1.getUTCMonth() < date2.getUTCMonth()) return 1;
      // return date1.getUTCDate() - date2.getUTCDate();
    });
    return sortedObjectArray;
  }
};

export {
  sortArrayOfObjectByStringValue,
  sortArrayOfObjectByDateValue,
  cardData,
};
