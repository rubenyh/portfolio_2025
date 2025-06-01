"use client";

import Image from 'next/image';
import ProjectCard from '@/components/projectCard';
import EducationCard from '@/components/educationCard';
import Skill from '@/components/skill';

export default function Home() {
  return (
    <>
      <section id="Home-section" className="h-screen flex items-center justify-center mx-8 px-3">
        <div className="flex flex-col items-start">
          <br/>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold">
            HI! I'M <span className="text-[#B4A784]">RUBEN,</span>
          </h1>
          <br />
          <h1 className="text-3xl sm:text-4xl lg:text-5 xl font-bold">COMPUTER SCIENCE STUDENT</h1>
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
      </section>

      <section id="Skills-section">
        <br />
        <h1 className="text-4xl sm:text-5xl lg:text-5xl text-center mt-8">Tech Skills</h1>
        <div className="flex flex-wrap justify-center gap-6 mt-8 w-5/6 max-w-4xl mx-auto">
          <Skill name="TypeScript" icon="/assets/skills/typescript.svg" />
          <Skill name="React" icon="/assets/skills/react.svg" />
          <Skill name="Next.js" icon="/assets/skills/nextjs.svg" />
          <Skill name="Tailwind CSS" icon="/assets/skills/tailwind.svg" />
          <Skill name="Python" icon="/assets/skills/python.svg" />
          <Skill name="C++" icon="/assets/skills/cpp.svg" />
          <Skill name="Git" icon="/assets/skills/git.svg" />
          <Skill name="Tensorflow" icon="/assets/skills/tensorflow.svg" />
          <Skill name="ROS2" icon="/assets/skills/Ros_logo.svg" />
          <Skill name="Java" icon="/assets/skills/java.svg" />
          <Skill name="OpenCV" icon="/assets/skills/opencv.svg" />
          <Skill name="JavaSript" icon="/assets/skills/js.svg" />
          <Skill name="Pytorch" icon="/assets/skills/pytorch.svg" />
        </div>
      </section>
      <br />


      <section id="Projects-section">
      <h1 className="text-4xl sm:text-5xl lg:text-5xl text-center mt-8">My Projects</h1>

      <ProjectCard
        title={'Interactive Social Media Network Visualizer'}
        description={
        'A web application that visualizes user relationships on social media platforms using interactive graph structures. Built with React and D3.js, it allows users to explore connections, identify influencers, and analyze network patterns in real time.'
        }
        imageUrl={'/imgs/network-graphs.jpg'}
        projectLink={'https://github.com/rubenyh/network-graphs'}
        externalLink={'https://network-graphs-three.vercel.app/'}
      />
      <ProjectCard
        title={'Real-Time Hand Gesture Recognition with Mediapipe'}
        description={
        'Implemented real-time hand detection using Google’s Mediapipe library. The project processes webcam input to identify and track hand landmarks, enabling gesture recognition for interactive applications and user interfaces.'
        }
        imageUrl={'/imgs/profile-picture.jpg'}
        projectLink={''}
      />
      </section>

      {/* <div id="Experience-section">
      <br />
      <h1 className="text-4xl sm:text-5xl lg:text-5xl text-center mt-8">Experience</h1>
      </div>
 */}

      
      <section id="Education-section">
      <br />
      <h1 className="text-4xl sm:text-5xl lg:text-5xl text-center mt-8">Education</h1>
      <EducationCard
        institution="CETYS University"
        degree="Bachelor of Engineering in Computer Science"
        duration="2024 - 2028"
        description="Focused on continuous improvement in software development, algorithms, and data structures. Actively participated in hackathons, coding competitions, and contributed to the MATEROV Competition 2025 as a member of the software team."
      />
      </section>
    </>
    );
}
