"use client";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  description: string;
  tech?: string;
  href?: string;
  logo?: string; // path to logo image
};

type ProjectGridProps = {
  heading?: string;
  projects: Project[];
};

export default function ProjectGrid({ heading = "Projects", projects }: ProjectGridProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mt-14">
      <h2 className="text-sm font-medium tracking-[0.08em] uppercase text-[#9ca3af]">
        {heading}
      </h2>
      <div className="mt-2 mb-6 h-px bg-[#2a2d33]"></div>

      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <a key={project.title} href={project.href ?? "#"} className="group block">
            <div 
              className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-lg border border-[#2a2d33] bg-[#1a1d23] flex items-center justify-center shadow-sm transition-all hover:shadow-md hover:shadow-[#2a2d33]/20 hover:scale-105 overflow-hidden mb-3">
                {project.logo ? (
                  <img 
                    src={project.logo} 
                    alt={project.title}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <span className="text-lg font-semibold text-[#e5e5e5] group-hover:text-white transition-colors">
                    {project.title === "Hedge" ? "H" : project.title === "The Instant Portal" ? "I" : "S"}
                  </span>
                )}
              </div>
              
              {/* Title and Description */}
              <div>
                <h3 className="text-sm font-medium text-[#e5e5e5] group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-[#9ca3af] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
