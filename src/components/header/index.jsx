import "./header.css";
import { headerImg } from "../../assets/imgs";

const Header = () => {
  return (
    <section className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Portfolio Project</span>
        <span className="headerTitleLg">Blog Book</span>
      </div>
      <img className="headerImg" src={headerImg} alt="header banner" />
    </section>
  );
};

export default Header;
