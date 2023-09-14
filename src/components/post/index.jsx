import "./post.css";
import { IMAGE_URL } from "../../api";
import { Link } from "react-router-dom";
import { postThumbImg } from "../../assets/imgs";

const Post = ({ post }) => {
  const postImage = `${IMAGE_URL}/posts/${post?.photo}`;

  const fallBackImg = (ev) => {
    ev.onerror = null;
    ev.currentTarget.src = postThumbImg;
  };

  return (
    <div className="post">
      <img className="postImg" src={postImage} alt="post img" onError={fallBackImg} />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category) => (
            <span className="postCat">{category.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
