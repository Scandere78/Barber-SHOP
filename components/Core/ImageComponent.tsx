"use client"

import Image from "next/image"
import { FC } from 'react'

interface ImageComponentProps {
    img: string;
    alt: string;
    size: number;
    className?: string;
}

export const ImageComponent: FC<ImageComponentProps> = ({ img, alt, size, className }) => {

    const progressiveImage = img.replace("/upload/", "/upload/fl_progressive,q_auto/");
    return (
        <Image
            src={progressiveImage}
            alt={alt}
            width={size}
            height={size}
            className={className}
        />
    )
}
