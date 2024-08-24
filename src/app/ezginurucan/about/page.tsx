'use client'
import { useState } from "react";
import EducationSection from "./edu-form";
import ExperienceSection from "./experience-form";
import SkillsSection from "./skills-form";
import Footer from "@/app/components/footer";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    if (currentSection < 2) {
      setCurrentSection(currentSection + 1);
    }
  };

  const previousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className='bg-custom'>
      <main className="flex flex-col items-center justify-center min-h-screen text-white p-4">
        <div className="bg-slate-400 bg-opacity-70 py-20 w-5/6 h-12/13 sm:h-5/6 rounded-lg mb-10">
        
          {currentSection === 0 && <SkillsSection />}
          {currentSection === 1 && <EducationSection />}
          {currentSection === 2 && <ExperienceSection />}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={previousSection}
              className={`px-4 py-2 bg-orange-500 rounded-full text-xl font-bold${
                currentSection === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentSection === 0}
            >
              &#8592; {/* Sol ok işareti */}
            </button>
            <button
              onClick={nextSection}
              className={`px-4 py-2 bg-orange-500 rounded-full text-xl font-bold ${
                currentSection === 2 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentSection === 2}
            >
              &#8594; {/* Sağ ok işareti */}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
