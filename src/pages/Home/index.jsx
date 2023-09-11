import "./home.css";
import api from "../../api";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import Posts from "../../components/posts";
import SideBar from "../../components/sideBar";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/posts/${search}`);
      setPosts(response.data);
    };
    fetchData();
  }, [search]);
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
