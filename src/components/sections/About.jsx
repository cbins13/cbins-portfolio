import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import ImageCarousel from "../ImageCarousel";
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

// Import capstone project images
import capstoneImage1 from "../../assets/images/capstone/1.png";
import capstoneImage2 from "../../assets/images/capstone/2.png";
import capstoneImage3 from "../../assets/images/capstone/3.png";
import capstoneImage4 from "../../assets/images/capstone/4.png";
import capstoneImage5 from "../../assets/images/capstone/5.png";
import capstoneImage6 from "../../assets/images/capstone/6.png";
import capstoneImage7 from "../../assets/images/capstone/7.png";
import capstoneImage8 from "../../assets/images/capstone/8.png";
import capstoneImage9 from "../../assets/images/capstone/9.png";
import capstoneImage10 from "../../assets/images/capstone/10.png";
import capstoneImage11 from "../../assets/images/capstone/11.png";
import capstoneImage12 from "../../assets/images/capstone/12.png";

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
      title: "Data Support Analyst",
      company: "Giant International Software Station Inc.",
      date: "September 2023 - January 2024",
      description: "Resolved tasks for the client Encompass Tech, a cloud-native ERP, RAS, CRM, and eCommerce software centered around Beverage Distribution for US businesses.",
      otherNotableTasks: ["Performed routine data integration and verification of customer records imported through native API's and Oracle Fusion Report", "Cross-referenced customer records found on the company system with business listings found in Google", "Coordinated, documented, and escalated erroneous records/anomalies imported by the native API to the local and international lead analysts", "Maintained highest employee KPI among project members from the time of employment"]
    },
    {
      title: "L2 Web Applications Support",
      company: "Cantier Systems Inc.",
      date: "May 2023 - September 2023",
      description: "Delivered consistent results by resolving an average of 50 tickets per month for global users from regions such as China, Taiwan, USA , Japan, Clark Philippines, and Baguio.",
      otherNotableTasks: [
        "Debugging of Java Spring application errors and logs integrated to production machines for Texas Instruments",
        "Documented resolution details of tickets using Microsoft Excel, Confluence/JIRA, and Cherwell",
        "Provided reliable text-based customer support via Microsoft Outlook and Cisco Webex, prioritizing timely communication and issue resolution"
      ]
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

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      university: "Saint Louis University",
      date: "2018 - 2022",
      achievements: ["Loyalty Awardee", "Cum Laude"],
      capstoneProject: "EmpiTech ConTACTS - Contact Tracing Management Information System (CTMIS)",
      images: [
        { src: capstoneImage1, alt: "EmpiTech ConTACTS - Screenshot 1" },
        { src: capstoneImage2, alt: "EmpiTech ConTACTS - Screenshot 2" },
        { src: capstoneImage3, alt: "EmpiTech ConTACTS - Screenshot 3" },
        { src: capstoneImage4, alt: "EmpiTech ConTACTS - Screenshot 4" },
        { src: capstoneImage5, alt: "EmpiTech ConTACTS - Screenshot 5" },
        { src: capstoneImage6, alt: "EmpiTech ConTACTS - Screenshot 6" },
        { src: capstoneImage7, alt: "EmpiTech ConTACTS - Screenshot 7" },
        { src: capstoneImage8, alt: "EmpiTech ConTACTS - Screenshot 8" },
        { src: capstoneImage9, alt: "EmpiTech ConTACTS - Screenshot 9" },
        { src: capstoneImage10, alt: "EmpiTech ConTACTS - Screenshot 10" },
        { src: capstoneImage11, alt: "EmpiTech ConTACTS - Screenshot 11" },
        { src: capstoneImage12, alt: "EmpiTech ConTACTS - Screenshot 12" },
      ],
      tools: ["000WebHost", "Namecheap", "Selenium", "k6", "TestProject", "phpMyAdmin", "wampServer64", "Jupyter Python", "Google Maps API", "Movider"], // Add tools used in capstone project
      programmingLanguages: ["PHP", "JavaScript", "HTML", "CSS", "Python"], // Add programming languages used in capstone project
      databases: ["MySQL"], // Add databases used in capstone project
      description: "A web-based contact tracing management information system embedded with an IoT device for contact tracing and monitoring of establishment visitors location history and contact details. Features include web-based monitoring, QR code scanning, data visualization and reports generation, map travel history tracking, SMS blast messaging."
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-start">
            <div className="rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
              <h3 className="text-xl font-bold mb-6 p-6 pb-4">🎓Education</h3>
              <div className="px-6 pb-6">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-400 text-sm mb-1">
                      {edu.university}
                    </p>
                    <p className="text-gray-500 text-xs mb-3">
                      {edu.date}
                    </p>
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="pt-3">
                        <h5 className="text-sm font-semibold text-gray-300 mb-2">
                          Achievements
                        </h5>
                        <ul className="list-disc list-inside text-gray-400 text-sm">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {edu.capstoneProject && (
                      <div className="pt-3">
                        <h5 className="text-sm font-semibold text-gray-300 mb-2">
                          Capstone Project
                        </h5>
                        <p className="text-gray-400 text-sm mb-3">
                          {edu.capstoneProject}
                        </p>
                        <div className="mb-3">
                          <ImageCarousel
                            images={edu.images || []}
                            autoPlayInterval={4000}
                          />
                        </div>
                        {edu.programmingLanguages && edu.programmingLanguages.length > 0 && (
                          <div className="mb-3">
                            <h6 className="text-xs font-semibold text-gray-300 mb-2">
                              Programming Languages
                            </h6>
                            <div className="flex flex-wrap gap-2">
                              {edu.programmingLanguages.map((lang, langIndex) => (
                                <span
                                  key={langIndex}
                                  className="bg-cyan-500/10 text-cyan-400 py-1.5 px-3 rounded-full text-xs hover:bg-cyan-500/20 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)] transition"
                                >
                                  {lang}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {edu.tools && edu.tools.length > 0 && (
                          <div className="mb-3">
                            <h6 className="text-xs font-semibold text-gray-300 mb-2">
                              Tools
                            </h6>
                            <div className="flex flex-wrap gap-2">
                              {edu.tools.map((tool, toolIndex) => (
                                <span
                                  key={toolIndex}
                                  className="bg-cyan-500/10 text-cyan-400 py-1.5 px-3 rounded-full text-xs hover:bg-cyan-500/20 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)] transition"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {edu.databases && edu.databases.length > 0 && (
                          <div className="mb-3">
                            <h6 className="text-xs font-semibold text-gray-300 mb-2">
                              Databases
                            </h6>
                            <div className="flex flex-wrap gap-2">
                              {edu.databases.map((db, dbIndex) => (
                                <span
                                  key={dbIndex}
                                  className="bg-cyan-500/10 text-cyan-400 py-1.5 px-3 rounded-full text-xs hover:bg-cyan-500/20 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)] transition"
                                >
                                  {db}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {edu.description && (
                      <div className="pt-3">
                        <p className="text-gray-300 text-sm text-justify">
                          {edu.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10">
              <h3 className="text-xl font-bold mb-6 p-6 pb-4">💼Work Experience</h3>
              <div className="px-6 pb-6 space-y-6">
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
