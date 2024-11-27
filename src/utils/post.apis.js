export const fetchPost = (id, setPost) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .then((p) => setPost(p));
};
