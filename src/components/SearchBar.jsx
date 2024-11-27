import { Search } from "lucide-react";

export default function SearchBar({ posts, setPosts, setRefetch }) {
  const handleSearchBar = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const filtredPosts = posts.filter((post) =>
      String(post.title).includes(data.get("query"))
    );
    setPosts(filtredPosts);
  };

  return (
    <form
      onSubmit={(event) => handleSearchBar(event)}
      action=''
      className='flex items-center border border-gray-800 p-2 shadow-2xl rounded-lg'
    >
      <input
        onChange={(e) => {
          if (e.target.value === "") setRefetch((value) => !value);
        }}
        type='text'
        name='query'
        className='bg-transparent outline-none w-96'
        required
      />
      <button type='submit'>
        <Search />
      </button>
    </form>
  );
}
