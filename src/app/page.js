import axios from "axios";
import Link from "next/link";

export default async function HomePage() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = response.data;
  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#4d4d4d]">
          Blog Post
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white"
            >
              <Link
                href={`/blog/${post.id}`}
                className="text-lg font-semibold text-[#4d4d4d] hover:underline"
              >
                <p className="text-sm">Blog id: {post.id}</p>
                <h1>{post.title.slice(0, 20)}...</h1>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
// blog-viewer/
// ├── public/
// ├── src/
// │   ├── app/
// │   │   ├── api
//         |    ├──auth
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
