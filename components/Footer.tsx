import React from 'react'
import { LinkNav } from './Core/LinkNav'
import { FaInstagram, FaFacebookF, FaTwitter, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className='min-h-[200px] bg-gray-900 text-white shadow-2xl'>
            <div className='max-w-7xl mx-auto px-4 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
                    <div>
                        <div className="flex items-center mb-6">
                            <FaScissors className="text-amber-600 text-2xl mr-2" />
                            <h3 className='text-xl font-bold'>
                                Le <span className="text-amber-600">Barbier</span>
                            </h3>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Des coupes élégantes et des services de barbe exceptionnels dans un environnement raffiné.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-amber-600 font-semibold text-lg mb-4'>Services</h3>
                        <ul className='space-y-2'>
                            <li>
                                <LinkNav hr={false} lien="/services#coupe" className='text-gray-400 hover:text-amber-500 transition-colors'>
                                    Coupes Classiques
                                </LinkNav>
                            </li>
                            <li>
                                <LinkNav hr={false} lien="/services#barbe" className='text-gray-400 hover:text-amber-500 transition-colors'>
                                    Taille de Barbe
                                </LinkNav>
                            </li>
                            <li>
                                <LinkNav hr={false} lien="/services#rasage" className='text-gray-400 hover:text-amber-500 transition-colors'>
                                    Rasage Traditionnel
                                </LinkNav>
                            </li>
                            <li>
                                <LinkNav hr={false} lien="/services#coloration" className='text-gray-400 hover:text-amber-500 transition-colors'>
                                    Coloration Homme
                                </LinkNav>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-amber-600 font-semibold text-lg mb-4'>Contact</h3>
                        <ul className='space-y-3 text-gray-400'>
                            <li className="flex items-center">
                                <FaPhone className="mr-3 text-amber-500" />
                                +33 1 23 45 67 89
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3 text-amber-500" />
                                contact@lebarbier.fr
                            </li>
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mr-3 text-amber-500 mt-1" />
                                <span>123 Avenue des Champs-Élysées<br />75008 Paris, France</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-amber-600 font-semibold text-lg mb-4'>Horaires</h3>
                        <ul className='space-y-2 text-gray-400'>
                            <li className="flex justify-between">
                                <span>Lundi</span>
                                <span>9h - 20h</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Mardi</span>
                                <span>9h - 20h</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Mercredi</span>
                                <span>9h - 20h</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Jeudi</span>
                                <span>9h - 20h</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Vendredi</span>
                                <span>9h - 20h</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Samedi</span>
                                <span>9h - 18h</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Dimanche</span>
                                <span>Fermé</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='border-t border-gray-800 pt-8'>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className='text-gray-400 mb-4 md:mb-0'>
                            © {new Date().getFullYear()} Le Barbier - Tous droits réservés
                        </p>
                        <div className="flex space-x-6">
                            <LinkNav hr={false} lien="/mentions-legales" className='text-gray-400 hover:text-amber-500 transition-colors'>
                                Mentions légales
                            </LinkNav>
                            <LinkNav hr={false} lien="/confidentialite" className='text-gray-400 hover:text-amber-500 transition-colors'>
                                Politique de confidentialité
                            </LinkNav>
                            <LinkNav hr={false} lien="/cgv" className='text-gray-400 hover:text-amber-500 transition-colors'>
                                CGV
                            </LinkNav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
