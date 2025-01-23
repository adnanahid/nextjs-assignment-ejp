import Link from "next/link";

export default async function HomePage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
// blog-viewer/
// ├── public/
// ├── src/
// │   ├── app/
// │   │   ├── page.js
// │   │   ├── blog/
// │   │   │   ├── [id]/
// │   │   │   │   ├── page.js
// │   │   ├── profile/
// │   │   │   ├── page.js
// │   │   ├── layout.js
// │   │   ├── globals.css
// │   ├── components/
// │   │   ├── Header.js
// │   │   ├── BlogList.js
// │   │   ├── BlogDetails.js
// │   ├── utils/
// │   │   ├── auth.js
// │   ├── styles/
// │   │   ├── globals.css
// │   │   ├── Header.module.css
// ├── package.json
// ├── README.md
