import "./write.css";
import api from "../../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { postPlacehoderImg } from "../../assets/imgs";

const Write = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const initialValues = { title: "", desc: "" };
  const [values, setValues] = useState(initialValues);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (ev) => {
    setValues((prevState) => {
      return { ...prevState, [ev.target.name]: ev.target.value };
    });
  };

  const handleFileChange = (ev) => {
    setSelectedFile(ev.target.files[0]);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setError(null);

    const newPost = {
      username: user.username,
      title: values.title,
      desc: values.desc,
    };

    const formData = new FormData();
    const filename = selectedFile?.name;
    formData.append("title", newPost.title);
    formData.append("desc", newPost.desc);
    formData.append("username", newPost.username);
    formData.append("post", selectedFile);
    newPost.photo = filename;

    try {
      const response = await api.post("/posts/", formData);
      const postId = response.data._id;
      response.data && navigate(`/post/${postId}`);
    } catch (error) {
      if (!error?.response) {
        setError("No Server Response");
      } else if (error.response?.data) {
        setError(error.response?.data.error);
      }
    }
  };

  return (
    <div className="write">
      <div className="writeImgWrapper">
        <img
          className="writeImg"
          src={
            selectedFile ? URL.createObjectURL(selectedFile) : postPlacehoderImg
          }
          alt=""
        />
        <span>{error}</span>
      </div>
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <input
            required
            type="text"
            name="title"
            autoFocus={true}
            placeholder="Title"
            className="writeInput"
            onChange={handleChange}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            required
            type="text"
            name="desc"
            onChange={handleChange}
            className="writeInput writeText"
            placeholder="Tell your story..."
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
