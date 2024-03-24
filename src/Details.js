// Enter all your detials in this file
// Logo images
import logogradient from "./assets/1.PNG";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Rahul Varshney",
  tagline: "I build things for web",
  img: profile,
  about: ` I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/rahul-varshney-ra7037/",
  github: "https://github.com/Rahul7037",
  twitter: "https://twitter.com/RahulVa06084138",
  instagram: "https://www.instagram.com/varshneyrahul203/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Udemy, YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Bachelor in Electronics & Communication",
    Company: `Your College Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Aug 2020 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "IMDB Clone",
    image: projectImage1,
    description: `This App is an  IMDB clone using HTML, CSS, JavaScript, and the OMDB API. This project aims to provide a user- friendly interface where users can search for movies and view detailed information about each movie. The application allows users to enter the name of a movie in the search bar, and upon submitting the search query, it fetches relevant movie data from the OMDB API. The retrieved information includes the movie's title, release year, genre, plot summary, cast, and ratings. `,
    techstack: "HTML/CSS, JavaScript, API",
    previewLink: "https://rahul7037.github.io/IMDB-Clone/",
    githubLink: "https://github.com/Rahul7037/IMDB-Clone",
  },
  {
    title: "Weather App",
    image: projectImage2,
    description: `This weather app was created using Node.js and an API to provide current weather conditions for a given location. Using Node.js and an API, this weather app allows users to quickly and easily check the current weather conditions for any location `,
    techstack: "HTML/CSS, Node JS, EJS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Rahul7037/Weather-App/blob/main/index.js",
  },
  {
    title: "TODO App",
    image: projectImage3,
    description: `The app is a NodeJS-based project using EJS and Express frameworks along with Cluster. It includes user authentication features such as login, signup, and logout pages, Allows users to create and save their to-do lists along with personal information like email, password, address, and phone number.`,
    techstack: "HTML/CSS,,Node JS, EJS,Cluster JavaScript",
    previewLink: "https://todoapp-lfgw.onrender.com/",
    githubLink: "https://github.com/Rahul7037/TodoApp",
  },
  {
    title: "Dropdown",
    image: projectImage4,
    description: `The React JS Dropdown project allows users to select data from a dropdown menu. The chosen option is then displayed, providing a seamless interactive experience.`,
    techstack: "React, JavaScript",
    previewLink: "https://dropdown-bwoj.onrender.com/",
    githubLink: "https://github.com/Rahul7037/DropDown",
  },
  {
    title: "Super Hero",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Rahul7037/Super-Hero-",
  },
  {
    title: "Ping Pong",
    image: projectImage6,
    description: `The game typically consists of a rectangular playing area, a paddle controlled by the player, and a ball that bounces around the screen. The objective is to hit the ball with the paddle and prevent it from hitting the edges of the playing area. Players score points by successfully hitting the ball past their opponent's paddle.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://rahul7037.github.io/Ping-Pong/",
    githubLink: "https://github.com/Rahul7037/Ping-Pong",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "varshneyrahul203@gmail.com",
  phone: "+91 7037307704",
};
