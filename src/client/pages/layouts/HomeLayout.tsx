import { Outlet } from "react-router-dom";
import Header from "../../components/Header.tsx";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
