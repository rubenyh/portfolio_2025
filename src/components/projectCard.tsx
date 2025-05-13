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
<div className="flex flex-col lg:flex-row-reverse lg:items-center bg-[#43424268] lg:justify-between gap-6 max-w-4xl my-9 py-4 mx-auto px-5 rounded-lg">
    <div className="w-full sm:w-2/9 lg:w-1/3 order-first lg:order-none">
        <Image
            src={imageUrl}
            alt={title}
            layout="responsive"
            width={500}
            height={300}
            className="rounded-lg object-cover"
        />
    </div>
    <div className="flex flex-col text-center lg:text-left">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
            href="/assets/Github.svg"
            className="px-4 py-3 rounded-[30px] bg-[#B4A784] text-[#322F35] font-bold transition-all duration-300 hover:opacity-90 hover:scale-105 cursor-pointer flex items-center space-x-2"
        >
            <Image src="/assets/Github.svg" alt="Resume Icon" width={33} height={33} />
            Github
        </a>
    </div>
</div>
</>

    );
};

export default ProjectCard;