import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaLaravel, FaReact, FaNodeJs } from "react-icons/fa";
import grocerybud from "./assets/grocerybud.png";
import mixmaster from "./assets/mixmaster.png";
import unsplash from "./assets/unsplash.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

// export const social = [
//   {
//     id: nanoid(),
//     title: "github",
//     url: "https://github.com/rrusyaidii",
//   },
//   {
//     id: nanoid(),
//     title: "linkedin",
//     url: "https://www.linkedin.com/in/haziq-rusyaidi-zainal-abidin/",
//   },
// ];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in HTML & CSS, capable of creating visually appealing and responsive websites to enhance user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Knowledgeable in JavaScript, developing interactive and dynamic web applications with a focus on smooth user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in React, building efficient and interactive front-end applications with an emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Laravel",
    icon: <FaLaravel className="h-16 w-16 text-emerald-500" />,
    text: "Currently exploring Laravel, with a growing understanding of its features and best practices for building dynamic and efficient web applications.",
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Currently exploring NodeJS, with a growing understanding of its features and best practices for building dynamic and efficient web applications.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: mixmaster,
    url: "https://dancing-queijadas-bf8c62.netlify.app/",
    github: "https://github.com/rrusyaidii/mixmaster",
    title: "MixMaster",
    text: "This project is MixMaster, a party sidekick app designed for mixologists and cocktail enthusiasts. It fetches a variety of enchanting drink recipes from the Cocktails DB API. Users can search for cocktails by name and view detailed information, including ingredients, instructions, and images. The app also offers a newsletter subscription for updates and new recipes. MixMaster ensures a seamless experience with comprehensive error handling and user-friendly features.",
  },
  {
    id: nanoid(),
    img: unsplash,
    url: "https://unrivaled-gecko-2f7af6.netlify.app/",
    github: "https://github.com/rrusyaidii/unsplash-images",
    title: "React Unsplash Image Gallery",
    text: "This project is a simple image gallery built with React and Vite that fetches images from the Unsplash API. Users can search for images and view them in a modal window. The app is fully responsive and optimized for mobile devices with light and dark mode options.",
  },
  {
    id: nanoid(),
    img: grocerybud,
    url: "https://storied-eclair-538ce0.netlify.app/",
    github: "https://github.com/rrusyaidii/Grocery-bud",
    title: "Grocery Bud",
    text: "This project is a simple React application that allows users to create, edit, and remove items from a grocery list. It uses localStorage to persist data across sessions and react-toastify for notifications.",
  },
  // {
  //   id: nanoid(),
  //   img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   url: "https://react-projects.netlify.app/",
  //   github: "https://github.com/john-smilga",
  //   title: "third project",
  //   text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  // },
];
