"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  slug: string;
}

export default function Card({ imageSrc, title, description, slug }: CardProps) {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/Blog/${slug}`);
  };

  return (
    <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="p-4">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={200}
          className="rounded-md"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={handleReadMore}
          className="mt-4 text-blue-500 hover:underline"
        >
          Read More
        </button>
      </div>
    </div>
  );
}
