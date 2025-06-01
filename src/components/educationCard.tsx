import React from 'react';
import Image from 'next/image';

interface EducationCardProps {
    institution: string;
    degree: string;
    duration: string;
    description: string;
    logo: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ institution, degree, duration, description, logo }) => {
    return (
        <div className="education-card flex flex-col bg-[#43424268] justify-between gap-4 w-5/6 max-w-4xl my-6 py-4 mx-auto px-5 rounded-lg">
            <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative h-64 w-full sm:h-80 sm:w-64 lg:h-54 lg:w-1/3 flex-shrink-0 lg:ml-auto">
                    <Image
                        src={logo}
                        alt={institution}
                        fill
                        className="absolute top-0 right-0 w-full h-full rounded shadow-2xl object-cover lg:scale-[1.1] transition-transform"
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-1">{degree}</h3>
                    <p className="text-md font-semibold">
                        {institution} - <span className="text-sm text-gray-500">{duration}</span>
                    </p>
                    <p className="text-sm mt-2 text-gray-500">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;