import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom'; // Make sure you're using react-router-dom
import Container from '../SharedComponent/Container';
import ThemeToggle from '../SharedComponent/ThemeToggle';
import MyLogo from '../SharedComponent/MyLogo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const isActive = (hash) => {
        // Home is active when there's no hash
        if (!location.hash && hash === '#hero') return true;
        return location.hash === hash;
    };

    const navItems = [
        { label: 'Home', hash: '#hero' },
        { label: 'About', hash: '#about' },
        { label: 'Services', hash: '#services' },
        { label: 'Contact', hash: '#contact' },
    ];

    const navLinks = (
        <nav className="flex flex-col lg:flex-row gap-4">
            {navItems.map(({ label, hash }) => (
                <HashLink
                    key={hash}
                    smooth
                    to={`/${hash}`}
                    onClick={closeMenu}
                    className={isActive(hash) ? 'text-blue-500 font-bold' : 'text-gray-500'}
                >
                    {label}
                </HashLink>
            ))}
        </nav>
    );

    return (
        <Container>
            <div className="navbar font p-0 relative z-50">
                {/* Logo */}
                <div className="navbar-start pl-0">
                    <MyLogo />
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>

                {/* Right Controls */}
                <div className="navbar-end gap-2">
                    <ThemeToggle />
                    <a className="btn bg-primary hover:bg-secondary rounded-4xl hidden md:flex">
                        Contact Now
                    </a>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="btn btn-ghost"
                            aria-label="Toggle Menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Fullscreen Mobile Menu with Animation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="fixed inset-0 bg-base-100 z-40 flex flex-col items-center justify-center gap-6 p-6"
                        >
                            <button
                                onClick={closeMenu}
                                className="absolute top-5 right-5 text-3xl btn btn-ghost"
                                aria-label="Close Menu"
                            >
                                ✕
                            </button>
                            <ul className="menu text-lg font-semibold text-center">
                                {navLinks}
                            </ul>
                            <a className="btn bg-primary hover:bg-secondary w-40" onClick={closeMenu}>
                                Contact Now
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Container>
    );
};

export default Navbar;
