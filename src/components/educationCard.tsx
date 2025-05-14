import React from 'react';

interface EducationCardProps {
    institution: string;
    degree: string;
    duration: string;
    description: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ institution, degree, duration, description }) => {
    return (
        <div className="education-card flex flex-col bg-[#43424268] justify-between gap-4 w-5/6 max-w-4xl my-6 py-4 mx-auto px-5 rounded-lg">
            <h3 className="text-xl font-bold mb-1">{degree}</h3>
            <p className="text-md font-semibold">{institution} - <span className="text-sm text-gray-500">{duration}</span></p>
            <p className="text-sm mt-2">{description}</p>
        </div>
    );
};

export default EducationCard;