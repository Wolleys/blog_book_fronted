import NavBar from "../navBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
