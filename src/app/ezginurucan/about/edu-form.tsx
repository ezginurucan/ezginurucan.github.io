import React from "react";

export default function EducationSection() {
  return (
    <>
      <h2 id="education" className="mx-4 text-3xl italic font-bold mb-6 uppercase">
        education
      </h2>
      <div className=" flex flex-col items-center justify-center p-2 m-2">
        <div className=" border-4 border-gray-800/100 rounded-xl p-2 mb-5 w-full">
          <h3 className="text-2xl italic font-semibold">Marmara University Faculty of Technology-Computer Engineering</h3>
          <p>2020-2024 </p>
          <p className="text-lg ">GPA: 3,0/4</p>
        </div>
        <div className=" border-4 border-gray-800/100 rounded-xl p-2 w-full">
          <h3 className="text-2xl italic font-semibold">Köksal Ersayın Anatolian High School</h3>
          <p >2015-2019</p>
          <p className="text-lg ">Diploma Grade: 93,19/100</p>
        </div>
      </div>
    </>
  );
}
