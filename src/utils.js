// constants

const cardData = [
  {
    id: 1,
    name: "Video KYC System",
    date: "2023-01-01",
    type: "fullstack",
    data: "It is the real Video KYC System of Prabhu Bank, Nepal. It is composed of two applications. 1. Video KYC System App for customers 2. KYC desk App for admins.",
    technologies: [
      "React",
      "Redux",
      "HTTP",
      "Web Socket",
      "WebRTC",
      "Styled Compo.",
      "Djyango",
    ],
    live: "url",
    sourceCode: "secret-url",
  },

  {
    id: 2,
    name: "Network Dashboard",
    date: "2022-07-25",
    type: "fullstack",
    data: "The project is made for Prabhu Bank, Nepal. It focuses on realtime monitoring of active and inactive cctv, atms, firewalls and alerts the staffs about the same.",
    technologies: ["React", "Redux", "Web Socket", "Styled Compo.", "Djyango"],
    live: "url",
    sourceCode: "secret-url",
  },

  {
    id: 3,
    name: "Digital Logbook",
    date: "2022-02-18",
    type: "fullstack",
    data: "It is a very large application composed 4 independent applications which includes Courier System, Vehicle Reservation System, Data Chalani and Form Builder.",
    technologies: ["React", "Redux", "HTTP", "Styled Compo.", "Djyango"],
    live: "url",
    sourceCode: "secret-url",
  },

  {
    id: 4,
    name: "Ace-Development",
    date: "2021-05-11",
    type: "fullstack",
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
    id: 5,
    name: "Current Portfolio",
    date: "2020-02-01",
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
    id: 5,
    name: "Google Calender Clone",
    date: "2018-10-02",
    type: "frontend",
    data: "I tried to clone the basic features of google calender. It can perform CRUD Operation on calendar events.",
    technologies: ["React", "Tailwind", "FullCalendar"],
    live: "https://fir0j.github.io/Google-Calender/",
    sourceCode: "https://github.com/fir0j/Google-Calender",
  },

  {
    id: 7,
    name: "Social-Network API",
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
    live: "https://s0cial-network.herokuapp.com/",
    sourceCode: "https://github.com/fir0j/SocialNetworkAPI",
  },

  {
    id: 8,
    name: "Portfolio Server",
    date: "2017-07-07",
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
    id: 9,
    name: "UCGPA Calculator",
    date: "2018-10-01",
    type: "frontend",
    data: " This app has ability to find out correct CGPA for both regualar and for students having backlog history in VTU. Generally apps available in the market for this purpose only works for students having regular history.",
    technologies: ["HTML", "CSS", "Javascript"],
    live: "https://fir0j.github.io/Universal-cgpa-calculator/",
    sourceCode: "https://github.com/fir0j/Universal-cgpa-calculator",
  },

  {
    id: 10,
    name: "Select-n-Add Cart Assessment",
    date: "2018-10-01",
    type: "frontend",
    data: "It was an assessment work given by totalCloud Corporation for shortlisting candidate as web developer.",
    technologies: ["React", "font-awesome"],
    live: "https://fir0j.github.io/shopping-cart_assessment/",
    sourceCode: "https://github.com/fir0j/shopping-cart_assessment",
  },

  {
    id: 11,
    name: "easymart.online",
    date: "2018-10-01",
    type: "fullstack",
    data: "It is an online shopping store dedicated to Fashion. It was a pet project containing authentication, customer panel and admin dashboard.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    live: "https://www.easymart.online/",
    sourceCode: "https://github.com/fir0j/Trendy-Fashion-Ecommerce",
  },

  {
    id: 12,
    name: "Google.com Clone",
    date: "2018-10-01",
    type: "frontend",
    data: "It was task given to me for the selection for Internship. I tried making clone of google.com landing page.",
    technologies: ["HTML", "CSS"],
    live: "https://fir0j.github.io/Google-Homepage/",
    sourceCode: "https://github.com/fir0j/Google-Homepage",
  },

  {
    id: 13,
    name: "Google Result Clone",
    date: "2018-10-01",
    type: "frontend",
    data: "It was task given to me for the selection for Internship. I tried making clone of google search result landing page.",
    technologies: ["HTML", "CSS"],
    live: "https://fir0j.github.io/Google-Result/",
    sourceCode: "https://github.com/fir0j/Google-Result",
  },

  {
    id: 14,
    name: "Facebook Login Clone",
    date: "2018-10-01",
    type: "frontend",
    data: "It was task given to me for the selection for Internship. I tried making clone of facebook.com landing page.",
    technologies: ["HTML", "CSS"],
    live: "https://fir0j.github.io/Facebook-Login/",
    sourceCode: "https://github.com/fir0j/Facebook-Login",
  },

  {
    id: 15,
    name: "Gradient-Generator",
    date: "2018-10-01",
    type: "frontend",
    data: "It helps developer to generate gradient background for their app. It supports both automatic and manual mode of gradient generation.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    live: "https://fir0j.github.io/Background-Generator/",
    sourceCode: "https://github.com/fir0j/Background-Generator",
  },

  {
    id: 16,
    name: "Meeting Scheduler",
    date: "2018-10-01",
    type: "frontend",
    data: "It was an assessment given by totalCloud incorporation to me. It visualizes the day on which interns have day off.",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "bootstrap", "chart.js"],
    live: "https://fir0j.github.io/Meeting-Schedular/",
    sourceCode: "https://github.com/fir0j/Meeting-Schedular",
  },

  {
    id: 17,
    name: "My Old Portfolio",
    date: "2011-10-01",
    data: "It is my very first portfolio app. It includes by academic background and work details.",
    type: "frontend",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "jQuery"],
    live: "https://fir0j.github.io/",
    sourceCode: "https://github.com/fir0j/fir0j.github.io",
  },

  {
    id: 18,
    name: "Event Tracker",
    date: "2019-08-01",
    data: "It is my very first real world project. It displays events by scanning the folders from the client's computer in 3 different languages. The project link is not available as i have signed NDA for it.",
    type: "frontend",
    technologies: ["HTML", "CSS", "React", "multi-language"],
    live: "url",
    sourceCode: "secret-url",
  },

  {
    id: 19,
    name: "Lifepathsaala.com",
    date: "2020-11-01",
    data: "It is a start up company from Nepal, aiming to guide students on various life skills which are absolutely necessary in real life but are not taught in schools and colleges. It's first of its kind started as a company.",
    type: "frontend",
    technologies: ["HTML", "CSS", "JS"],
    live: "https://www.lifepathsaala.com/",
    sourceCode: "secret-url",
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
