import "./posts.css";
import Post from "../post";
import {
  post1Img,
  post2Img,
  post3Img,
  post4Img,
  post5Img,
  post6Img,
} from "../../assets/imgs";

const Posts = () => {
  return (
    <main className="posts">
      <Post img={post1Img} />
      <Post img={post2Img} />
      <Post img={post3Img} />
      <Post img={post4Img} />
      <Post img={post5Img} />
      <Post img={post6Img} />
    </main>
  );
};

export default Posts;
