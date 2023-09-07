import "./single.css";
import SideBar from "../../components/sideBar";
import SinglePost from "../../components/singlePost";

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
};

export default Single;
