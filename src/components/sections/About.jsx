import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiOracle,
  SiMysql,
  SiNginx,
  SiOpenai,
  SiGithub,
  SiMongodb,
} from "react-icons/si";

import { FaDocker, FaCode } from "react-icons/fa";

const About = () => {
  // Technology icon mapping
  const techIcons = {
    React: SiReact,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    TailwindCSS: SiTailwindcss,
    MaterialUI: SiMui,
    NodeJS: SiNodedotjs,
    MongoDB: SiMongodb,
    Oracle: SiOracle,
    MySQL: SiMysql,
    Docker: FaDocker,
    NGINX: SiNginx,
    Cursor: FaCode,
    ChatGPT: SiOpenai,
    Copilot: SiGithub,
  };

  // Technology color mapping for better visual distinction
  const techColors = {
    React: "text-cyan-400",
    JavaScript: "text-yellow-400",
    TypeScript: "text-blue-400",
    TailwindCSS: "text-cyan-300",
    MaterialUI: "text-blue-500",
    NodeJS: "text-green-500",
    MongoDB: "text-green-500",
    Oracle: "text-red-500",
    MySQL: "text-blue-600",
    Docker: "text-blue-400",
    NGINX: "text-green-600",
    Cursor: "text-purple-400",
    ChatGPT: "text-green-400",
    Copilot: "text-gray-300",
  };

  const frontendSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "MaterialUI",
  ];

  const backendSkills = ["NodeJS", "Oracle", "MySQL", "MongoDB"];

  const cloudSkills = ["Docker", "NGINX"];

  const aiCoders = ["Cursor", "ChatGPT", "Copilot"];

  const workExperience = [
    {
      title: "Junior Programmer",
      company: "Saint Louis University",
      date: "January 2024 - Present",
      description: "Developed internal tools for the university's various departments using ReactJS, NodeJS, OracleSQL, Windows Server, and NGINX.",
      otherNotableTasks: ["Technical Documentation for the applications developed", "Managed student interns and their projects", "System Administration of intern projects"]
    },
    {
      title: "Junior Front-end Developer",
      company: "Code & Theory Manila (GoBeyond Studios)",
      date: "July 2022 - January 2023",
      description: "Trained in Agile Software Development methodologies and tools such as Jira, Confluence, and Git. Trained in HTML, CSS, JavaScript, and ReactJS.",
    },
    {
      title: "Intern",
      company: "Code & Theory Manila (GoBeyond Studios)",
      date: "January 2022 - May 2022",
      description: "Created a personal time tracking tool utilizing the Pomodoro Technique using ReactJS and Google Firebase",
    },
  ];

  const certifications = [
    {
      name: "IBM Full-Stack JavaScript Developer",
      issuer: "Coursera",
      date: "January 09, 2026",
      credentialReferenceURL: "https://www.coursera.org/account/accomplishments/professional-cert/ODWY8VNH5IY6",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-cyan-500/10">
            <h3 className="text-xl font-bold mb-4">Technologies</h3>
            <p className="text-gray-300 mb-6">
              Here are the technologies I've used up to date in my projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-blue-500/10 border border-blue-500/20">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech, index) => {
                    const IconComponent = techIcons[tech];
                    const iconColor = techColors[tech] || "text-blue-500";
                    return (
                      <div
                        key={index}
                        className="group relative flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-500 py-2 px-4 rounded-lg text-sm hover:bg-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                      >
                        {IconComponent && (
                          <IconComponent
                            className={`w-5 h-5 ${iconColor} group-hover:scale-110 transition-transform duration-200`}
                          />
                        )}
                        <span className="font-medium">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-violet-500/10 border border-violet-500/20">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech, index) => {
                    const IconComponent = techIcons[tech];
                    const iconColor = techColors[tech] || "text-violet-500";
                    return (
                      <div
                        key={index}
                        className="group relative flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-500 py-2 px-4 rounded-lg text-sm hover:bg-violet-500/20 hover:border-violet-500/40 hover:shadow-[0_2px_8px_rgba(139,92,246,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                      >
                        {IconComponent && (
                          <IconComponent
                            className={`w-5 h-5 ${iconColor} group-hover:scale-110 transition-transform duration-200`}
                          />
                        )}
                        <span className="font-medium">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-emerald-500/10 border border-emerald-500/20">
                <h3 className="text-xl font-bold mb-4">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-3">
                  {cloudSkills.map((tech, index) => {
                    const IconComponent = techIcons[tech];
                    const iconColor = techColors[tech] || "text-emerald-500";
                    return (
                      <div
                        key={index}
                        className="group relative flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 py-2 px-4 rounded-lg text-sm hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_2px_8px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                      >
                        {IconComponent && (
                          <IconComponent
                            className={`w-5 h-5 ${iconColor} group-hover:scale-110 transition-transform duration-200`}
                          />
                        )}
                        <span className="font-medium">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-rose-500/10 border border-rose-500/20">
                <h3 className="text-xl font-bold mb-4">AI Coding Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {aiCoders.map((tech, index) => {
                    const IconComponent = techIcons[tech];
                    const iconColor = techColors[tech] || "text-rose-500";
                    return (
                      <div
                        key={index}
                        className="group relative flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 text-rose-500 py-2 px-4 rounded-lg text-sm hover:bg-rose-500/20 hover:border-rose-500/40 hover:shadow-[0_2px_8px_rgba(244,63,94,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                      >
                        {IconComponent && (
                          <IconComponent
                            className={`w-5 h-5 ${iconColor} group-hover:scale-110 transition-transform duration-200`}
                          />
                        )}
                        <span className="font-medium">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
              <h3 className="text-xl font-bold mb-6">🎓Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    B.S in Information Technology
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Saint Louis University
                  </p>
                  <p className="text-gray-500 text-xs">
                    2018 - 2022
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <h5 className="text-sm font-semibold text-gray-300 mb-2">
                    Achievements
                  </h5>
                  <ul className="list-disc list-inside text-gray-400 text-sm">
                    <li>Loyalty Awardee</li>
                    <li>Cum Laude</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10">
              <h3 className="text-xl font-bold mb-6">💼Work Experience</h3>

              <div className="space-y-6">
                {workExperience.map((job, index) => (
                  <div
                    key={index}
                    className={index > 0 ? "pt-4 border-t border-white/10" : ""}
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {job.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-1">
                      {job.company}
                    </p>
                    <p className="text-gray-500 text-xs mb-3">
                      {job.date}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {job.description}
                    </p>
                    {job.otherNotableTasks && job.otherNotableTasks.length > 0 && (
                      <div className="pt-3">
                        <h5 className="text-xs font-semibold text-gray-300 mb-2">
                          Other Notable Tasks
                        </h5>
                        <ul className="list-disc list-inside text-gray-400 text-xs">
                          {job.otherNotableTasks.map((task, taskIndex) => (
                            <li key={taskIndex}>{task}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-gradient-to-br from-amber-500/10 to-orange-500/10">
              <h3 className="text-xl font-bold mb-6">🏆Certifications</h3>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={index > 0 ? "pt-4 border-t border-white/10" : ""}
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <p className={`text-gray-500 text-xs ${cert.credentialId ? 'mb-1' : 'mb-3'}`}>
                      {cert.date}
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-xs">
                      <li>Credential Reference: <a href={cert.credentialReferenceURL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">{cert.credentialReferenceURL}</a></li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
