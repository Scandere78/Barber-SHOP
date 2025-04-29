'use client';

import { IoClose } from "react-icons/io5";
import { useError } from './PopUpContext';
import styles from "@/styles/animation.module.css"

const ErrorPopup = () => {
    const { error, clearError } = useError();

    if (!error) return null;

    return (
        <div className={`bg-red-500 text-white p-5 ${styles.popupEnter} rounded-xl shadow-xl flex gap-4`}>
            <p>{error}</p>
            <IoClose onClick={clearError} className="cursor-pointer text-xl" />
        </div>
    );
};

export default ErrorPopup;
