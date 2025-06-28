import React from 'react';
import { Link, NavLink } from 'react-router';
import Container from '../SharedComponent/Container';
import ThemeToggle from '../SharedComponent/ThemeToggle';


const Navbar = () => {
    const links = <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? "border-b-2 font-bold" : ""}>Home</NavLink></li>

    </>
    return (
        <Container>
            <div className="navbar p-0 font">
                <div className="navbar-start pl-0">

                    <Link to='/'>Shohel</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <ThemeToggle></ThemeToggle>
                    <a className="btn bg-primary hover:bg-secondary rounded-4xl hidden md:flex ">Contact Now</a>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 right-0 w-30 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;