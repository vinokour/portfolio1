"use client";
import { useEffect, useState } from "react";
import FilmGrid from "./components/FilmGrid";
import ReviewGrid from "./components/ReviewGrid";
import ProjectGrid from "./components/ProjectGrid";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const films = [
    {
      title: "The Graduate",
      src: "/posters/graduate.jpg",
      href: "https://letterboxd.com/film/the-graduate/",
    },
    {
      title: "All the President's Men",
      src: "/posters/presidents.jpg",
      href: "https://letterboxd.com/film/all-the-presidents-men/",
    },
    {
      title: "Moneyball",
      src: "/posters/moneyball.jpg",
      href: "https://letterboxd.com/film/moneyball/",
    },
    {
      title: "Argo",
      src: "/posters/argo.jpg",
      href: "https://letterboxd.com/film/argo/",
    },
  ];

  const reviews = [
    {
      title: "The Flash",
      src: "/posters/flash.jpg",
      blurb: " Why is Scientology pushing the praise for this movie?  ",
      href: "https://www.letterboxd.com/nickvinokour/film/the-flash/",
    },
    {
      title: "Whiplash",
      src: "/posters/whiplash.jpg",
      blurb: "Showed to my girlfriend who loves La La Land, easiest layup ever",
      href: "https://letterboxd.com/nickvinokour/film/whiplash-2014/",
    },
    {
      title: "The Firm",
      src: "/posters/thefirm.jpg",
      blurb: "Adaptions of novels, fiction or non-fiction, will always be superior",
      href: "https://www.letterboxd.com/nickvinokour/film/the-firm-1993/",
    },
    {
      title: "Spider-Man: Across the Spider-Verse",
      src: "/posters/spider.jpg",
      blurb: "Points out the major flaw in big blockbuster franchises and trilogies",
      href: "https://www.letterboxd.com/nickvinokour/film/spider-man-across-the-spider-verse/",
    },
  ];

  const projects = [
    {
      title: "Hedge",
      description: "An iOS app that helps users curb their gambling addictions by blocking their apps, only unlcoking them after investing in a safe ETF.",
      tech: "TypeScript, React, Node.js",
      logo: "/logos/hedge.png",
      href: "https://www.hedgeyourbets.app/", // Add Hedge URL when available
    },
    {
      title: "Goldman Sachs",
      description: "Worked on the Goldman.com team, where I designed and deployed complex APIs for client migration systems and led credential migration initiatives.",
      tech: "Java, Spring Boot, Test Coverage",
      logo: "/logos/goldman.png",
      href: "https://www.gs.com",
    },
    {
      title: "SOUL",
      description: "A blockchain startup where I wore many hats — building features, sitting in pitch meetings, and presenting at events.",
      tech: "Blockchain, TypeScript, React",
      logo: "/logos/soul.png",
      href: "https://soulstamps.com",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0f1419] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Letterboxd-style profile header */}
        <div className={`mb-8 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full border border-[#2a2d33] overflow-hidden">
              <img 
                src="/logos/headshot.jpeg" 
                alt="Nick Vinokour" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-[#e5e5e5]">Nick Vinokour</h1>
              <div className="flex items-center gap-2 mt-1">
                <svg className="w-4 h-4 text-[#9ca3af]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-[#9ca3af]">New York City</span>
              </div>
            </div>
          </div>
          
          {/* Contact links */}
          <div className="flex flex-wrap gap-6 sm:gap-8 text-sm">
            <a href="/ResumeNickVinokour.pdf" download="NickVinokour_Resume.pdf" className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1a1d23] transition-all duration-200">
              <svg className="w-5 h-5 text-[#9ca3af] group-hover:text-[#e5e5e5] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              <span className="text-[#9ca3af] group-hover:text-[#e5e5e5] transition-colors font-medium">Resume</span>
            </a>
            <a href="mailto:nickvinokour@gmail.com" className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1a1d23] transition-all duration-200">
              <svg className="w-5 h-5 text-[#9ca3af] group-hover:text-[#e5e5e5] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-[#9ca3af] group-hover:text-[#e5e5e5] transition-colors font-medium">Email</span>
            </a>
            <a href="https://www.linkedin.com/in/nick-vinokour/" target="_blank" rel="noreferrer noopener" className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1a1d23] transition-all duration-200">
              <svg className="w-5 h-5 text-[#9ca3af] group-hover:text-[#e5e5e5] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              <span className="text-[#9ca3af] group-hover:text-[#e5e5e5] transition-colors font-medium">LinkedIn</span>
            </a>
            <a href="https://github.com/vinokour" target="_blank" rel="noreferrer noopener" className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1a1d23] transition-all duration-200">
              <svg className="w-5 h-5 text-[#9ca3af] group-hover:text-[#e5e5e5] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[#9ca3af] group-hover:text-[#e5e5e5] transition-colors font-medium">GitHub</span>
            </a>
          </div>
        </div>

        {/* Bio section with favorite films and PDF card */}
        <div className={`mb-12 sm:mb-16 transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Bio text - left side */}
            <div className="lg:col-span-2">
              <div className="max-w-2xl">
                <p className="text-base sm:text-lg lg:text-xl text-[#e5e5e5] leading-relaxed font-light">
                  Hi, I&apos;m Nick, it&apos;s nice to meet you!
                </p>
                <br />
                <p className="text-base sm:text-lg lg:text-xl text-[#e5e5e5] leading-relaxed font-light">
                  I graduated from the University of Michigan in May with a CS degree. 
                </p>
                <br />
                <p className="text-base sm:text-lg lg:text-xl text-[#e5e5e5] leading-relaxed font-light">
                When I&apos;m not working, you&apos;ll find me running through the city, watching films, or trying to win my fantasy football league for the first time since 7th grade.
                </p>
                <br />
                <p className="text-base sm:text-lg lg:text-xl text-[#e5e5e5] leading-relaxed font-light">
                  I had an offer from ScaleAI that got rescinded before I started, so I&apos;m currently open to any role and excited to contribute wherever I can!
                </p>
              </div>

              {/* IP Thoughts PDF Card - below bio text */}
              <div className="mt-6 sm:mt-8">
                <a 
                  href="/Thoughts_on_IP_in_2025.pdf" 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-[#2a2d33] bg-gradient-to-br from-[#1a1d23] to-[#0f1419] p-4 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#2a2d33]/20 hover:scale-[1.02] hover:border-[#3a3d43]">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
                    </div>
                    
                    <div className="relative flex items-center gap-3 sm:gap-4">
                      {/* PDF Icon */}
                      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/30 border border-red-500/30 flex items-center justify-center group-hover:from-red-500/30 group-hover:to-red-600/40 transition-all duration-300">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 group-hover:text-red-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start sm:items-center gap-2 mb-2">
                          <h3 className="text-base sm:text-lg font-semibold text-[#e5e5e5] group-hover:text-white transition-colors leading-tight">
                            Thoughts on the Film Industry
                          </h3>
                          <svg className="w-4 h-4 text-[#9ca3af] group-hover:text-[#e5e5e5] transition-all duration-300 group-hover:translate-x-1 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                        <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed group-hover:text-[#b3b8bf] transition-colors">
                          Some takes, hot or cold.
                        </p>
                        <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            August 15, 2025
                          </span>
                          <span className="text-xs text-[#6b7280]">PDF • 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Favorite Films - right side */}
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h2 className="text-sm font-medium tracking-[0.08em] uppercase text-[#9ca3af]">
                FAVORITE FILMS
              </h2>
              <div className="mt-2 mb-4 sm:mb-6 h-px bg-[#2a2d33]"></div>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-xs mx-auto lg:mx-0">
                {films.map((film, index) => (
                  <a
                    key={film.title}
                    href={film.href ?? "#"}
                    className="group block"
                    aria-label={film.title}
                  >
                    {/* Outer frame */}
                    <div 
                      className={`rounded-lg sm:rounded-xl border border-[#2a2d33] bg-[#1a1d23] p-0.5 shadow-sm transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      style={{ transitionDelay: `${index * 50 + 300}ms` }}
                    >
                      {/* Inner mat + poster */}
                      <div className="rounded-md sm:rounded-lg overflow-hidden border-[2px] sm:border-[3px] border-[#2a2d33] shadow-[0_1px_4px_rgba(0,0,0,0.3)] sm:shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
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
            </div>
          </div>
        </div>

        {/* Projects section - Full width on top */}
        <div className={`transition-all duration-1000 ease-out delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ProjectGrid heading="EXPERIENCES & PROJECTS" projects={projects} />
        </div>

        {/* Reviews section */}
        <div className={`transition-all duration-1000 ease-out delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ReviewGrid heading="MY FAVORITE REVIEWS I&apos;VE WRITTEN" reviews={reviews} />
        </div>
      </div>
    </main>
  );
}
