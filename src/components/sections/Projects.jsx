import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import RevealOnScroll from "../RevealOnScroll";
import HoverCard from "../animations/HoverCard";
import FadeInText from "../animations/FadeInText";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import homepageImage from "../../assets/images/twosixhundred/Homepage.png";
import aboutUsImage from "../../assets/images/twosixhundred/Our Story.png";
import shopImage from "../../assets/images/twosixhundred/Shop.png";

import kuboPomodoroImage from "../../assets/images/kubo-pomodoro/kubo-pomodoro.png";

const ProjectImageCarousel = ({ images, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape" || event.key === "Esc") {
        setIsModalOpen(false);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % images.length);
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  if (!images || images.length === 0) {
    return null;
  }

  const modal = isModalOpen
    ? createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 text-3xl font-light"
              aria-label="Close image"
            >
              ×
            </button>

            {/* Previous control */}
            <button
              type="button"
              onClick={() =>
                setActiveIndex(
                  (prev) => (prev - 1 + images.length) % images.length
                )
              }
              className="absolute left-4 md:left-8 text-white/80 hover:text-white text-4xl md:text-5xl px-2 md:px-3 select-none"
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Next control */}
            <button
              type="button"
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % images.length)
              }
              className="absolute right-4 md:right-8 text-white/80 hover:text-white text-4xl md:text-5xl px-2 md:px-3 select-none"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Image container */}
            <div className="max-w-[95vw] max-h-[90vh] flex items-center justify-center">
              <img
                src={images[activeIndex].src}
                alt={
                  images[activeIndex].alt ||
                  `${title} image ${activeIndex + 1}`
                }
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
              />
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          showIndicators
          showArrows
          swipeable
          emulateTouch
          selectedItem={activeIndex}
          onChange={(index) => setActiveIndex(index)}
        >
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setIsModalOpen(true)}
              className="cursor-zoom-in"
            >
              <img
                src={image.src}
                alt={image.alt || `${title} image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
      {modal}
    </>
  );
};

const Projects = () => {
  const featuredProjects = [
    {
      title: "Savvi - Simple Personal Finance Tracker",
      description: "Savvi is a simple personal finance tracker built using the MERN stack, deployed on Render. Feature include: Income and Expense Tracking, ",
      technologies: ["React", "Node.js", "ExpressJS", "Render", "TanStack Router", "TailwindCSS", "GoogleOAuth2.0"],
      gifUrl: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN21sMnUwNjB4bjdibjUzNGUwcWJ0MG1odWthcDZ1bTl0M2txYnh4YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XxfW6cothakxCXUQtE/giphy.gif",
      github: "https://github.com/cbins13/savvi-ph",
      link: "https://savvi-ph-h65u.onrender.com/",
      youtubeId: "DcckwO3TJCo?si=Y2wjJROPwE7lptsl",
    },
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
    },
    {
      title: "Twosixhundred - Figma Website Design",
      description: "My first website design project, built using Figma.",
      technologies: ["Figma"],
      // TODO: Add your Twosixhundred showcase images here in the format:
      // carouselImages: [
      //   { src: twosixhundredImage1, alt: "Twosixhundred homepage" },
      //   { src: twosixhundredImage2, alt: "Twosixhundred inner page" },
      // ],
      carouselImages: [{src: homepageImage, alt: "Twosixhundred homepage"},
        {src: aboutUsImage, alt: "Twosixhundred about us page"},
        {src: shopImage, alt: "Twosixhundred shop page"},
      ],
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
                        {project.carouselImages && project.carouselImages.length > 0 ? (
                          <ProjectImageCarousel
                            images={project.carouselImages}
                            title={project.title}
                          />
                        ) : project.youtubeId ? (
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10">
                            <iframe
                              src={`https://www.youtube.com/embed/${project.youtubeId}`}
                              title={`${project.title} demo video`}
                              className="w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          </div>
                        ) : project.gifUrl ? (
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
                              <p className="text-gray-400 text-sm">GIF / Video Placeholder</p>
                              <p className="text-gray-500 text-xs mt-1">
                                Add youtubeId or gifUrl to project data
                              </p>
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

                      {(project.link && typeof project.link === "string" && project.link.trim() !== "") ||
                      (project.github && typeof project.github === "string" && project.github.trim() !== "") ? (
                        <div className="flex justify-start items-center gap-4">
                          {project.link && typeof project.link === "string" && project.link.trim() !== "" && (
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
                          )}

                          {project.github && typeof project.github === "string" && project.github.trim() !== "" && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-base font-medium"
                            >
                              <span>View GitHub</span>
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.395 7.868 10.916.575.108.785-.247.785-.553 0-.273-.01-1.178-.016-2.14-3.199.695-3.875-1.364-3.875-1.364-.523-1.328-1.277-1.681-1.277-1.681-1.044-.714.079-.699.079-.699 1.155.081 1.763 1.187 1.763 1.187 1.026 1.758 2.693 1.25 3.35.956.104-.744.402-1.25.73-1.538-2.553-.291-5.237-1.277-5.237-5.683 0-1.255.45-2.282 1.187-3.087-.119-.29-.515-1.46.112-3.046 0 0 .967-.31 3.169 1.18a11.02 11.02 0 0 1 2.886-.388c.978.004 1.963.132 2.885.388 2.203-1.49 3.168-1.18 3.168-1.18.628 1.586.232 2.756.114 3.046.74.805 1.186 1.832 1.186 3.087 0 4.418-2.69 5.389-5.253 5.675.414.356.783 1.06.783 2.137 0 1.543-.014 2.783-.014 3.162 0 .308.207.667.79.553C20.21 21.39 23.5 17.084 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      ) : null}
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
