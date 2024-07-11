import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader.tsx";

const DashboardLayout = () => {
  return (
    <div className="full-dashboard-layout     ">
      <AdminHeader />
      <div className="full-content  h-full flex ">
        <div className="outlet-container  py-5   border-l border-gray-500 h-screen flex-[2]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
