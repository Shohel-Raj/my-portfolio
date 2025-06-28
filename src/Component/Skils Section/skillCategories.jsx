import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  FaNodeJs,
  FaFigma,
  FaGitSquare,
  FaGithubSquare,
} from 'react-icons/fa';
import { IoLogoReact } from 'react-icons/io5';
import { RiTailwindCssLine } from 'react-icons/ri';
import { TbBrandBootstrap, TbBrandJavascript } from 'react-icons/tb';
import { DiMongodb } from 'react-icons/di';
import { SiFirebase, SiPostman } from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { motion } from 'framer-motion';

const skills = [
  { icon: <FaGitSquare />, label: 'Git', color: 'text-red-500' },
  { icon: <FaGithubSquare />, label: 'GitHub', color: 'text-red-500' },
  { icon: <SiPostman />, label: 'Postman', color: 'text-orange-500' },
  { icon: <BiLogoVisualStudio />, label: 'VS Code', color: 'text-blue-400' },
  { icon: <FaFigma />, label: 'Figma', color: 'text-pink-500' },
  { icon: <FaNodeJs />, label: 'Node.js', color: 'text-green-600' },
  { icon: <DiMongodb />, label: 'MongoDB', color: 'text-green-500' },
  { icon: <SiFirebase />, label: 'Express.js', color: 'text-yellow-500' },
  { icon: <IoLogoReact />, label: 'React.js', color: 'text-blue-500' },
  { icon: <RiTailwindCssLine />, label: 'Tailwind CSS', color: 'text-cyan-500' },
  { icon: <TbBrandBootstrap />, label: 'Bootstrap CSS', color: 'text-cyan-500' },
  { icon: <TbBrandJavascript />, label: 'JavaScript', color: 'text-yellow-400' },
];

// Simple shuffle utility
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const SkillCard = ({ skill }) => (
  <div className="min-w-[140px] bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow flex flex-col items-center mx-4 hover:scale-105 transition-transform">
    <div className={`text-3xl mb-2 ${skill.color}`}>{skill.icon}</div>
    <p className="text-sm font-medium text-gray-800 dark:text-white">{skill.label}</p>
  </div>
);

const SkillsMarquee = () => {
  // Randomize each line separately
  const row1 = shuffleArray(skills);
  const row2 = shuffleArray(skills);
  const row3 = shuffleArray(skills);

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white inline-block relative">
            Skills
            <motion.div
              className="absolute left-[20px] bottom-0 h-1 bg-blue-500 rounded-full"
              style={{
                width: '50px',
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

        <div className="space-y-4">
          <Marquee speed={50} gradient={false} direction="left" pauseOnHover>
            {[...row1, ...row1].map((skill, i) => (
              <SkillCard key={`row1-${i}`} skill={skill} />
            ))}
          </Marquee>

          <Marquee speed={40} gradient={false} direction="right" pauseOnHover>
            {[...row2, ...row2].map((skill, i) => (
              <SkillCard key={`row2-${i}`} skill={skill} />
            ))}
          </Marquee>

          <Marquee speed={45} gradient={false} direction="left" pauseOnHover>
            {[...row3, ...row3].map((skill, i) => (
              <SkillCard key={`row3-${i}`} skill={skill} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
