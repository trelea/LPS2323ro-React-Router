import React from "react";
import PostCard from "../components/PostCard";
import { fetchPosts } from "../utils/posts.apis";
import SearchBar from "../components/SearchBar";

export default function Posts() {
  const [posts, setPosts] = React.useState([]);
  const [refetch, setRefetch] = React.useState(false);
  React.useEffect(() => fetchPosts(setPosts), [refetch]);

  return (
    <section className='flex flex-col justify-center items-center gap-10 px-10 py-10 md:px-20 xl:px-28 2xl:px-40 bg-gray-200 min-h-dvh'>
      <SearchBar posts={posts} setPosts={setPosts} setRefetch={setRefetch} />
      <main className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full'>
        {posts.map((post, _) => {
          return <PostCard key={_} post={post} />;
        })}
      </main>
    </section>
  );
}
