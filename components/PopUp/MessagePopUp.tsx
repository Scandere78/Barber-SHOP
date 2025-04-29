'use client';

import { IoClose } from "react-icons/io5";
import { useMessage } from "./PopUpContext";
import styles from "@/styles/animation.module.css"

const MessagePopUp = () => {
    const { message, clearMessage } = useMessage();

    if (!message) return null;

    return (
        <div className={`bg-sky-600 text-white p-5 ${styles.popupEnter} rounded-xl shadow-xl flex gap-4`}>
            <p>{message}</p>
            <IoClose onClick={clearMessage} className="cursor-pointer text-xl" />
        </div>
    );
};

export default MessagePopUp;
