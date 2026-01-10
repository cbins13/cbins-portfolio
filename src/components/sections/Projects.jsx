import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Internal Tools Dashboard",
      description: "A multipurpose dashboard for the university's various departments applications.",
      technologies: ["React", "Node.js", "OracleSQL", "Windows Server", "NGINX", "MaterialUI", "Express"],
      gifUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTI4ZmZ0NjN5c3dyb2g0aDBiZmNkaDh2anYwN2s2Z20xZHl1Nm1mayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eKABaS4ABd6SkCIDDS/giphy.gif",
      link: "https://dashboard.slu.edu.ph",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                
                <div className="mb-4">
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

                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
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
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                    >
                      <span>View Project</span>
                      <svg
                        className="w-4 h-4"
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
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
