import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  imageClassName = '',
  children,
}) => {
  return (
    <div
      className={`relative rounded-2xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl ${className}`}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300} // Adjust height according to design needs
          className={`absolute w-full h-full object-cover ${imageClassName}`}
        />
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 opacity-90 px-4 py-16">
        <h2 className={`text-xl text-gray-900 dark:text-white ${titleClassName}`}>
          {title}
        </h2>
        <p className={`text-gray-600 dark:text-gray-300 mt-2 ${descriptionClassName}`}>
          {description}
        </p>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};
