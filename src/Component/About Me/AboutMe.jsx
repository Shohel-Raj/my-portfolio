import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import img from '../../assets/programmer.svg';

const AboutMe = () => {
    return (
        <section id="about" className="py-20">
            <div className="mx-auto">
                {/* Title with centered animated underline */}
                <div className="text-center mb-12 relative">
                    <h2 className="text-4xl font-bold text-gray-900 dim:text-white inline-block relative">
                        About Me
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

                {/* About Content */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1/2 flex p-1.5 overflow-hidden justify-center"
                    >
                        <img
                            src={img}
                            alt="Sohel - Web Developer"
                            className="rounded-2xl object-cover"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full flex-1/2"
                    >
                        <p className="text-gray-700 dim:text-gray-300 mb-6 text-lg">
                            Hi! I’m <span className="font-semibold text-blue-600 dim:text-blue-400">Sohel</span>, a self-taught MERN Stack Developer passionate about building responsive, user-friendly web apps. My coding journey began with curiosity and turned into a full-on obsession with JavaScript, React, and backend logic.
                        </p>

                        <p className="text-gray-700 dim:text-gray-300 mb-6 text-lg">
                            I love crafting smooth UI/UX with tools like Tailwind and Framer Motion, and solving real-world problems through full-stack projects. Clean code and thoughtful design are what I aim for.
                        </p>

                        <p className="text-gray-700 dim:text-gray-300 mb-6 text-lg">
                            Outside of tech, I enjoy football, sketching, and music—it keeps me balanced and inspired. Always learning, always building!
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <SkillIcon icon={<FaReact />} label="React.js" color="text-blue-500" />
                            <SkillIcon icon={<FaNodeJs />} label="Node.js" color="text-green-500" />
                            <SkillIcon icon={<SiMongodb />} label="MongoDB" color="text-green-600" />
                            <SkillIcon icon={<SiTailwindcss />} label="Tailwind CSS" color="text-cyan-500" />
                            <SkillIcon icon={<FaDatabase />} label="Express.js" color="text-yellow-500" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SkillIcon = ({ icon, label, color }) => (
    <span className={`px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm rounded-full flex items-center gap-2 ${color}`}>
        {icon} <span className="text-gray-800 dark:text-gray-200">{label}</span>
    </span>
);

export default AboutMe;
