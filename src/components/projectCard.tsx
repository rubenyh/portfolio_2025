import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectLink: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectLink: string;
    externalLink?: string; // Optional link
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectLink, externalLink }) => {
    return (
        <div className="flex flex-col lg:flex-row-reverse lg:items-center bg-[#43424268] lg:justify-between gap-6 w-5/6 max-w-4xl my-9 py-4 mx-auto px-5 rounded-lg">
            <div className="relative h-64 sm:h-80 lg:h-64 lg:w-1/3 flex-shrink-0 lg:ml-auto">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="absolute top-0 right-0 w-full h-full rounded shadow-2xl object-cover lg:scale-[1.1] transition-transform"
                />
            </div>
            <div className="flex flex-col text-center lg:text-left">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-500 mb-4">{description}</p>
                <div className="flex gap-3 justify-center lg:justify-start">
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-[30px] bg-[#B4A784] text-[#322F35] font-bold transition-all duration-300 hover:opacity-90 hover:scale-105 cursor-pointer flex items-center gap-2 w-fit"
                    >
                        <Image src="/assets/GithubGrey.svg" alt="Github Icon" width={24} height={24} />
                        Code
                    </a>
                    {externalLink && (
                        <a
                            href={externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 rounded-[30px] bg-[#B4A784] text-[#322F35] font-bold transition-all duration-300 hover:opacity-90 hover:scale-105 cursor-pointer flex items-center gap-2 w-fit"
                        >
                            <Image src="/assets/external-link.svg" alt="External Link Icon" width={24} height={24} />
                            Visit
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;