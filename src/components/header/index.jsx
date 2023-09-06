import "./header.css";
import headerImage from "../../assets/imgs/headerImage.webp";

const Header = () => {
  return (
    <section className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Portfolio Project</span>
        <span className="headerTitleLg">Blog Book</span>
      </div>
      <img className="headerImg" src={headerImage} alt="header banner" />
    </section>
  );
};

export default Header;
