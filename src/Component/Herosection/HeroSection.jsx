import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProfileWithDecor from "./Profile";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

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
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                        Hi, I'm <span className="text-primary">Sohel</span>
                    </h1>
                    <p className="text-lg text-gray-600 dim:text-gray-300 leading-relaxed">
                        I'm a <span className="font-semibold text-black dim:text-white">Full-Stack MERN Developer</span> with a strong passion for building modern, responsive, and scalable web applications. I specialize in <br /> the{' '}
                        <span className="text-primary font-semibold">
                            {displayedText}
                            <span className="animate-pulse">|</span>
                        </span>
                    </p>
                    <div >
                        <div className="flex justify-center md:justify-start gap-2 mb-2">
                            <button onClick={()=>window.open("https://github.com/Shohel-Raj",'_blank')} className="px-2 py-2 text-lg cursor-pointer font-semibold border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition duration-300">
                                <FaGithub />
                            </button>
                            <button onClick={()=>window.open("https://linkedin.com/in/mohammedshohel87",'_blank')} className="px-2 py-2 text-lg cursor-pointer font-semibold border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition duration-300">
                                <FaLinkedin />
                            </button>
                            <button onClick={()=>window.open("https://facebook.com/mohammedshohel.bd",'_blank')} className="px-2 py-2 text-lg cursor-pointer font-semibold border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition duration-300">
                                <FaSquareFacebook />
                            </button>
                        </div>

                        <button onClick={()=>window.open('https://docs.google.com/document/d/e/2PACX-1vRWvzGQDBzxiL0b4RmnJYrjqHCSDYK-6Rnwytf5NQzGSjBePqC3WCwir1KTCbD1RLAY0cmZQfSJfYiG/pub')} className="px-6 py-2 text-lg cursor-pointer font-semibold border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition duration-300">
                            Resume
                        </button>
                    </div>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <ProfileWithDecor></ProfileWithDecor>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
