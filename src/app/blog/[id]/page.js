import Link from "next/link";
import { SlArrowLeftCircle } from "react-icons/sl";
export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogDetails({ params }) {
  const { id } = params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  return (
    <div
      className="flex items-center justify-center p-2"
      style={{ minHeight: "calc(100vh - 68px)" }}
    >
      <div className="p-6 max-w-[600px] mx-auto rounded-lg shadow-lg">
        <p className="text-sm text-gray-500 mb-2">Blog id: {post.id}</p>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
        <Link
          className="flex justify-end items-center gap-2 mt-4"
          href="/"
          passHref
        >
          Back to Blog List
          <SlArrowLeftCircle className="text-2xl font-bold" />
        </Link>
      </div>
    </div>
  );
}
