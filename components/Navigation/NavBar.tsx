"use client";

import { useState, useEffect } from "react";
import { FaUserAlt, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
import { AnimateDiv, fadeIn } from "../Core/AnimateDiv";
import { motion } from "framer-motion";
import { LinkNav } from "../Core/LinkNav";
import { useSession } from 'next-auth/react';
import { ImageComponent } from "../Core/ImageComponent";

export const NavBar = () => {
    const { data: session, status } = useSession();
    const [toggleAside, setToggleAside] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [searchOpen, setSearchOpen] = useState<boolean>(false);

    const handleToggleAside = () => {
        setToggleAside(!toggleAside);
    };

    const handleToggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`fixed w-full ${toggleAside ? 'z-[65] bg-black' : 'z-[50]'} transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-gradient-to-b from-[#000000c7] via-[#00000093] to-transparent py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 xl:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <AnimateDiv
                            initial={{ opacity: 0 }}
                            animate={fadeIn}
                            transition={{ duration: 0.5 }}
                            className="flex-shrink-0"
                        >
                            <LinkNav hr={false} lien={"/"} className="overflow-visible">
                                <div className="flex items-center">
                                    <FaScissors className="text-amber-600 text-3xl mr-2" />
                                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                                        Le <span className="text-amber-600">Barbier</span>
                                    </h1>
                                </div>
                            </LinkNav>
                        </AnimateDiv>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <AnimateDiv 
                                initial={{ opacity: 0, Y: -10 }} 
                                animate={fadeIn} 
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <LinkNav hr={false} lien="/" className="text-white hover:text-amber-500 transition-colors duration-300">
                                    Accueil
                                </LinkNav>
                            </AnimateDiv>
                            
                            <AnimateDiv 
                                initial={{ opacity: 0, Y: -10 }} 
                                animate={fadeIn} 
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <LinkNav hr={false} lien="/services" className="text-white hover:text-amber-500 transition-colors duration-300">
                                    Services
                                </LinkNav>
                            </AnimateDiv>
                            
                            <AnimateDiv 
                                initial={{ opacity: 0, Y: -10 }} 
                                animate={fadeIn} 
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <LinkNav hr={false} lien="/galerie" className="text-white hover:text-amber-500 transition-colors duration-300">
                                    Galerie
                                </LinkNav>
                            </AnimateDiv>
                            
                            <AnimateDiv 
                                initial={{ opacity: 0, Y: -10 }} 
                                animate={fadeIn} 
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <LinkNav hr={false} lien="/equipe" className="text-white hover:text-amber-500 transition-colors duration-300">
                                    Notre Équipe
                                </LinkNav>
                            </AnimateDiv>
                            
                            <AnimateDiv 
                                initial={{ opacity: 0, Y: -10 }} 
                                animate={fadeIn} 
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <LinkNav hr={false} lien="/contact" className="text-white hover:text-amber-500 transition-colors duration-300">
                                    Contact
                                </LinkNav>
                            </AnimateDiv>
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center space-x-4">
                            {/* Search Icon */}
                            <AnimateDiv 
                                initial={{ opacity: 0 }} 
                                animate={fadeIn} 
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <button 
                                    onClick={handleToggleSearch} 
                                    className="p-2 text-white hover:text-amber-500 transition-colors duration-300"
                                >
                                    <FaSearch className="text-lg" />
                                </button>
                            </AnimateDiv>

                            {/* Auth Button */}
                            <AnimateDiv 
                                initial={{ opacity: 0 }} 
                                animate={fadeIn} 
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="hidden md:block"
                            >
                                {status === 'unauthenticated' ? (
                                    <LinkNav hr={false} lien="/reservations" className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-all duration-300">
                                        Réserver
                                    </LinkNav>
                                ) : status === 'loading' ? (
                                    <div className="w-8 h-8 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                                ) : (status === 'authenticated' && session?.user) && (
                                    <LinkNav
                                        hr={false}
                                        lien="/account"
                                        className="flex items-center space-x-2 text-white hover:text-amber-500 transition-colors duration-300"
                                    >
                                        {session?.user?.image ? (
                                            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                                                <ImageComponent
                                                    img={session.user.image}
                                                    alt={`Photo de profil de ${session.user.name}`}
                                                    size={32}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                                <FaUserAlt className="text-black text-sm" />
                                            </div>
                                        )}
                                        <span className="hidden lg:inline-block">Mon compte</span>
                                    </LinkNav>
                                )}
                            </AnimateDiv>

                            {/* Mobile Menu Button */}
                            <AnimateDiv 
                                initial={{ opacity: 0 }} 
                                animate={fadeIn} 
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="block lg:hidden relative z-[60]"
                            >
                                <button 
                                    onClick={handleToggleAside} 
                                    className="p-2 text-white hover:text-amber-500 transition-colors duration-300"
                                >
                                    {toggleAside ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                                </button>
                            </AnimateDiv>
                        </div>
                    </div>

                    {/* Search Overlay */}
                    <motion.div 
                        className={`w-full overflow-hidden px-3 transition-all duration-500 ${searchOpen ? 'h-16 mt-4 mb-2 py-2' : 'h-0 mt-0 mb-0'}`}
                        initial={false}
                        animate={{ height: searchOpen ? 64 : 0, marginTop: searchOpen ? 16 : 0, marginBottom: searchOpen ? 8 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Rechercher un style, une coupe..."
                                className={`w-full px-4 py-3 bg-black placeholder:text-gray-400 outline-2 ${scrolled ? "outline-amber-500" : "outline-transparent"} outline-offset-4 focus:outline-amber-500 rounded-full text-white transition-all duration-300`}
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300">
                                <FaSearch />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <motion.aside 
                className="fixed inset-y-0 right-0 w-[300px] bg-black/95 backdrop-blur-lg shadow-2xl z-[51] flex flex-col lg:hidden"
                initial={{ x: '100%' }}
                animate={{ x: toggleAside ? 0 : '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <div className="px-6 flex flex-col space-y-6 min-h-screen pt-22 pb-6 justify-between">
                    {/* Mobile Auth */}
                    <div className="pt-20 pb-6">
                        {status === 'unauthenticated' ? (
                            <LinkNav 
                                hr={false} 
                                lien="/reservations" 
                                onClick={handleToggleAside}
                                className="flex items-center space-x-3 py-2 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full w-full justify-center"
                            >
                                <FaUserAlt />
                                <span>Réserver</span>
                            </LinkNav>
                        ) : status === 'loading' ? (
                            <div className="flex justify-center">
                                <div className="w-8 h-8 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                            </div>
                        ) : (status === 'authenticated' && session?.user) && (
                            <div className="flex items-center space-x-3 px-4">
                                {session?.user?.image ? (
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                                        <ImageComponent
                                            img={session.user.image}
                                            alt={`Photo de profil de ${session.user.name}`}
                                            size={48}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                        <FaUserAlt className="text-black" />
                                    </div>
                                )}
                                <div>
                                    <LinkNav 
                                        hr={false}
                                        lien="/account"
                                        onClick={handleToggleAside}
                                        className="text-white hover:text-amber-500"
                                    >
                                        Mon compte
                                    </LinkNav>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Links */}
                    <div className="flex-1 flex flex-col space-y-1">
                        <LinkNav
                            hr={false}
                            lien="/"
                            onClick={handleToggleAside}
                            className="text-white hover:text-amber-500 py-3 px-4 border-b border-gray-800"
                        >
                            Accueil
                        </LinkNav>
                        <LinkNav
                            hr={false}
                            lien="/services"
                            onClick={handleToggleAside}
                            className="text-white hover:text-amber-500 py-3 px-4 border-b border-gray-800"
                        >
                            Services
                        </LinkNav>
                        <LinkNav
                            hr={false}
                            lien="/galerie"
                            onClick={handleToggleAside}
                            className="text-white hover:text-amber-500 py-3 px-4 border-b border-gray-800"
                        >
                            Galerie
                        </LinkNav>
                        <LinkNav
                            hr={false}
                            lien="/equipe"
                            onClick={handleToggleAside}
                            className="text-white hover:text-amber-500 py-3 px-4 border-b border-gray-800"
                        >
                            Notre Équipe
                        </LinkNav>
                        <LinkNav
                            hr={false}
                            lien="/contact"
                            onClick={handleToggleAside}
                            className="text-white hover:text-amber-500 py-3 px-4 border-b border-gray-800"
                        >
                            Contact
                        </LinkNav>
                    </div>

                    {/* Footer in Mobile Menu */}
                    <div className="pt-6">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Le Barbier
                        </p>
                        <p className="text-gray-400 text-sm">
                            Tous droits réservés
                        </p>
                    </div>
                </div>
            </motion.aside>
        </>
    );
};
