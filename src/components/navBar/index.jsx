import "./navBar.css";
import { IMAGE_URL } from "../../api";
import { Link } from "react-router-dom";
import { userProfileImg } from "../../assets/imgs";
import { useUser } from "../../context/userContext";

const NavBar = () => {
  const { user, dispatch } = useUser();
  const profilePic = `${IMAGE_URL}${user?.profilePic}`;

  const fallBackImg = (ev) => {
    ev.onerror = null;
    ev.currentTarget.src = userProfileImg;
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

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
              <li className="navBarListItem" onClick={handleLogout}>
                Logout
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navBarRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              src={profilePic}
              alt="User Profile"
              className="navBarImg"
              onError={fallBackImg}
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
