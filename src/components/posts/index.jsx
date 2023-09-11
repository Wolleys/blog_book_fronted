import "./posts.css";
import Post from "../post";
import { post1Img } from "../../assets/imgs";

const Posts = ({ posts }) => {
  return (
    <main className="posts">
      {posts.map((post) => (
        <Post key={post._id} img={post1Img} post={post} />
      ))}
    </main>
  );
};

export default Posts;
