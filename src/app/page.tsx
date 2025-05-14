"use client";

import Image from 'next/image';
import ProjectCard from '@/components/projectCard';
import EducationCard from '@/components/educationCard';

export default function Home() {
  return (
    <>
      <div id="Home-section" className="h-screen flex items-center justify-center mx-8 px-3">
        <div className="flex flex-col items-start">
          <br/>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold">
            HI! I'M <span className="text-[#B4A784]">RUBEN,</span>
          </h1>
          <br />
          <h1 className="text-3xl sm:text-4xl lg:text-5 xl font-bold">A COMPUTER SCIENCE STUDENT</h1>
          <br />
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/ruben-yanez-hernandez-a24a23305/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 origin-center group"
            >
              <Image src="/assets/Linkedin.svg" alt="Linkedin" width={48} height={48} />
              <div className="h-0.5 bg-transparent group-hover:bg-[#B4A784] transition-all duration-300 mt-1"></div>
            </a>
            <a
              href="https://github.com/rubenyh"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 origin-center group"
            >
              <Image src="/assets/Github.svg" alt="Github" width={48} height={48} />
              <div className="h-0.5 bg-transparent group-hover:bg-[#B4A784] transition-all duration-300 mt-1"></div>
            </a>
            <a
              href="mailto:rubenyanezhernandez@gmail.com"
              className="transition-all duration-300 hover:scale-110 origin-center group"
            >
              <Image src="/assets/Mail.svg" alt="Mail" width={48} height={48} />
              <div className="h-0.5 bg-transparent group-hover:bg-[#B4A784] transition-all duration-300 mt-1"></div>
            </a>
          </div>
          <div className="mt-6">
          <a
            href="/assets/resume.pdf"
            download="Ruben_Yanez_Resume.pdf"
            className="px-4 py-3 rounded-[30px] bg-[#B4A784] text-[#322F35] font-bold transition-all duration-300 hover:opacity-90 hover:scale-105 cursor-pointer flex items-center space-x-2"
          >
            <Image src="/assets/download.svg" alt="Resume Icon" width={33} height={33} />
            <span>Resume</span>
          </a>
          </div>
        </div>

        <div className="ml-8 relative group hidden sm:block">
          <div
          className="absolute w-full h-full bg-[#B4A784] top-0 left-0 z-0 transform translate-x-[10px] translate-y-[10px] aspect-square transition-all duration-300 group-hover:outline group-hover:outline-[#B4A784]"
          ></div>
          <Image
          src="/imgs/profile-picture.jpg"
          alt="Ruben Yanez"
          width={246}
          height={246}
          className="transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 w-full h-auto"
          style={{ outline: '1px solid #B4A784', position: 'relative', zIndex: 1 }}
          />
        </div>

        <div
          className="absolute bottom-8 animate-bounce cursor-pointer"
          onClick={() => {
          const nextSection = document.querySelector('#Projects-section');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
          }}
        >
          <Image
          src="/assets/Scroll.svg"
          alt="Scroll Down"
          width={115}
          height={56}
          className="mx-auto"
          />
        </div>
      </div>

      <div id="Projects-section">
      <h1 className="text-4xl sm:text-5xl lg:text-5xl text-center mt-8">My Projects</h1>

      <ProjectCard
        title={'Graphing Users Relations in Social Media'}
        description={
        'bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blala bla bla blabla bla bla blala bla bla blabla bla bla blala bla bla blabla bla bla bla'
        }
        imageUrl={'/imgs/profile-picture.jpg'}
        projectLink={''}
      ></ProjectCard>
      <ProjectCard
        title={'Graphing Users Relations in Social Media'}
        description={
        'bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla blala bla bla blabla bla bla blala bla bla blabla bla bla blala bla bla blabla bla bla bla'
        }
        imageUrl={'/imgs/profile-picture.jpg'}
        projectLink={''}
      ></ProjectCard>
      </div>

      <div id="Experience-section">
      <br />
      <h1 className="text-4xl sm:text-5xl lg:text-5xl text-center mt-8">Experience</h1>
      </div>

      <div id="Education-section">
      <br />
      <h1 className="text-4xl sm:text-5xl lg:text-5xl text-center mt-8">Education</h1>
      <EducationCard
        institution="University of Example"
        degree="Bachelor of Science in Computer Science"
        duration="2020 - 2024"
        description="Focused on software development, algorithms, and data structures. Participated in various hackathons and coding competitions."
      />
      <EducationCard
        institution="Example High School"
        degree="High School Diploma"
        duration="2016 - 2020"
        description="Graduated with honors. Member of the computer science club and robotics team."
      />
      </div>
    </>
    );
}
