"use client"

import { motion, Variants } from "framer-motion";
import { FC } from "react";

interface AnimateDivProps {
    animate?: string;
    transition?: {
        duration?: number;
        transition?: string;
        delay?: number;
        staggerChildren?: number;
    };
    whileHover?: string;
    whileTap?: string;
    initial?: {
        opacity?: number;
        Y?: number;
        X?: number;
        scale?: number;
    };
    children: React.ReactNode;
    viewport?: { once?: boolean; amount?: number };
    className?: string;
    variants?: Variants;
}

// Variants prédéfinis pour faciliter l'animation
export const fadeIn = "fadeIn";
export const slideInLeft = "slideInLeft";
export const slideInRight = "slideInRight";
export const scale = "scale";

export const AnimateDiv: FC<AnimateDivProps> = ({ 
    animate, 
    transition, 
    whileHover, 
    whileTap, 
    initial, 
    children, 
    viewport,
    className,
    variants 
}) => {
    // Définition des variants internes
    const animationVariants = {
        fadeIn: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        },
        slideInLeft: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        slideInRight: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        }
    };

    const selectedVariant = 
        animate === fadeIn ? animationVariants.fadeIn :
        animate === slideInLeft ? animationVariants.slideInLeft :
        animate === slideInRight ? animationVariants.slideInRight :
        animate === scale ? animationVariants.scale :
        variants;

    const initialState = initial 
        ? { opacity: initial?.opacity, y: initial?.Y, x: initial?.X, scale: initial?.scale } 
        : (selectedVariant ? "hidden" : undefined);

    const animateState = selectedVariant
        ? "visible" 
        : animate || undefined;

    return (
        <motion.div
            className={className}
            initial={initialState}
            animate={animateState}
            variants={selectedVariant}
            transition={transition ? { 
                duration: transition?.duration, 
                ease: transition?.transition,
                delay: transition?.delay,
                staggerChildren: transition?.staggerChildren 
            } : undefined}
            whileHover={whileHover || undefined}
            whileTap={whileTap || undefined}
            viewport={viewport || undefined}
        >
            {children}
        </motion.div>
    )
}
