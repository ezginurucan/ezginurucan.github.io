import React from "react";
import ProjectCard from "../../components/project-cards";
import TopPost from "@/app/components/top-post";

const ProjectForm = () => {
  return (
    <div className="max-w-7xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="md:col-span-2 lg:col-span-3">
          <TopPost
            title="Video2Manga"
            description="Manga, a genre of Japanese-origin comic books, holds significant cultural importance in Japan and attracts a global audience. The Video2Manga project introduces an innovative system that semi-automatically transforms real video content into manga style. Focusing on a scene from the 2004 film 'Harry Potter and the Prisoner of Azkaban,' this project converts key frames into manga-style drawings resembling 'Jujutsu Kaisen' using Generative Adversarial Networks (GANs). The process involves dialogue detection through subtitle processing, character recognition for tracking, and various GAN architectures for style transfer, creating a unique fusion of video and manga art."
            imageUrl="/assets/projects/video2manga.png"
            altText="github"
            gitIconUrl="/assets/github-logo.png"
            gitLink="https://github.com/ezginurucan/video2manga"
          />
        </div>
        <ProjectCard
          title="CRM Project"
          description="A project analysis was conducted for a B2C customer CRM system for a telecommunications company. Project requirements were detailed in Jira, and UI designs were created using Figma. The project also included database, use case, and activity diagrams to model the system's functional and operational aspects comprehensively."
          altText="figma"
          imageUrl="/assets/projects/crm-project.jpg"
          gitIconUrl="/assets/figma-indigo.png"
        />
        <ProjectCard
          title="Steganography"
          description="Steganography involves hiding information within another message or object to avoid detection and can conceal various types of digital content, including text, images, video, and audio. This project involves a web application developed with Next.js technology that performs steganographic encryption to securely embed and extract hidden data."
          imageUrl="/assets/projects/steganography.jpg"
          altText="github"
          gitIconUrl="/assets/github-logo.png"
          gitLink="https://github.com/berrasari/steganography"
        />
        <ProjectCard
          title="Make Automations"
          description="
            Make.com, formerly known as Integromat, helps users create complex workflows and automation processes.  
            Users can automate workflows and optimize data management by connecting email, databases, social media, and many other services. In this context, automation processes were managed with integrations of tools such as Google Sheet, Open AI, Abyssale, and Twitter."
          imageUrl="/assets/projects/make-scenario.png"
          altText="make"
          gitIconUrl="/assets/make-logo.png"
          gitLink="https://make.com"
        />
        <ProjectCard
          title="Turkish Hate Speech"
          description="This project aimed to detect Turkish hate speech by analyzing 10,000 tweet samples using Long Short-Term Memory (LSTM) and Naive Bayes (NB) algorithms. LSTM provided deep learning for language modeling and sequential data, while NB offered a straightforward probabilistic classification method. Both algorithms were used effectively to classify and analyze hate speech."
          altText="github"
          imageUrl="/assets/projects/hate-speech.webp"
          gitIconUrl="/assets/github-logo.png"
        />
        <ProjectCard
          title="Movie World"
          description="The  website, built using ASP.NET, is a  platform for film recommendations. The site allows users to leave comments and ratings on movies, providing valuable feedback for others. Additionally, various APIs are utilized to integrate movie data and user interactions, ensuring dynamic and up-to-date content."
          altText="github"
          gitIconUrl="/assets/github-logo.png"
          imageUrl="/assets/projects/movie-website.jpeg"
          gitLink="https://github.com/cemrecodes/MarmaraMovieWorld"
        />
        <ProjectCard
          title="techAll"
          description="
          The techAll web project is a modern application built with Next.js and Node.js that offers the latest technology news. It leverages a RESTful API to pull data from a MySQL database, ensuring up-to-date and user-friendly content delivery. The system's architecture features a Next.js front-end for smooth client-side rendering, a Node.js server handling the API, and a MySQL database for managing news articles.
          "
          altText="github"
          imageUrl="/assets/projects/tech-blog.jpeg"
          gitIconUrl="/assets/github-logo.png"
          gitLink="https://github.com/ezginurucan/techall"
        />
        <ProjectCard
          title="Crowd Counting"
          description="In our Artificial Neural Networks course project, we developed a system to find available seating in public spaces like libraries and cafes. We used Jupyter Notebook for data analysis, Next.js for a dynamic front-end, and FastAPI for a responsive back-end API. This solution efficiently helps users locate open seats in real-time."
          imageUrl="/assets/projects/crowd-detection.jpg"
          altText="github"
          gitIconUrl="/assets/github-logo.png"
          gitLink="https://github.com/ezginurucan/crowd-counting"
        />
        <ProjectCard
          title="Shopping Mall Automation"
          description="This a shopping mall automation created with C programming language. Many processes such as registration and bill payment carried out on the customer, store, employee and management side."
          altText="github"
          gitIconUrl="/assets/github-logo.png"
           imageUrl="/assets/projects/a-man-monitoring-the automation-process.jpeg"
          gitLink="https://github.com/ezginurucan/AVM-Otomasyon-Projesi"
        />
      </div>
    </div>
  );
};

export default ProjectForm;
