"use client"

import { FC } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'

interface LinkNavProps {
    lien: string;
    hr?: boolean;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    classNameHr?: string;
    id?: string;
    blank?: boolean;
}

export const LinkNav: FC<LinkNavProps> = ({ lien, hr = true, className, onClick, children, classNameHr, id, blank = false }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Link
            id={id}
            href={lien}
            onClick={onClick}
            onMouseEnter={()=>{setIsHovered(true)}}
            onMouseLeave={()=>{setIsHovered(false)}}
            className={clsx(
                `p-2 text-[18px] overflow-hidden block font-montserrat duration-300`,
                className
            )}
            target={blank ? "_blank" : "_self"}
        >
            {children}
            {hr &&
                <hr className={clsx(`bg-white w-[125%] mt-2 mb-2 -translate-x-[120%] duration-300 ease-in-out border-white rounded-full`,
                    classNameHr,
                    isHovered ? 'translate-x-0' : '-translate-x-[120%]'
                    )}
                />
            }
        </Link>
    )
}
