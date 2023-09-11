import "./home.css";
import api from "../../api";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import Posts from "../../components/posts";
import SideBar from "../../components/sideBar";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/posts");
      setPosts(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
