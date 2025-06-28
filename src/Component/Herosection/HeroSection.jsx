import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProfileWithDecor from "./Profile";

const HeroSection = () => {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const words = ["MongoDB", "Express.js", "React.js", "Node.js",];
        const currentWord = words[currentWordIndex];
        const typingSpeed = isDeleting ? 80 : 120;
        const pauseBeforeDelete = 1000;

        let timeout;

        if (!isDeleting && displayedText.length < currentWord.length) {
            timeout = setTimeout(() => {
                setDisplayedText(currentWord.substring(0, displayedText.length + 1));
            }, typingSpeed);
        } else if (isDeleting && displayedText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayedText(currentWord.substring(0, displayedText.length - 1));
            }, typingSpeed);
        } else if (!isDeleting && displayedText === currentWord) {
            timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        } else if (isDeleting && displayedText === '') {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentWordIndex,]);
    return (
        <section className="w-full min-h-screen  flex items-center justify-center bg-base-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left: Text Content */}
                <motion.div
                    className="space-y-6 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                        Hi, I'm <span className="text-primary">Sohel</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        I'm a <span className="font-semibold text-black dark:text-white">Full-Stack MERN Developer</span> with a strong passion for building modern, responsive, and scalable web applications. I specialize in <br /> the{' '}
                        <span className="text-primary font-semibold">
                            {displayedText}
                            <span className="animate-pulse">|</span>
                        </span>
                    </p>
                    <divz className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">

                        <button className="px-6 py-2 text-lg cursor-pointer font-semibold border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition duration-300">
                            Resume
                        </button>
                    </divz>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <ProfileWithDecor></ProfileWithDecor>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
