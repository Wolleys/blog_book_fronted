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

  // Update post
  const initialValues = { title: "", desc: "" };
  const [values, setValues] = useState(initialValues);
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await api.get(`/posts/${postId}`);
      setPost(response.data);
      setValues(response.data);
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
        data: { username: user?.username },
      });
      console.log(response.data);
      response.data && navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleChange = (ev) => {
    setValues((prevState) => {
      return { ...prevState, [ev.target.name]: ev.target.value };
    });
  };

  const updatedPost = {
    desc: values.desc,
    title: values.title,
    username: user?.username,
  };

  const handleUpdate = async () => {
    try {
      const response = await api.put(`/posts/${postId}`, updatedPost);
      response.data && setUpdateMode(false);
      
    } catch (error) {
      console.log(error);
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
        {updateMode ? (
          <input
            autoFocus
            type="text"
            name="title"
            value={values.title}
            className="singlePostTitleInput"
            onChange={handleChange}
          />
        ) : (
          <h1 className="singlePostTitle">
            {values.title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-solid fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-regular fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b className="singlePostAuthor">{post.username} </b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>

        {updateMode ? (
          <textarea
            name="desc"
            value={values.desc}
            onChange={handleChange}
            className="singlePostDescInput"
          />
        ) : (
          <p className="singlePostDesc">{values.desc}</p>
        )}
        <>
          {updateMode && (
            <div className="singlePostBtnWrapper">
              <button
                className="singlePostBtn cancle"
                onClick={() => setUpdateMode(false)}
              >
                Cancle
              </button>
              <button className="singlePostBtn update" onClick={handleUpdate}>
                Update
              </button>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default SinglePost;
