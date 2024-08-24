"use client";
import Link from "next/link";
import Footer from "../components/footer";
export default function HomePage() {
  return (
    <div className="bg-custom">
      <main className="flex flex-col items-center justify-center min-h-screen text-white p-2 ">
        <div className="text-center bg-slate-400 bg-opacity-70 py-20 w-5/6 h-12/13 rounded-lg mb-20">
          <h1 className="text-6xl font-bold mt-10 mb-5">Hello World👋🏼!</h1>
           <Link href="https://www.linkedin.com/in/ezginurucan"><p className="text-4xl  text-gray-950">I &#39;m Ezginur</p></Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
