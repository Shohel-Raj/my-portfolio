import React, { useEffect, useState } from 'react';
import img from "../../assets/developer.png";
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const MyLogo = () => {
    const fullText = "shohel";
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loop, setLoop] = useState(0);

    useEffect(() => {
        const typingSpeed = isDeleting ? 100 : 150;

        const handleTyping = () => {
            const current = fullText;
            let updatedText = isDeleting
                ? current.substring(0, text.length - 1)
                : current.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === current) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoop(loop + 1);
            }
        };

        const timeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, loop]);

    return (
        <Link to='/' className='flex gap-1.5 justify-center items-center'>
            <img className='h-10' src={img} alt="logo" />
            <motion.p
                className='text-3xl font-bold lowercase'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {text}
                <span className="animate-pulse">|</span>
            </motion.p>
        </Link>
    );
};

export default MyLogo;
