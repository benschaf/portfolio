import React from "react";
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
  ];

  const projects = [
    {
      id: 1,
      name: "Gipfel Tutor",
      description: "A platform to connect students with tutors",
      longDescription: `Welcome to Gipfel Tutor, the pinnacle of personalized tutoring! Our Django-powered marketplace pairs you with the perfect tutor to conquer your academic peaks. Quick, simple, and effective — scale new heights in learning with us!

          Our Mission: "Connect learners with a highly suitable tutor for their specific needs and preferences, within 48 hours."

          Top Technical Features:
          - **Credit Card Payments using Stripe**: Securely pay for lessons online - Google Pay included. Powered by Stripe API and Stripe Webhooks.
          - **Calendly Integration**: Schedule and cancel lessons seamlessly from the site. Powered by the Calendly API v2.
          - **Socialaccount Login**: Sign in with Google for a passwordless and modern experience.

          Key User Stories:
          - **First Time Visitors**: Understand the purpose of the site and decide to sign up.
          - **Students**: View a list of tutors, filter and sort based on preferences, and book lessons.
          - **Users**: Create accounts, log in/out, reset passwords, and receive confirmation emails.
          - **Students and Tutors**: Manage booking history, upcoming lessons, payment details, and profiles.
          - **Admin**: Manage tutors and user accounts, ensuring platform security.
          - **Site Owner**: Employ SEO techniques, maintain a Facebook Business Page, and provide a Newsletter.

          Gipfel Tutor is designed to make finding and booking the right tutor as easy and efficient as possible, ensuring a seamless experience for both students and tutors.`,
      websiteUrl: "https://gipfel-tutor-768a610dc54f.herokuapp.com/",
      techStack: techStack.filter(
        (tech) =>
          tech.name === "Django" ||
          tech.name === "Bootstrap" ||
          tech.name === "Python" ||
          tech.name === "Stripe" ||
          tech.name === "Heroku" ||
          tech.name === "jQuery" ||
          tech.name === "Calendly Api2" ||
          tech.name === "Git" ||
          tech.name === "HTML5" ||
          tech.name === "CSS3" ||
          tech.name === "JavaScript"
      ),
    },
  ];

  return (
    <section>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>{project.longDescription}</p>
          <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
          <ul>
            {project.techStack.map((tech) => (
              <li key={tech.id}>
                <tech.icon /> {tech.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Projects;
