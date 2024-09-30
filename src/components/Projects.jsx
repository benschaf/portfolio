import React from "react";
import ReactMarkdown from "react-markdown";
import Project from "./Project";
import gipfelTutorMockup from "../assets/project-gipfel-tutor-mockup.png";
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
  ];

  const projects = [
    {
      id: 1,
      name: "Gipfel Tutor",
      description: "An online Marketplace to connect students with tutors and collect payments.",
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
      topFeatures: [
        {
          id: 1,
          name: "**Credit Card Payments** powered by Stripe",
        },
        {
          id: 2,
          name: "**Calendly Integration** using Calendly API v2",
        },
        {
          id: 3,
          name: "**Google Sign-In** for a passwordless experience",
        },
      ],
    },
  ];

  return (
    <section>
      {projects.map((project) => (
        <Project project={project}></Project>
      ))}
    </section>
  );
}

export default Projects;
