import React from "react";
import ProjectForm from "./form";
import Footer from "@/app/components/footer";
export default function ProjectPage() {
  return (
    <div className="bg-projects">
      <main className="flex flex-col items-center justify-center min-h-screen text-white p-4 ">
        <div className="bg-slate-400 bg-opacity-50 py-20 w-5/6  h-12/13 sm:h-5/6  rounded-lg mb-10 p-2 ">
        <h2 className="mx-4 text-3xl sm:text-7xl font-bold mb-6 text-center uppercase text-white-900">
        projects
      </h2>
          <ProjectForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
