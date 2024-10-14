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

function Projects() {
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
  ];

  const projects = [
    {
      id: 1,
      name: "Gipfel Tutor",
      description:
        "A Fullstack online Marketplace to connect students with tutors and collect payments.",
      longDescription: `
  This is my latest project, Gipfel Tutor. It is a Learning Platform that connects students with tutors.

  Top Technical Features:
  - **Credit Card Payments using Stripe**: Securely pay for lessons online - Google Pay included. Powered by Stripe API and Stripe Webhooks.
  - **Calendly Integration**: Schedule and cancel lessons seamlessly from the site. Powered by the Calendly API v2.
  - **Socialaccount Login**: Sign in with Google for a passwordless and modern experience.

  Key User Stories:
  - **Students**: View a list of tutors, filter and sort based on preferences, and book lessons.
  - **Users**: Create accounts, log in/out, reset passwords, and receive confirmation emails.
  - **Students and Tutors**: Manage booking history, upcoming lessons, payment details, and profiles.
  - **Admin**: Manage tutors and user accounts, ensuring platform security.
  - **Site Owner**: Employ SEO techniques, maintain a Facebook Business Page, and provide a Newsletter.`,
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
  The tonne (German for: Waste Bin) project was created to help users manage their waste collection schedules and interact with their local community to improve waste management practices.

  Users can:
  - **Log in and out** using Django Allauth.
  - **Subscribe to waste collection schedules** based on their postcode.
  - **Contribute to the community** by creating and sharing their own highly costumizable schedules.
  - **Receive real-time reminders** by downloading the schedule to their calendar.
  - **Upload, rate, and comment** on waste collection schedules.
  - **View a personalized dashboard** with relevant information.
        `,
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
          tech.name === "Cloudinary"
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
  Käsekästchen is a practice Project I made to expand my knowledge of JavaScript and object-oriented programming.

  The game is played on a grid of dots, where two players take turns drawing lines between the dots. The goal is to complete a square by drawing the fourth line around it. The player who completes the most squares wins the game.

  Key Features:
  - **Multi-Device Support**: Play the game on different devices, enjyoing a fully responsive experience.
  - **Customizable Grid Size**: Select the size of the game grid to customize the game to your liking.
  - **Opponent AI including Difficulty Levels**: A hand crafted AI that plays against you. Select the difficulty level to adjust the game to your skill level.`,
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
      <h2 className="text-4xl">My Portfolio Projects</h2>
      {projects.map((project) => (
          <Project project={project}></Project>
      ))}
      <p>
        Check out more of my projects on my{" "}
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
