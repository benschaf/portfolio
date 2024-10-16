import React from "react";

function About() {
  return (
    <section className="pt-20 max-w-prose mx-auto" id="about">
      <h2 className="text-3xl mb-4 font-bold">About Me</h2>
      <p className="mb-4">
        I am a <strong>full-stack developer</strong> with a Diploma in Full Stack Software Development from Code Institute (Course Duration: 1 year, Grade: Distinction).
      </p>
      <div className="flex flex-col md:flex-row gap-9">
        <div className="w-full md:w-1/2">
          <p className="mb-4 font-semibold">Frameworks and libraries I have experience with include:</p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Django</strong></li>
            <li><strong>React</strong></li>
            <li><strong>Tailwind</strong></li>
            <li><strong>Bootstrap</strong></li>
            <li><strong>jQuery</strong></li>
            <li><strong>Git</strong></li>
            <li><strong>Heroku</strong></li>
            <li><strong>Stripe</strong></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <p className="mb-4 font-semibold">I am proficient in:</p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>HTML5</strong></li>
            <li><strong>JavaScript</strong></li>
            <li><strong>CSS3</strong></li>
            <li><strong>Python</strong></li>
          </ul>
        </div>
      </div>
      <p className="mb-4">
        After finishing my Masters in Education, I worked full time as a teacher for 1 year. Due to this experience, I have developed strong <strong>communication</strong>, <strong>collaboration</strong>, and <strong>project management</strong> skills.
      </p>
      <p className="mb-4">
        I am passionate about creating <strong>user-friendly</strong>, <strong>accessible</strong>, and <strong>responsive web applications</strong> that solve real-world problems.
      </p>
      <p>
        I am eager to join a team where I can continue to grow my technical skills and contribute to impactful projects.
      </p>
    </section>
  );
}

export default About;