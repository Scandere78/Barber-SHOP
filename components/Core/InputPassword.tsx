"use client"

import { FC, useState } from "react"
import clsx from "clsx"
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

interface InputPasswordProps {
    name: string;
    id: string;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    placeholder?: string;
    value?: string;
}

export const InputPassword: FC<InputPasswordProps> = ({ name, id, className = "", onChange, required = true, placeholder = "", value = "" }) => {
    const [type, setType] = useState<string>("password")

    const changeType = () => {
        if (type === "password") return setType("text")
        if (type === "text") return setType("password")
    }

    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <FaLock className="text-gray-500" />
            </div>
            <input
                type={type}
                name={name}
                id={id}
                onChange={onChange}
                required={required}
                className={clsx(`p-3 w-full rounded-md pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 focus:border-white text-white outline-none transition-all duration-300`, className)}
                placeholder={placeholder}
                value={value}
            />
            {type === "password" ?
                <FaEye
                    className="absolute right-4 top-4 text-lg text-gray-500"
                    onClick={changeType}
                />
                :
                <FaEyeSlash
                    className="absolute right-4 top-4 text-lg text-gray-500"
                    onClick={changeType}
                />
            }
        </div>
    )
}
