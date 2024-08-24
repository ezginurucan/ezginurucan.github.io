import React from "react";

export default function ExperienceSection() {
  return (
    <>
      <h2  className="mx-4 text-3xl italic font-bold mb-6 uppercase">
        experience
      </h2>
      <div className=" flex flex-col items-center justify-center p-2 m-2">
        <div className=" border-4 border-gray-800/100 rounded-xl p-2 mb-5 w-full">
          <h3 className="text-2xl italic font-semibold"> Turkcell-Business Analyst Trainee</h3>
          <p> February  2024 - May 2024 </p>
        </div>
        <div className=" border-4 border-gray-800/100 rounded-xl p-2 mb-5 w-full">
          <h3 className="text-2xl italic font-semibold">TBD Genç İstanbul (Turkish Informatics Association 
            Young Work Group) - Social Media Coordinator</h3>
          <p >Nov 2023- Present</p>
        </div>
        <div className=" border-4 border-gray-800/100 rounded-xl p-2 mb-5 w-full">
          <h3 className="text-2xl italic font-semibold">Popupsmart -Web Development Intern</h3>
          <p >June 2023-February 2024</p>
        </div>
        <div className=" border-4 border-gray-800/100 rounded-xl p-2 w-full">
          <h3 className="text-2xl italic font-semibold">Amcor Flexibles TR Istanbul - IT Intern</h3>
          <p >July 2022-September 2022</p>
        </div>
      </div>
    </>
  );
}
