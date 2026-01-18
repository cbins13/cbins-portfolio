import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import HoverCard from "../animations/HoverCard";
import FadeInText from "../animations/FadeInText";

import kuboPomodoroImage from "../../assets/images/kubo-pomodoro/kubo-pomodoro.png";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Internal Tools Dashboard",
      description: "A multipurpose dashboard for the university's various departments applications. Modules include: User Management, Guidance Office Referrals, Medical Clinic Queue Management, Student Statistics Visualization and Reporting, and more.",
      technologies: ["React", "Node.js", "OracleSQL", "Windows Server", "NGINX", "MaterialUI", "Express"],
      gifUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTI4ZmZ0NjN5c3dyb2g0aDBiZmNkaDh2anYwN2s2Z20xZHl1Nm1mayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eKABaS4ABd6SkCIDDS/giphy.gif",
      link: "https://dashboard.slu.edu.ph",
    },
    {
      title: "Kubo Pomodoro Timetracker",
      description: "A pomodoro timer application built with ReactJS and Google Firebase. Features include: Pomodoro timer, Break timer, Customizable timer settings, and more.",
      technologies: ["React", "Google Firebase", "MaterialUI"],
      gifUrl: kuboPomodoroImage,
      link: "https://kubo-pomodoro.web.app/",
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <FadeInText>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Featured Projects
            </h2>
          </FadeInText>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <HoverCard scale={1.02} className="h-full">
                    <div className="p-8 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all h-full flex flex-col">
                      <h3 className="text-2xl font-bold mb-6">{project.title}</h3>
                      
                      <div className="mb-6">
                        {project.gifUrl ? (
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10">
                            <img
                              src={project.gifUrl}
                              alt={`${project.title} demo`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
                            <div className="text-center">
                              <svg
                                className="w-16 h-16 mx-auto mb-3 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <p className="text-gray-400 text-sm">GIF Demo Placeholder</p>
                              <p className="text-gray-500 text-xs mt-1">Add gifUrl to project data</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-400 mb-6 text-base">{project.description}</p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-base hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.link && typeof project.link === 'string' && project.link.trim() !== "" && (
                        <div className="flex justify-start items-center">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-base font-medium"
                          >
                            <span>View Project</span>
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                </HoverCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
