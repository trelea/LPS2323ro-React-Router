export const fetchPosts = (setPosts) => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((p) => setPosts(p));
};
