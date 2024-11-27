import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../utils/post.apis";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState();
  React.useEffect(() => fetchPost(id, setPost), [id]);

  return (
    <div className='flex flex-col p-10 w-1/2 gap-4'>
      <h1 className='text-4xl'>{post?.title}</h1>
      <p className='text-xl'>{post?.body}</p>
    </div>
  );
}
