export const navItems = [
  { name: "About", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "GIAIC",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[20vh]",
    imgClassName: "w-full h-full",
    titleClassName: "top-0 right-0 p-4 text-white" ,// New positioning and style for title
    img: "../images/air.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Building the future, one line at a time.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Next.js Project: Facebook Clone Development",
    des: "Develop a fully functional Facebook clone using Next.js, complete with features such as:\n- User Authentication: Secure sign-up and login processes.\n Dynamic User Profiles: Personalized profiles with profile pictures and bios.\n- Post Creation and Editing: Users can create, edit, and delete posts with rich text formatting.",
    img: "/images/facebook.png",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg",],
    link: "https://github.com/wajahatali/projects",
  },
  
  {
    id: 2,
    title: "MarketHub in Next.js",
    des: "Create a simple ecommerce website with wide range of products from fashion to technology design in Next.js to get started with the framework.",
    img: "/images/ecom.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg" , "/re.svg",],
    link: "https://github.com/wajahatali/projects",
  },
  {
    id: 3,
    title: "Feature Packed Todo List Application Built in Next.js",
    des: "Simple To-list app for managing tasks efficiently with features like adding,editing,and deleting tasks.",
    img: "/images/todo.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/wajahatali/projects",
  },
  {
    id: 4,
    title: "Savor the Flavor Enhance Your Culinary Journey",
    des: "Design a world of gourmet burgers, where each bite is a delicious journey of taste and creativity pour in Next.js for easy customization and having reservation API fetching",
    img: "/images/web.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg" , "/re.svg",],
    link: "https://github.com/wajahatali/projects",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Intern",
    desc: "Assisted in the development of a web-based platform using Typescript And React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp15.svg",
  },
  {
    id: 2,
    title: "Wesite Developer",
    desc: "Designed and developed web designs and clone of different platforms using React/ Next Js.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp12.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp14.svg",
  },
  {
    id: 4,
    title: "Responsive Design",
    desc: "Approach guarantees that your users have an optimal experience, whether on a desktop, tablet, or smartphone",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp17.svg",
  },
];




// data.js
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export const socialMedia = [
  { id: 1, icon: FaTwitter, link: "https://twitter.com/wajahatali" },
  { id: 2, icon: FaLinkedin, link: "https://www.linkedin.com/in/wajahat-ali-3189862b4" },
  { id: 3, icon: FaFacebook, link: "https://www.facebook.com/Wajii10/" },
  { id: 4, icon: FaInstagram, link: "https://www.instagram.com/_wajo41_" },
  { id: 5, icon: FaGithub, link: "https://github.com/WajahatAli3218664" },
];
