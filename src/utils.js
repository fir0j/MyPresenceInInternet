import firoj from "./assets/founder3.png";
// import { GitHub } from "@material-ui/icons";
// constants

const cardData = [
  {
    id: 1,
    name: "1.Portfolio",
    date: "2021-05-11",
    type: "frontend",
    image: firoj,
    technologies: ["HTML", "CSS", "JS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 2,
    name: "2.Google Calender",
    date: "2020-02-01",
    image: firoj,
    type: "frontend",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node",
      "Material-UI",
      "React-Spring",
    ],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 3,
    name: "3.dummy Project",
    date: "2018-10-02",
    type: "backend",
    image: firoj,
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Material-UI",
      "React-Spring",
    ],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 4,
    name: "4.Ace-Development",
    image: firoj,
    date: "2021-05-10",
    type: "fullstack",
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 5,
    name: "5.Shopping Cart",
    date: "2017-07-07",
    image: firoj,
    type: "backend",
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 6,
    name: "6.my Dummy Project",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 7,
    name: "7.my Dummy Project",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 8,
    name: "8.my Dummy Project",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    technologies: ["React", "Material-UI", "React-Spring", "Javascript"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 9,
    name: "9.my Dummy Project",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 10,
    name: "10.my Dummy Project",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 11,
    name: "11.my Dummy Project",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 12,
    name: "12.my Dummy Project",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 13,
    name: "13.my Dummy Project",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 14,
    name: "14.my Dummy Project",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 15,
    name: "15.my Dummy Project",
    date: "2018-10-01",
    image: firoj,
    type: "frontend",
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 16,
    name: "16.my Dummy Project",
    date: "2011-10-01",
    image: firoj,
    type: "frontend",
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 17,
    name: "17.my Dummy Project",
    date: "2028-10-01",
    image: firoj,
    type: "frontend",
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
  },
  {
    id: 18,
    name: "18.my Dummy Project",
    date: "2015-10-01",
    image: firoj,
    type: "frontend",
    technologies: ["HTML", "CSS", "React", "Material-UI", "React-Spring"],
    live: "url",
    sourceCode: "url",
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
