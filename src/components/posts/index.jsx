import "./posts.css";
import Post from "../post";

const Posts = ({ posts }) => {
  return (
    <main className="posts">
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </main>
  );
};

export default Posts;
