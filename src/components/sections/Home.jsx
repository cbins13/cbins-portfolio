import React, { useEffect, useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import Shuffle from "../animations/Shuffle";
import FadeInText from "../animations/FadeInText";
import Aurora from "../animations/Aurora";
import ProfileCard from "../ProfileCard";
import profilePicture from "../../assets/images/avatar/profile_picture.jpg";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = "Full-Stack Developer";
    const typingSpeed = isDeleting ? 80 : 120;
    const pauseAtEnd = 1500;
    const pauseAtStart = 800;

    let timeout;

    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAtEnd);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => setIsDeleting(false), pauseAtStart);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) => {
          if (!isDeleting) {
            return fullText.slice(0, prev.length + 1);
          }
          return fullText.slice(0, prev.length - 1);
        });
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section
      id="home"
      className="min-h-screen max-w-7xl mx-auto flex items-center justify-center relative px-4"
    >
      <Aurora />
      <RevealOnScroll>
        <div className="w-full z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* ProfileCard - Left side on desktop, top on mobile */}
            <div className="flex justify-center order-1 lg:order-1">
              <FadeInText delay={0.2}>
                <ProfileCard avatarSrc={profilePicture} />
              </FadeInText>
            </div>

            {/* Text Content - Right side on desktop, bottom on mobile */}
            <div className="text-center lg:text-left order-2 lg:order-2">
              <Shuffle
                text="Hi, I'm Christian"
                shuffleDirection="right"
                duration={0.35}
                shuffleTimes={1}
                animationMode="evenodd"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={false}
                triggerOnHover={true}
                respectReducedMotion={true}
                className="text-5xl md:text-7xl font-bold mb-6 text-white leading-right"
                tag="h1"
                textAlign="center"
              />

              <FadeInText delay={0.8}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r bg-clip-text from-violet-500 to-fuchsia-400 leading-right text-transparent">
                  <span>
                    {displayText}
                    <span className="border-r-2 border-fuchsia-400 ml-1 animate-pulse">
                      &nbsp;
                    </span>
                  </span>
                </h2>
              </FadeInText>

              {/* Location */}
              <FadeInText delay={1.0}>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-8 group cursor-default">
                  <svg
                    className="w-5 h-5 text-orange-400 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-300 group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm md:text-base font-bold bg-gradient-to-r bg-clip-text text-transparent from-orange-400 to-amber-500 transition-all duration-300 group-hover:from-orange-300 group-hover:to-amber-400 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.4)]">
                    Baguio City, Philippines
                  </span>
                </div>
              </FadeInText>

              <FadeInText delay={1.2}>
                <p className="text-gray-400 text-lg mb-6 max-w-lg mx-auto lg:mx-0">
                  Currently a full-stack web developer with 2 years of experience, with a passion in learning new technologies and deploying solutions to business needs.
                </p>
              </FadeInText>

              {/* Social Media Badges */}
              <FadeInText delay={1.4}>
                <div className="flex justify-center lg:justify-start space-x-6 mb-8">
                  <a
                    href="https://www.linkedin.com/in/cbinayan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-all duration-200 hover:-translate-y-1"
                    aria-label="LinkedIn Profile"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center hover:border-blue-500/60 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                      <svg
                        className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                  </a>

                  <a
                    href="https://github.com/cbins13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-all duration-200 hover:-translate-y-1"
                    aria-label="GitHub Profile"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-600/20 border border-violet-500/30 flex items-center justify-center hover:border-violet-500/60 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
                      <svg
                        className="w-6 h-6 text-violet-400 group-hover:text-violet-300 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </FadeInText>

              <FadeInText delay={1.6}>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a
                    href="#projects"
                    className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                  >
                    View Projects
                  </a>

                  <a
                    href="#contact"
                    className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                  >
                    Get In Touch
                  </a>
                </div>
              </FadeInText>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
