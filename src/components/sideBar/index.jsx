import "./sideBar.css";
import api from "../../api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { aboutMeImg } from "../../assets/imgs";

const SideBar = () => {
  const [category, setcategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await api.get("/categories");
      setcategory(response.data);
    };
    fetchCategories();
  }, []);

  return (
    <aside className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img className="headerImg" src={aboutMeImg} alt="About me" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam id
          quia placeat cum iusto exercitationem et officiis sapiente
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          {category.map((item) => (
            <Link key={item._id} to={`/?cat=${item.name}`} className="link">
              <li className="sideBarListItem">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-square-facebook"></i>
          <i className="sideBarIcon fa-brands fa-square-x-twitter"></i>
          <i className="sideBarIcon fa-brands fa-linkedin"></i>
          <i className="sideBarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
