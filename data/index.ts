import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];
export const gridItems = [
  {
  id: 1,
  title: "About Me",
  description: "Hi, I'm a fullstack developer with a passion for creating beautiful, user-friendly websites. I find joy in designing interfaces that make technology more accessible and intuitive for everyone. To me, coding isn't just work – it's a relaxing escape where I can turn ideas into reality. I believe great design paired with solid functionality creates memorable digital experiences. I look forward to helping bring your vision to life through clean code and thoughtful design solutions.",
  className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  imgClassName: "w-full h-full",
  titleClassName: "justify-end",
  img: "",
  spareImg: "",
  link:"#about"

},
{
  id: 2,
  title: "Professional Journey",
  description: "Bringing proven team leadership and communication skills from diverse professional backgrounds into software development. Experienced in coordinating teams, facilitating clear communication, and adapting quickly to new challenges.",
  className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  imgClassName: "",
  titleClassName: "justify-start",
  img: "",
  spareImg: "",
  link:"#experience"

},
{
  id: 3,
  title: "Skills & Technologies",
  description: "",
  className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  imgClassName: "",
  titleClassName: "justify-center",
  img: "",
  spareImg: "",
},
{
  id: 4,
  title: "About Me",
  description: "",
  className: "lg:col-span-3 md:col-span-3 ",
  imgClassName: "",
  titleClassName: "justify-start",
  img: "",
  spareImg: "",
},

{
  id: 5,
  title: "Contact me below!",
  description: "Want to Connect?",
  className: "lg:col-span-2 md:col-span-3 ",
  imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  titleClassName: "justify-center md:justify-start lg:justify-center",
  img: "/b5.svg",
  spareImg: "/grid.svg",
  link:"#contact"
},
];
//   {
//     id: 1,
//     title: "About Me",  
//     description: "Crafting Digital Experiences with Passion",  
//     className: "md:col-span-3 md:row-span-2 lg:min-h-[45vh]",
//     imgClassName: "w-full h-full",
//     titleClassName: "justify-end",
//     img:"",
//     spareImg: "",
//     body:"dkdkdkdk"
//   },
//   {
//     id: 2,
//     title: "UI/UX Implementation",
//     description: "Responsive designs with modern frameworks and accessibility standards.",
//     className: "md:col-span-3 md:row-span-2 lg:min-h-[35vh]",
//     imgClassName: "",
//     titleClassName: "justify-start",
//     img: "",
//     spareImg: "",
//     body:""
//   },
//   {
//     id: 3,
//     title: "Core Technologies & Frameworks",
//     description: "Full-stack development with modern frameworks and best practices",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-2 mt-0 md:-mt-8 lg:-mt-12",
//     imgClassName: "",
//     titleClassName: "justify-center",
//     img: "",
//     spareImg: "",
//     body:""
//   },
//   {
//     id: 4,
//     title:"Backend-Driven Solutions",
//     description: "Creating full-stack excellence with Azure cloud architecture",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-1",
//     imgClassName: "",
//     titleClassName: "justify-start",
//     img: "/grid.svg",
//     spareImg: "/b4.svg",
//   },

//   {
//     id: 5,
//     title: "Fitness Tracker with AI Analytics",
//     description: "Track workouts and get personalized AI-driven insights.",
//     className: "md:col-span-3 md:row-span-2",
//     imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
//     titleClassName: "justify-center md:justify-start lg:justify-center",
//     img: "/b5.svg",
//     spareImg: "/grid.svg",
//     body:""
//   },
//   {
//     id: 6,
//     title: "Reach out via email or access my resume below!",
//     description: "Want to connect or explore my work?",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-1",
//     imgClassName: "",
//     titleClassName: "justify-center md:max-w-full max-w-60 text-center",
//     img: "",
//     spareImg: "",
//     body:""
//   },
// ];

export const projects = [
  {
    id: 1,
    title: "Expense Tracker",
    des: "Track your spending effortlessly with our expense tracker. Simply enter the amount, add a brief description, and categorize your expense.",
    img: "/expenseTracker.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/Raquelbateman/SpruellAMC10ExpenseForm",
    linkText: "View Project on GitHub"
  },
  {
    id: 2,
    title: "SIETE Student Database",
    des: "A student management system designed to track student information efficiently.",
    img: "/sieteShot.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/n-see/NewSeiteClient",
   
  },
  {
    id: 3,
    title: "React Game Application",
    des: "A searchable video game library that allows users to filter games by category, genre, and platform.",
    img: "/gameAppShot.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/Raquelbateman/newreactgameapp.git",
  
  },
  {
    id: 4,
    title: "Project Redesign",
    des: "A modern interface overhaul focusing on improved user experience, responsive design, and enhanced visual aesthetics.",
    img: "/businessRedo.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/Dinomyt/Business-Redevelopment",
 
  },
];

export const testimonials = [
  {
    quote:
      "Working with {your name here} was transformative for our business. His creativity and technical expertise allowed us to launch a stunning platform on time and beyond expectations.",
    name: "Emily Carter",
    title: "CEO of Some company",
  },
  {
    quote:
      "{your name here} ability to translate complex requirements into user-friendly designs is unmatched. We achieved a 200% increase in user engagement after our project launch.",
    name: "John Thompson",
    title: "CTO of Some company"
  },
  {
    quote:
      "{your name here} brought fresh ideas and precise execution to our platform redesign. He was professional, proactive, and always delivered high-quality work on time.",
    name: "Sarah Lee",
    title: "Product Manager at Some company",
  },
  {
    quote:
      "{your name here} attention to detail and passion for excellence stood out during our collaboration. Our website now reflects our brand perfectly, thanks to his contributions.",
    name: "Marcus Allen",
    title: "Founder of Some company",
  },
  {
    quote:
      "{your name here} is a rare talent. His understanding of both design and development helped us create a seamless, visually appealing, and performant application.",
    name: "Rachel Green",
    title: "Director of Some company",
  },
];


export const companies = [
  {
    id: 1,
    name: "Some company",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Some company",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Some company",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Some company",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Some company",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];