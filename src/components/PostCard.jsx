import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link
      to={`/posts/${post.id}`}
      preventScrollReset={true}
      className='bg-gray-300/50 rounded-xl border border-gray-500 shadow-xl p-6 hover:bg-gray-400 group'
    >
      <h1 className='text-2xl font-medium text-gray-800 mb-2'>{post.title}</h1>
      <p className='text-base font-normal text-gray-600 group-hover:text-white'>
        {post.body}
      </p>
    </Link>
  );
}
