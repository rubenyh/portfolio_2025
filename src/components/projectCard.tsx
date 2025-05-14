import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectLink }) => {
    return (
    <>
    <div className="flex flex-col lg:flex-row-reverse lg:items-center bg-[#43424268] lg:justify-between gap-6 w-5/6 max-w-4xl my-9 py-4 mx-auto px-5 rounded-lg">
        <div className="relative h-64 sm:h-80 lg:h-full lg:w-1/3 lg:order-none order-first block">
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="absolute top-0 right-0 w-full h-full rounded-t-lg shadow-2xl object-cover lg:scale-[1.1] transition-transform"
            />
        </div>
        <div className="flex flex-col text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <a
                href="/assets/Github.svg"
                className="px-3 py-2 rounded-[30px] bg-[#B4A784] text-[#322F35] font-bold transition-all duration-300 hover:opacity-90 hover:scale-105 cursor-pointer flex items-center gap-2 w-fit mx-auto lg:mx-0"
            >
                <Image src="/assets/GithubGrey.svg" alt="Github Icon" width={24} height={24} />
                Code
            </a>
        </div>
    </div>
    </>

    );
};

export default ProjectCard;