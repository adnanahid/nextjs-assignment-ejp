export async function generateStaticParams() {
  // Fetch all posts to generate static paths
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return posts.map((post) => ({
    id: post.id.toString(), // Ensure IDs are strings for routing
  }));
}

export default async function BlogDetails({ params }) {
  const { id } = params;

  // Fetch the blog post details using the ID
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}
