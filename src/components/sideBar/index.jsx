import "./sideBar.css";
import aboutMe from "../../assets/imgs/about-me.jpg";

const SideBar = () => {
  return (
    <aside className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img className="headerImg" src={aboutMe} alt="About me" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam id
          quia placeat cum iusto exercitationem et officiis sapiente
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Sport</li>
          <li className="sideBarListItem">Style</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Cinema</li>
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
