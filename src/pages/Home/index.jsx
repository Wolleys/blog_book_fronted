import "./home.css";
import Header from "../../components/header";
import Posts from "../../components/posts";
import SideBar from "../../components/sideBar";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
