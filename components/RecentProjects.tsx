import { projects } from "data";
import React from "react";

const RecentProjects = () => {
  return (
    <>
      <div className="py-20 max-w-7xl mx-auto px-4">
        <h1 className="heading text-center mb-8">
          A selection of {""}
          <span className="text-purple"> my recent projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center p-6 min-h-[200px]
                        bg-[#161a31]/10 rounded-2xl backdrop-blur-sm
                        hover:bg-[#161a31]/20 transition-all duration-300
                        relative overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={img}
                  alt={title}
                  className="object-cover w-full h-full opacity-50"
                />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {title}
                </h3>
                <p className="text-gray-300 text-center">{des}</p>
                <a
                  href={link}
                  className="text-blue-50 text-center hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
