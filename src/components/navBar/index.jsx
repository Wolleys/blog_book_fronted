import "./navBar.css";
import { Link } from "react-router-dom";
import { userProfileImg } from "../../assets/imgs";

const NavBar = () => {
  const user = false;
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
          <li className="navBarListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="navBarListItem">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="navBarListItem">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          {user && (
            <>
              <li className="navBarListItem">
                <Link to="/write" className="link">
                  Write
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navBarRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="navBarImg"
              src={userProfileImg}
              alt="user profile"
            />
          </Link>
        ) : (
          <ul className="navBarList">
            <li className="navBarListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="navBarListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="navBarSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </header>
  );
};

export default NavBar;
