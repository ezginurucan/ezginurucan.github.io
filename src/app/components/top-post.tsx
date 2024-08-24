import React from "react";
import Image from "next/image";
interface TopPostProps {
  title: string;
  description: string;
  imageUrl?: string;
  gitIconUrl: string;
  altText: string;
  gitLink?: string;
}

const TopPost: React.FC<TopPostProps> = ({
  title,
  description,
  imageUrl,
  gitIconUrl,
  altText,
  gitLink,
}) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl flex flex-col ">
      <div className="flex justify-between items-center mb-2 border-b-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        {gitLink ? (
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={gitIconUrl}
              alt={altText}
              className="h-6 w-6 sm:h-20 sm:w-20"
            />
          </a>
        ) : (
          <Image
            src={gitIconUrl}
            alt={altText}
            className="h-6 w-6 sm:h-20 sm:w-20"
          />
        )}
      </div>
      <p className="text-md flex-grow mb-2">{description}</p>
      {imageUrl && (
        <Image src={imageUrl} alt={title} className="w-full max-h-80 object-contain " />
      )}
    </div>
  );
};

export default TopPost;
