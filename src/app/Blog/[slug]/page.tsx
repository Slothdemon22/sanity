import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogDetailsProps {
  params: { slug: string };
}

const query = `*[_type == "Blog" && slug.current == $slug][0]{
  title,
  description,
  summary,
  content,
  "image": image.asset->url,
  author-> { name }
}`;

export default async function BlogDetails({ params }: BlogDetailsProps) {
  const { slug } = params;

  // Fetch the blog data based on the slug
  const blog = await client.fetch(query, { slug });

  // Handle the case where the blog doesn't exist
  if (!blog) {
    return notFound();
  }

  const { title, description, summary, content, image, author } = blog;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <Image
        src={image}
        alt={title}
        width={800}
        height={450}
        className="rounded-lg mb-4"
      />
      <p className="text-lg mb-4">{description}</p>
      <p className="text-sm text-gray-600 mb-4">{summary}</p>
      <div>
        {content?.map((block: any, index: number) => (
          <div key={index}>
            {/* Render content blocks */}
            <p>{block.children?.[0]?.text || ""}</p>
          </div>
        ))}
      </div>
      {author && <p className="mt-4 text-sm text-gray-500">Author: {author.name}</p>}
    </div>
  );
}

// To generate static paths (optional for SSG or ISR)
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "Blog"].slug.current`);
  return slugs.map((slug: string) => ({ slug }));
}
