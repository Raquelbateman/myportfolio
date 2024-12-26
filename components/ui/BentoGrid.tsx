"use client";

import { cn } from "libs/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { BackgroundLines } from "./background-lines";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "data/confetti.json";
import MagicButton from "./MagicButton";
import {IoCopyOutline} from "react-icons/io5";


export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('abryant@codestack.co')
    }

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background:
                    "linear-gradient(90deg, rgba(181,45,213,1) 0%, rgba(214,76,166,1) 36%, rgba(0,212,255,1) 100%)",
            }}
        >
            <div className={`${id === 6 ? "flex justify-center h-full" : ""}`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center")}
                        />
                    )}
                </div>
            </div>

            <div className={`absolute right-0 -bottom-5 ${id === 5 ? "w-full opacity-80" : ""}`}>
                {spareImg && (
                    <img
                        src={spareImg}
                        alt={spareImg}
                        className="object-cover object-center w-full h-full"
                    />
                )}
            </div>

            {id === 6 && (
                <BackgroundGradientAnimation>
                    <div className="absolute z-50 flex items-center justify-center text-white font-bold"></div>
                </BackgroundGradientAnimation>
            )}

            <div
                className={cn(
                    titleClassName,
                    "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex-col px-5 p-5 lg:p-10"
                )}
            >
                <div className="font-sans font-extralight text-neutral-200 text-sm md:text-xs lg:text-base z-10">
                    {description}
                </div>
                <div className="font-sans font-bold text-lg text-neutral-200 lg:text-3xl max-w-96 z-10">
                    {title}
                </div>
            </div>

            {id === 3 && (
                <BackgroundLines>
                    <div></div>
                </BackgroundLines>
            )}

{id === 3 && (
    <div className="flex flex-wrap justify-center items-center gap-4 p-6 w-full">
        <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
                {['JavaScript', 'HTML', 'CSS'].map((item) => (
                    <span
                        key={item}
                        className="py-2 px-4 bg-[#161a31] text-white rounded-full text-xs lg:text-sm font-medium hover:bg-opacity-80 transition-colors text-center"
                    >
                        {item}
                    </span>
                ))}
            </div>
            <div className="flex flex-col gap-4">
                {['PHP', 'Java', 'MySQL'].map((item) => (
                    <span
                        key={item}
                        className="py-2 px-4 bg-[#161a31] text-white rounded-full text-xs lg:text-sm font-medium hover:bg-opacity-80 transition-colors text-center"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    </div>
)}

            {id === 6 && (
                <div className="st-5 relative">
                    <div className="absolute -bottom-5 right-0">
                        <Lottie
                            options={{
                                loop: copied,
                                autoplay: copied,
                                animationData,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice',
                                },
                            }}
                        />
                    </div>
                    <MagicButton
                    title={copied ? 'Email copied' : 'Copy my Email'}
                    icon={ <IoCopyOutline/>}
                    position="left"
                    otherClasses="!bg-[#161a31"
                    handleClick={handleCopy}
                    />
                </div>
            )}
        </div>
    );
};