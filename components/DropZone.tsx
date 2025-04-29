import clsx from "clsx";
import React, { FC, useState, DragEvent, ChangeEvent } from "react";
import { ImageComponent } from "./Core/ImageComponent";
import { FaCloudUploadAlt } from "react-icons/fa";

export interface FullFile{
    size: number;
    type: string;
    name: string;
    lastModified: number;
    buffer: Buffer;
}

interface DropZoneProps {
    className?: string;
    onFileDrop: (file: FullFile) => void;
    titre?: string;
    name?: string;
}

export const DropZone: FC<DropZoneProps> = ({ className, onFileDrop, titre, name }) => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [preview, setPreview] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [fileSize, setFileSize] = useState<number | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [isUploaded, setIsUploaded] = useState<boolean>(false);

    const handleDragEnter = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            const file = files[0];
            handleFile(file); // Appel de la fonction callback

            setFileName(file.name);
            setFileSize(file.size);
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }

    };

    const handleFile = (file: File) => {
        setFileName(file.name);
        setFileSize(file.size);
        setIsUploaded(false);
        setUploadProgress(0);
    
        const reader = new FileReader();
    
        reader.onloadstart = () => {
            setIsUploaded(false);
            setUploadProgress(0);
        };
    
        reader.onprogress = (e) => {
            if (e.lengthComputable) {
                const percentLoaded = Math.round((e.loaded / e.total) * 100);
                setUploadProgress(percentLoaded);
            }
        };
    
        reader.onloadend = (e) => {
            const result = e.target?.result as ArrayBuffer;
            setPreview(URL.createObjectURL(file)); // Utilise createObjectURL pour un aperçu rapide
    
            // Convertir en Buffer
            const buffer = Buffer.from(result);
    
            // Créer l'objet FullFile
            const fullFile: FullFile = {
                size: file.size,
                type: file.type,
                name: file.name,
                lastModified: file.lastModified,
                buffer: buffer,
            };
    
            setUploadProgress(100);
            setIsUploaded(true);
    
            // Appel de onFileDrop avec l'objet FullFile
            onFileDrop(fullFile);
        };
    
        reader.readAsArrayBuffer(file); // Lit les données en tant qu'ArrayBuffer
    };
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            handleFile(file);
        }
    };

    return (
        <label
            htmlFor={name ? name : "imageDropZone"}
            className={clsx(
                "w-full relative z-10 block cursor-pointer text-gray-200 duration-300 border-2 border-dashed border-gray-500 p-4 rounded-xl",
                isDragging ? "bg-[#244f8027]" : "",
                className
            )}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <FaCloudUploadAlt className="mx-auto text-4xl text-gray-400" />
            <h3 className="text-center text-lg font-montserrat my-5">{titre ? titre : "Cliquez ou glissez-déposez des images"}</h3>
            <p className="text-center my-3 text-[#ffffffa9] font-montserrat">PNG, JPG, WEBP (max 10MB)</p>
            <input
                type="file"
                name={name ? name : "imageDropZone"}
                id={name ? name : "imageDropZone"}
                className="hidden"
                onChange={handleInputChange}
            />
            {preview && (
                <div className="border gap-4 flex items-center justify-between flex-wrap border-dashed border-[#006eff] rounded-xl p-4 m-2 mt-6">
                    <ImageComponent size={50} img={preview} alt="Preview" className="w-32 h-12 object-cover rounded-md mb-2" />
                    <p className="text-[#ffffff] font-montserrat grow">{fileName}</p>
                    <p className="text-[#ffffff] font-montserrat grow">{(fileSize! / 1024).toFixed(2)} KB</p>
                    <div className="basis-[90px] grow bg-gray-200 rounded-full h-2.5 ">
                        <div
                            className={clsx(
                                "h-2.5 rounded-full",
                                isUploaded ? "bg-green-500" : "bg-blue-500"
                            )}
                            style={{ width: `${uploadProgress}%` }}
                        />
                    </div>
                </div>
            )}
        </label>
    );
};
