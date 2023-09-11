import "./singlePost.css";
import api from "../../api";
import { useEffect, useState } from "react";
import { post1Img } from "../../assets/imgs";
import { Link, useParams } from "react-router-dom";

const SinglePost = () => {
  const postId = useParams().postId;
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const response = await api.get(`/posts/${postId}`);
      setPost(response.data);
    };
    fetchPost();
  }, [postId]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={post1Img} alt="" />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b className="singlePostAuthor">{post.username} </b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
