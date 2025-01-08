"use client";

import { useEffect, useState } from "react";
import Card from "./Components/Card";
import { client } from "../sanity/lib/client";

interface BlogProps {
  image: string;
  title: string;
  description: string;
  slug: string;
}

const query = `*[_type == "Blog"]{
  title,
  description,
  "image": image.asset->url,
  "slug": slug.current
}`;

export default function Home() {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);

  useEffect(() => {
    client.fetch(query).then((data) => {
      setBlogs(data);
      console.log("data", data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-8 p-4">
      {blogs.map((blog) => (
        <div key={blog.slug} className="w-full max-w-md">
          <Card
            imageSrc={blog.image || "https://via.placeholder.com/300"}
            title={blog.title}
            description={blog.description}
            slug={blog.slug}
          />
        </div>
      ))}
    </div>
  );
}
