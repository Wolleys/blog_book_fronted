import "./notFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notFound">
      <h1>Not Found</h1>
      <p>
        The page you are looking for does not exist. <br /> How you got here is
        still a mystery.
      </p>
      <br />
      <Link to="/">
        <button className="goBackButton">Go Back</button>
      </Link>
    </section>
  );
};

export default NotFound;
