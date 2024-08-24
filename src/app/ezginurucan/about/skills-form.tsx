import React from "react";
import Image from "next/image";

const SkillsSection: React.FC = () => {
  return (
    <>
      <h2 className="mx-4 text-3xl italic font-bold mb-6">
        SKILLS
      </h2>
      <div className="grid grid-cols-4">
        <div className="flex justify-center items-center">
          <Image src="/assets/python-logo.png" alt="python" className="h-16" />
        </div>
        {/* Java */}
        <div className="flex justify-center items-center">
          <Image src="/assets/java-logo.png" alt="Java" className="h-16" />
        </div>
        {/* SQL Server */}
        <div className="flex justify-center items-center">
          <Image
            src="/assets/microsoft-sql-logo.png"
            alt="SQL Server"
            className="h-16"
          />
        </div>
        {/* React */}
        <div className="flex justify-center items-center">
          <Image src="/assets/react-logo.png" alt="React" className="h-16" />
        </div>
        {/* C */}
        <div className="flex justify-center items-center">
          <Image src="/assets/C-logo.png" alt="C" className="h-16" />
        </div>
        {/* MySQL */}
        <div className="flex justify-center items-center">
          <Image src="/assets/mysql-logo.png" alt="MySQL" className="h-16" />
        </div>
        {/* PostgreSQL */}
        <div className="flex justify-center items-center">
          <Image
            src="/assets/postgre-logo.png"
            alt="PostgreSQL"
            className="h-16"
          />
        </div>
        {/* Figma */}
        <div className="flex justify-center items-center">
          <Image src="/assets/figma-logo.png" alt="Figma" className="h-16" />
        </div>
        {/* JavaScript */}
        <div className="flex justify-center items-center">
          <Image src="/assets/js-logo.png" alt="JavaScript" className="h-16" />
        </div>
        {/* CSS */}
        <div className="flex justify-center items-center">
          <Image src="/assets/css-logo.png" alt="CSS" className="h-16" />
        </div>
        {/* HTML5 */}
        <div className="flex justify-center items-center">
          <Image src="/assets/html-logo.png" alt="HTML5" className="h-16" />
        </div>
        {/* Next.js */}
        <div className="flex justify-center items-center">
          <Image src="/assets/nextjs-logo.png" alt="Next.js" className="h-16" />
        </div>
      </div>
     
    </>
  );
};

export default SkillsSection;
