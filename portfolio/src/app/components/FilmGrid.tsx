"use client";
import { useEffect, useState } from "react";

type Film = {
  title: string;
  src: string; // path in /public (e.g., /posters/graduate.jpg)
  href?: string;
};

type FilmGridProps = {
  heading?: string;
  films: Film[];
};

export default function FilmGrid({ heading = "Favorite films", films }: FilmGridProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mt-14">
      <h2 className="text-sm font-medium tracking-[0.08em] uppercase text-[#9ca3af]">
        {heading}
      </h2>
      <div className="mt-2 mb-6 h-px bg-[#2a2d33]"></div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4">
        {films.map((film, index) => (
          <a
            key={film.title}
            href={film.href ?? "#"}
            className="group block"
            aria-label={film.title}
          >
            {/* Outer frame */}
            <div 
              className={`rounded-2xl border border-[#2a2d33] bg-[#1a1d23] p-1 shadow-sm transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Inner mat + poster */}
              <div className="rounded-xl overflow-hidden border-[6px] border-[#2a2d33] shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
                <img
                  src={film.src}
                  alt={film.title}
                  className="aspect-[2/3] w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}


