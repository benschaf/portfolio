import React from "react";
import Project from "./Project";
import gipfelTutorMockup from "../assets/gipfel-mockup.webp";
import tonneMockup from "../assets/tonne-mockup.webp";
import kaesekaestchenMockup from "../assets/kaesekaestchen-mockup.webp";
import {
  SiDjango,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiGit,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiPython,
  SiStripe,
  SiCalendly,
  SiAmazonwebservices,
  SiGooglecloud,
  SiJest,
  SiPostgresql,
  SiCloudinary,
  SiGithub,
  SiFigma,
  SiShieldsdotio,
} from "@icons-pack/react-simple-icons";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const techStack = [
    {
      id: 1,
      name: "HTML5",
      icon: SiHtml5,
    },
    {
      id: 2,
      name: "CSS3",
      icon: SiCss3,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      id: 4,
      name: "Python",
      icon: SiPython,
    },
    {
      id: 5,
      name: "Django",
      icon: SiDjango,
    },
    {
      id: 6,
      name: "React",
      icon: SiReact,
    },
    {
      id: 7,
      name: "Tailwind",
      icon: SiTailwindcss,
    },
    {
      id: 8,
      name: "Bootstrap",
      icon: SiBootstrap,
    },
    {
      id: 9,
      name: "jQuery",
      icon: SiJquery,
    },
    {
      id: 10,
      name: "Git",
      icon: SiGit,
    },
    {
      id: 11,
      name: "Heroku",
      icon: SiHeroku,
    },
    {
      id: 12,
      name: "Stripe",
      icon: SiStripe,
    },
    {
      id: 13,
      name: "Calendly Api2",
      icon: SiCalendly,
    },
    {
      id: 14,
      name: "Google Cloud",
      icon: SiGooglecloud,
    },
    {
      id: 15,
      name: "Amazon Web Services",
      icon: SiAmazonwebservices,
    },
    {
      id: 16,
      name: "Jest",
      icon: SiJest,
    },
    {
      id: 17,
      name: "Django Allauth",
      icon: SiDjango,
    },
    {
      id: 18,
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      id: 19,
      name: "Cloudinary",
      icon: SiCloudinary,
    },
    {
      id: 22,
      name: "GitHub Pages",
      icon: SiGithub,
    },
    {
      id: 23,
      name: "GitHub Projects",
      icon: SiGithub,
    },
    {
      id: 24,
      name: "Figma",
      icon: SiFigma,
    },
    {
      id: 25,
      name: "shields.io",
      icon: SiShieldsdotio,
    },
    {
      id: 26,
      name: "Full Calendar",
      icon: null,
    }
  ];

  const projects = [
    {
      id: 1,
      name: "Gipfel Tutor",
      description:
        "A Fullstack online Marketplace to connect students with tutors and collect payments.",
      longDescription: `
  Gipfel Tutor is a Learning Platform connecting students with tutors. It features secure online payments via Stripe, seamless lesson scheduling with Calendly, and Google sign-in for a modern experience.

  Students can browse and book tutors, manage their lessons and payments, while tutors and admins handle bookings and user accounts. The platform also has a Facebook Business Page, and a Newsletter for marketing purposes.

  There is a big focus on SEO optimizazione, with a sitemap, robots.txt, semantic HTML, and structured data for Google Search.`,
      websiteUrl: "https://gipfel-tutor-768a610dc54f.herokuapp.com/",
      githubUrl: "https://github.com/benschaf/gipfel-tutor",
      techStack: techStack.filter(
        (tech) =>
          tech.name === "Django" ||
          tech.name === "Bootstrap" ||
          tech.name === "Stripe" ||
          tech.name === "Heroku" ||
          tech.name === "jQuery" ||
          tech.name === "Calendly Api2" ||
          tech.name === "Git" ||
          tech.name === "Google Cloud" ||
          tech.name === "Amazon Web Services"
      ),
      image: gipfelTutorMockup,
      backgroundColor: "#FAD9B4",
      topFeatures: [
        {
          id: 1,
          title: "Credit Card Payments",
          description:
            "Powered by Stripe API and Stripe Webhooks, including Google Pay.",
        },
        {
          id: 2,
          title: "Calendly Integration",
          description: "Using Calendly API v2 to schedule and cancel lessons.",
        },
        {
          id: 3,
          title: "Google Sign-In",
          description:
            "Sign in with Google for a passwordless and modern experience.",
        },
      ],
    },
    {
      id: 2,
      name: "Tonne: Waste Reminders",
      description:
        "An online community to share and collect waste management schedules.",
      longDescription: `
The tonne project helps users manage waste collection schedules and engage with their community. Users can log in with Django Allauth and search for schedules by postcode. They can create and share customizable schedules, receive real-time reminders, and interact with schedules through uploads, ratings, and comments.

A personalized dashboard provides relevant information, making it easy to stay on top of waste collection. The platform fosters community engagement by allowing users to share schedules and feedback, ensuring a collaborative approach to waste management.`,
      websiteUrl: "https://tonne-waste-reminders-a6836f2888b0.herokuapp.com/",
      githubUrl: "https://benschaf/waste-schedule",
      techStack: techStack.filter(
        (tech) =>
          tech.name === "Django" ||
          tech.name === "Git" ||
          tech.name === "Heroku" ||
          tech.name === "jQuery" ||
          tech.name === "Google Cloud" ||
          tech.name === "Bootstrap" ||
          tech.name === "Jest" ||
          tech.name === "Django Allauth" ||
          tech.name === "PostgreSQL" ||
          tech.name === "Cloudinary" ||
          tech.name === "Full Calendar"
      ),
      image: tonneMockup,
      backgroundColor: "#D9F1F2",
      topFeatures: [
        {
          id: 1,
          title: "Waste Collection Reminders",
          description:
            "Receive real-time reminders for waste collection days based on your postcode right in your Calendar.",
        },
        {
          id: 2,
          title: "Community Interaction",
          description:
            "Upload, rate, and comment on waste collection schedules to help improve accuracy and reliability.",
        },
        {
          id: 3,
          title: "Dashboard",
          description:
            "View a personalized dashboard that provides relevant information on your subscribed schedules.",
        },
      ],
    },
    {
      id: 2,
      name: "Käsekästchen",
      description:
        "Käsekästchen (German for: dots and boxes) is a web app that allows users to play the game of Käsekästchen online.",
      longDescription: `
Käsekästchen is a JavaScript and object-oriented programming practice project. The game involves two players drawing lines on a grid of dots, aiming to complete squares. The player with the most completed squares wins.

Key features include multi-device support for a responsive experience, customizable grid sizes, and an AI opponent with adjustable difficulty levels. This project enhances gameplay flexibility and challenges players of varying skill levels.`,
      websiteUrl: "https://benschaf.github.io/kaesekaestchen/",
      githubUrl: "https://github.com/benschaf/kaesekaestchen",
      techStack: techStack.filter(
        (tech) =>
          tech.name === "JavaScript" ||
          tech.name === "HTML" ||
          tech.name === "CSS" ||
          tech.name === "CSS Flexbox" ||
          tech.name === "CSS Grid" ||
          tech.name === "Git" ||
          tech.name === "GitHub Pages" ||
          tech.name === "GitHub Projects" ||
          tech.name === "Figma" ||
          tech.name === "shields.io"
      ),
      image: kaesekaestchenMockup,
      backgroundColor: "#CFFFFA",
      topFeatures: [
        {
          id: 2,
          title: "Multi-Device Support",
          description:
            "Play the game on different devices, enjoying a fully responsive experience.",
        },
        {
          id: 3,
          title: "Customizable Grid Size",
          description:
            "Select the size of the grid to customize the game to your liking.",
        },
        {
          id: 7,
          title: "AI Difficulty Levels",
          description:
            "Select the AI difficulty level to adjust the game to your skill level.",
        },
      ],
    },
  ];

  return (
    <section className="pt-20" id="projects">
      <h2 className="text-4xl">{t("My Portfolio Projects")}</h2>
      {projects.map((project) => (
        <Project project={project}></Project>
      ))}
      <p>
        {t("Check out more of my projects on my")}{" "}
        <a
          href="http://github.com/benschaf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 hover:text-orange-600 underline transition duration-300 ease-in-out"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
}

export default Projects;
