import "./navBar.css";
import { userProfileImg } from "../../assets/imgs";

const NavBar = () => {
  return (
    <header className="navBar">
      <div className="navBarLeft">
        <i className="navBarIcon fa-brands fa-square-facebook"></i>
        <i className="navBarIcon fa-brands fa-square-x-twitter"></i>
        <i className="navBarIcon fa-brands fa-linkedin"></i>
        <i className="navBarIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="navBarCenter">
        <ul className="navBarList">
          <li className="navBarListItem">Home</li>
          <li className="navBarListItem">About</li>
          <li className="navBarListItem">Contact</li>
          <li className="navBarListItem">Write</li>
        </ul>
      </div>
      <div className="navBarRight">
        <img className="navBarImg" src={userProfileImg} alt="user profile" />
        <i className="navBarSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </header>
  );
};

export default NavBar;
