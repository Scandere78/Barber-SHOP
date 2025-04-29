"use client";

import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface SelectProps {
    selection: string;
    data: {
        name: string;
        _id: string;
    }[];
    onSelect: (selected: string, value: string) => void;
    classNameP?: string;
    classNameDiv?: string;
    classNameSection?: string;
    reset: number;
}

export const Select: FC<SelectProps> = ({ selection, data, onSelect, classNameP, classNameDiv, classNameSection, reset }) => {
    const [selected, setSelected] = useState<string>("");
    const [toggleOpen, setToggleOpen] = useState<boolean>(false);


    const handleSelect = (name: string, value: string) => {
        setSelected(name);
        onSelect(name, value);
        setToggleOpen(!toggleOpen)
    };

    useEffect(() => {
        if (reset) {
            setToggleOpen(false)
            setSelected("")
        }
    }, [reset])

    return (
        <section className={clsx(`relative text-black`, classNameSection)}>
            <IoIosArrowForward className={`text-xl absolute right-3 top-[13px] ${toggleOpen ? "rotate-90" : "rotate-0"} duration-300`} />
            <p onClick={() => { setToggleOpen(!toggleOpen) }} className={clsx(`p-3 rounded-xl cursor-pointer bg-white text-black shadow-xl w-full min-w-[200px]`, classNameP)}>{selected || selection}</p>
            <div className={clsx(`rounded-xl p-3 overflow-hidden flex flex-col z-30 shadow-xl w-full mt-3 bg-white text-black absolute duration-200 ${toggleOpen ? "top-full pointer-events-auto" : "top-0 opacity-0 pointer-events-none"}`, classNameDiv)}>
                {data && data.length > 0 ? (
                    data.map((d, index) => (
                        <div key={index} className={`${index + 1 < data.length && "border-b border-[#00000046]"} hover:bg-black hover:text-white duration-300`}>
                            <p className="p-3 cursor-pointer" key={index} onClick={() => handleSelect(d.name, d._id)}>
                                {d.name}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>Aucune donnée trouvée</p>
                )}
            </div>
        </section>
    );
};
