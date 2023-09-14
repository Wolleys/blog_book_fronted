import "./singlePost.css";
import api from "../../api";
import { IMAGE_URL } from "../../api";
import { useEffect, useState } from "react";
import { useUser } from "../../context/userContext";
import { postPlacehoderImg } from "../../assets/imgs";
import { Link, useParams, useNavigate } from "react-router-dom";

const SinglePost = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const postId = useParams().postId;
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const response = await api.get(`/posts/${postId}`);
      setPost(response?.data);
    };
    fetchPost();
  }, [postId]);

  const postImage = `${IMAGE_URL}/posts/${post?.photo}`;

  const fallBackImg = (ev) => {
    ev.onerror = null;
    ev.currentTarget.src = postPlacehoderImg;
  };

  const handleDelete = async () => {
    try {
      const response = await api.delete(`/posts/${postId}`, {
        data: { username: user.username },
      });
      console.log(response.data);
      response.data && navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src={postImage}
          alt="single post img"
          onError={fallBackImg}
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i
                className="singlePostIcon fa-regular fa-trash-can"
                onClick={handleDelete}
              ></i>
            </div>
          )}
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
