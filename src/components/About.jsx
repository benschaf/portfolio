import React from "react";
import { Trans, useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="pt-20 max-w-prose mx-auto" id="about">
      <h2 className="text-3xl mb-4 font-bold">{t("about.title")}</h2>
      <p className="mb-4">
        <Trans i18nKey="about.intro">
          I am a <strong>full-stack developer</strong> with a Diploma in Full Stack Software Development from Code Institute (Course Duration: 1 year, Grade: Distinction). I'm open to on-site and remote work.
        </Trans>
      </p>
      <div className="flex flex-col md:flex-row gap-9">
        <div className="w-full md:w-1/2">
          <p className="mb-4 font-semibold">{t("about.frameworksTitle")}</p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>{t("about.frameworks.django")}</strong></li>
            <li><strong>{t("about.frameworks.react")}</strong></li>
            <li><strong>{t("about.frameworks.tailwind")}</strong></li>
            <li><strong>{t("about.frameworks.bootstrap")}</strong></li>
            <li><strong>{t("about.frameworks.jquery")}</strong></li>
            <li><strong>{t("about.frameworks.git")}</strong></li>
            <li><strong>{t("about.frameworks.heroku")}</strong></li>
            <li><strong>{t("about.frameworks.stripe")}</strong></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <p className="mb-4 font-semibold">{t("about.proficientTitle")}</p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>{t("about.proficient.html5")}</strong></li>
            <li><strong>{t("about.proficient.javascript")}</strong></li>
            <li><strong>{t("about.proficient.css3")}</strong></li>
            <li><strong>{t("about.proficient.python")}</strong></li>
          </ul>
        </div>
      </div>
      <p className="mb-4">
        <Trans i18nKey="about.experience">
          After finishing my Masters in Education, I worked full time as a teacher for 1 year. Due to this experience, I have developed strong <strong>communication</strong>, <strong>collaboration</strong>, and <strong>project management</strong> skills.
        </Trans>
      </p>
      <p className="mb-4">
        <Trans i18nKey="about.passion">
          I am passionate about creating <strong>user-friendly</strong>, <strong>accessible</strong>, and <strong>responsive web applications</strong> that solve real-world problems.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="about.eager">
          I am eager to join a team where I can continue to grow my technical skills and contribute to impactful projects.
        </Trans>
      </p>
    </section>
  );
}

export default About;