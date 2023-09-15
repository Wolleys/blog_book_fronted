import "./settings.css";
import api from "../../api";
import { useState } from "react";
import { IMAGE_URL } from "../../api";
import SideBar from "../../components/sideBar";
import { userProfileImg } from "../../assets/imgs";
import { useUser } from "../../context/userContext";

const Settings = () => {
  const { user, dispatch } = useUser();
  const profilePic = `${IMAGE_URL}/profile/${user?.profilePic}`;

  const initialValues = { username: "", email: "", password: "" };
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [selectedFile, setSelectedFile] = useState(null);

  const fallBackImg = (ev) => {
    ev.onerror = null;
    ev.currentTarget.src = userProfileImg;
  };

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
    dispatch({ type: "UPDATE_START" });
    const userId = user._id;

    const updatedUser = {
      userId,
      email: values.email,
      username: values.username,
      password: values.password,
    };

    const formData = new FormData();
    const filename = selectedFile?.name;
    formData.append("userId", userId);
    formData.append("email", updatedUser.email);
    formData.append("username", updatedUser.username);
    formData.append("password", updatedUser.password);
    formData.append("profile", selectedFile);
    updatedUser.profilePic = filename;

    try {
      const response = await api.put(`/users/${userId}`, formData);
      console.log(response.data);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
      if (!error?.response) {
        console.log("No Server Response");
      } else if (error.response) {
        console.log(error.response);
      }
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit} autoComplete="off">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={
                selectedFile ? URL.createObjectURL(selectedFile) : profilePic
              }
              alt="User Profile"
              onError={fallBackImg}
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={handleFileChange}
            />
          </div>
          <label>Username</label>
          <input
            required
            type="text"
            name="username"
            onChange={handleChange}
            placeholder={user?.username}
          />
          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            onChange={handleChange}
            placeholder={user?.email}
          />
          <label>Password</label>
          <input
            required
            type="password"
            name="password"
            onChange={handleChange}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
