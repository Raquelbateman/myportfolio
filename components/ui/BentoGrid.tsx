'use client';
import { cn } from "libs/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { BackgroundLines } from "./background-lines";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from 'data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import link from "next/link";



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
                // "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
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

    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
    body,
    link,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;

    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
    body?: string | React.ReactNode;
    link?: string;
    linkText?:string;
}) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('abryant@codestack.co')
        setCopied(true)
    }

    const handleResume = () => {
        const resumeUrl = '/myResume.pdf'; 
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'myResume.pdf'; // The name of the file to download
        link.click();
    };


         return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(69,22,40,1) 0%, rgba(38,86,105,1) 77%, rgba(69,132,184,1) 97%, rgba(69,71,104,1) 100%)"
      }}
    >
      {link ? <a href="{link}" target="_blank" rel="noopener noreferrer">

        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition dura†ion-200 relative md:h-full min-h-40 flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div
            className={cn(
              "font-sans text-sm md:text-xs lg:text-lg z-10 text-black font-medium"
            )}
          >
            {description}
          </div>
          <div
            className={cn(
              "font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 text-black"
            )}
          >
            {title}
          </div>
        </div>

      </a>
        :
        <div className={`${id === 5 && "flex justify-center h-full"}`}>
          <div className="w-full h-full absolute">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center")}
              />
            )}
          </div>

          <div
            className={`absolute right-0 -bottom-5`}
          >
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className={"object-cover object-center w-full h-full"}
              />
            )}
          </div>

          {id === 5 && (
            //render animation
            <BackgroundGradientAnimation>
              <div className="absolute z-50 flex items-center justify-center text-white font-bold"></div>
            </BackgroundGradientAnimation>
          )}

          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition dura†ion-200 relative md:h-full min-h-40 flex-col px-5 p-5 lg:p-10"
            )}
          >
            {id === 2 ?
              <>
                <div className="font-sans font-bold text-lg text-neutral-200 lg:text-3xl max-w-96 z-10">
                  {title}
                </div>
                <div className="font-sans font-extralight text-neutral-200 text-sm md:text-xs lg:text-base z-10">
                  {description}
                </div>
              </>
              :
              <>
                <div className="font-sans font-extralight text-neutral-200 text-sm md:text-xs lg:text-base z-10">
                  {description}
                </div>
                <div className="font-sans font-bold text-lg text-neutral-200 lg:text-3xl max-w-96 z-10">
                  {title}
                </div>
              </>
            }

            {id === 2 && (
          <div></div>
            )}
            {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit relative -right-3 lg:right-2 text-gray-300">
                <div className="flex flex-col relative gap-3 lg:gap-8">
                  {["React.js", "Next.js", "Typescript"].map((item) => (
                    <span
                      key={item}
                      className="py-3 lg:py-4 lg:px-5 px-3 mt-3 text-sx lg:text-base opacity-50 lg:opacity-100 rounded-xl text-center bg-blue-950 "
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col relative gap-3 lg:gap-8">
                  {["HTML", "CSS", "Javascript"].map((item) => (
                    <span
                      key={item}
                      className="py-3 lg:py-4 lg:px-5 px-3 mt-3 text-sx lg:text-base opacity-50 lg:opacity-100 rounded-xl text-center bg-blue-950 "
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col relative gap-3 lg:gap-8">
                  {["C#", "Tailwind", "MySQL"].map((item) => (
                    <span
                      key={item}
                      className="py-3 lg:py-4 lg:px-5 px-3 mt-3 text-sx lg:text-base opacity-50 lg:opacity-100 rounded-xl text-center bg-blue-950 "
                    >
                      {item}
                    </span>
                  ))}

                </div>
              </div>
            )}

            {id === 4 && (
         <div id="#contact" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5">
  <div className="sm:col-span-2 lg:col-span-6 flex justify-center mb-5 lg:mb-0 max-w-3xl">
              <h3>Hi, I'm a fullstack developer with a passion for creating beautiful, user-friendly websites. I find joy in designing interfaces that make technology more accessible and intuitive for everyone. To me, coding isn't just work – it's a relaxing escape where I can turn ideas into reality.
                I believe great design paired with solid functionality creates memorable digital experiences. I look forward to helping bring your vision to life through clean code and thoughtful design solutions."</h3>
                  
                </div>
                <div className="sm:col-span-2 lg:col-span-3 grid grid-cols-2 gap-4 justify-items-center">
               
        
                </div>
                </div>
             
            )}

            {id === 5 && (
              <div className=" relative flex flex-col">
                <div className="absolute -bottom-5 right-0">
                 
                </div>
                <MagicButton
                                title={copied ? 'Email copied' : 'Copy my Email'}
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses="z-10"
                                handleClick={handleCopy}

                            />
                            <MagicButton
                                title={"My Resume"}
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses="z-10"
                                handleClick={handleResume}

                            />
              </div>
            )}
          </div>
        </div>}

    </div>
  );
};