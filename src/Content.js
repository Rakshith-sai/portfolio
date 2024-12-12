// import images
import Hero_person from "./assets/images/Hero/person.png";

import frnt from "./assets/images/Skills/frnt.png";
import java from "./assets/images/Skills/java.png";
import genai from "./assets/images/Skills/genai.png";
import reactjs from "./assets/images/Skills/react.png";
import ml from "./assets/images/Skills/ml.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import project4 from "./assets/images/projects/img4.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/wipro.png";
import avatar2 from "./assets/images/Testimonials/kaggle.png";
import avatar3 from "./assets/images/Testimonials/l4g.png";
import avatar4 from "./assets/images/Testimonials/simplilearn.png";
import avatar5 from "./assets/images/Testimonials/scalar.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail, GrResume} from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web & ML Developer",
    firstName: "Pulasa",
    LastName: "Sai Rakshith",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1",
        text: "Years of Experinse in Web & ML development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Front End",
        para: "Designing intuitive user interfaces",
        logo: frnt,
      },
      {
        name: "Machine Learning",
        para: "Empowering decisions through data",
        logo: ml,
      },
      {
        name: "Generative AI",
        para: "Creating possibilities through innovation",
        logo: genai,
      },
      {
        name: "React js",
        para: "Building dynamic user interfaces",
        logo: reactjs,
      },
      {
        name: "Java",
        para: "Building robust solutions efficiently",
        logo: java,
      },
      {
        name: "Python",
        para: "Code with simplicity and power",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Projects include a Zomato clone where I built order and payment pages using HTML, CSS, and JavaScript, focusing on functionality and aesthetics. I also developed a QR Code Generator leveraging APIs to create custom QR codes and a Weather App that dynamically displays real-time weather data based on user input.",
        logo: services_logo1,
      },
      {
        title: "ML Development",
        para: "My projects include developing a Sentiment Analysis System using the Naïve Bayes classifier, and designing a Music Recommender System utilizing K-Means clustering. Furthermore, I implemented a Cloudburst Prediction System using CatBoost, achieving an impressive 86.18% accuracy in forecasting cloudburst.",
        logo: services_logo2,
      },
      {
        title: "Java Developer",
        para: "I have extensive experience in Java, demonstrated through taking classes for my classmates and juniors, where I explained key concepts and problem-solving techniques. I have solved over 200 problems on LeetCode, enhancing my proficiency in algorithmic thinking and coding with Java. Additionally, I am Java Full Stack Certified by Wipro TalentNext.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Cloud Burst Prediction",
        image: project1,
      },
      {
        title: "Weather and QR",
        image: project2,
      },
      {
        title: "Music Recomendation",
        image: project3,
      },
      {
        title: "Internal Calculator",
        image: project4,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY Certifications",
    testimonials_content: [
      {
        review:
          "“Certified in Java Full Stack by Wipro TalentNext, gaining expertise in both front-end and back-end technologies for building robust web applications.”",
        img: avatar1,
        name: "Wipro TalentNext",
      },
      {
        review:
          "“Certified in Python from Kaggle, demonstrating proficiency in data analysis, machine learning, and real-world problem-solving using Python.”",
        img: avatar2,
        name: "KAGGLE",
      },
      {
        review:
          "“Certified in 'Generative AI for Beginners' and 'Generative AI for Developers' from Google Cloud L4G, mastering AI model development and implementation techniques.”",
        img: avatar3,
        name: "L4G GOOGLE CLOUD",
      },
      {
        review:
          "“Certified in 'Introduction to ML,' 'Databases,' and 'ReactJS' from Simplilearn, gaining foundational knowledge in machine learning, database management, and front-end development.”",
        img: avatar4,
        name: "SIMPLILEARN",
      },
      {
        review:
          "“Certified in 'Java Basics' and 'OOPS using Java' from Scalar Topics, building a strong foundation in object-oriented programming and core Java concepts.”",
        img: avatar5,
        name: "SCALAR TOPICS",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "A strong foundation in programming and machine learning, proven through hands-on projects like sentiment analysis and a cloudburst prediction system. My ability to adapt and innovate is evident from internships where I developed solutions like a music recommender system and streamlined internal processes with a custom calculator.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "rakshithsai44155@gmail.com",
        icon: GrMail,
        link: "mailto:rakshithsai44155@gmail.com",
      },
      {
        text: "+91 7013844155",
        icon: MdCall,
        link: "https://wa.me/7013844155",
      },
      {
        text: "Rakshith_Sai",
        icon: BsInstagram,
        link: "https://www.instagram.com/rakshith_sai/",
      },
      {
        text: "Resume",
        icon: GrResume,
        link: "https://drive.google.com/file/d/1aihcLcppnMaTZx63t5PYBERmsBL5Dezx/view?usp=drive_link",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
