import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

const projects = [
  {
    id: 1,
    route: "the-coxs",
    name: "The Cox's",
    img: "https://i.postimg.cc/KcCy38wT/thecox.png",
    description:
      "THE COX is a modern and responsive Event Management web application built with React. It enables users to explore, manage, and book events with a seamless user experience.",
  },
  {
    id: 2,
    route: "bookshelf",
    name: "Bookshelf",
    img: "https://i.postimg.cc/vH9wrdwN/bookshelf.png",
    description:
      "The Bookshelf website is to provide users with a convenient and organized platform to manage and explore their personal book collections.",
  },
  {
    id: 3,
    route: "plant-care",
    name: "Plant Care",
    img: "https://i.postimg.cc/NGKc0HJY/planare.png",
    description:
      "A modern (Plant Care) React project for helping user to manage their personal garden.",
  },
];

const ProjectsSection = () => {

  const navigate =useNavigate();

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      {/* Title with motion underline */}
      <div className="text-center mb-12 relative">
        <h2 className="text-4xl font-bold text-gray-900 dim:text-white inline-block relative">
          Projects
          <motion.div
            className="absolute left-[50px] bottom-0 h-1 bg-blue-500 rounded-full"
            style={{
              width: '80px',
              transform: 'translateX(-50%)',
              transformOrigin: 'center',
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: [0, 1, 0] }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
        </h2>
      </div>

      {/* Projects grid */}
      <div className="grid gap-10 md:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white dim:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col group cursor-pointer"
            initial={{ rotateY: -90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ transformStyle: 'preserve-3d' }}
            whileHover={{ scale: 1.03 }}
            // onClick={() => alert(`Show details for "${project.name}"`)}
          >
            {/* Image with zoom on hover */}
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 dim:text-white">
                {project.name}
              </h3>
              <p className="text-gray-600 dim:text-gray-300 flex-grow line-clamp-2">
                {project.description}
              </p>
              <button
                type="button"
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/project/${project.route}`)
                }}
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
