import { Avatar, Button, Menu, message, Modal, Dropdown } from "antd";
import { FaUserTie } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { getLogout } from "../services/login/Login_services";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const AdminHeader = () => {
  const [logged, setLogged] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged]);

  const logoutUser = () => {
    Modal.confirm({
      title:
        "Admin paneldən çixmağa əminsiniz, çıxış etsəniz yenidən giriş etməlisiniz!",
      okText: "Təsdiqlə",
      cancelText: "Imtina et",

      onOk: () => {
        getLogout()
          .then(() => {
            Cookies.remove("accessToken");
            setLogged(false);
            navigate("/");
          })
          .catch((err: AxiosError) => {
            console.log(err.message);
          });
      },
      onCancel: () => {
        return message.info("Çıxış imtina edildi!", 2);
      },
    });
  };

  const NotificationDropdown = () => {
    const menu = (
      <Menu>
        <Menu.Item key="unread">
          <NavLink to="/admin/appeals/unread">Oxunmamış</NavLink>
        </Menu.Item>
        <Menu.Item key="read">
          <NavLink to="/admin/appeals/read">Oxunmuş</NavLink>
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} placement="bottomCenter">
        <div className="cursor-pointer">
          <p>Notification</p>
        </div>
      </Dropdown>
    );
  };

  return (
    <header className="bg- h-[80px] border-b  w-full px-10 flex justify-between items-center bg-white border-slate-200">
      <div className="left flex items-center">
        <div className="logo  px-5   border-slate-100 ">
          <div className="image">
            <Avatar
              className={"cursor-pointer"}
              size={"large"}
              icon={<FaUserTie />}
            />
          </div>
        </div>
      </div>
      <div className="navbar ">
        <nav className="flex justify-center font-inter p-2.5 rounded-lg text-[17px]  gap-5 items-center w-full">
          <NavLink to={"/admin/home"}>
            <p>Ana Səhifə</p>
          </NavLink>
          <NavLink to={"/admin/tags"}>
            <p>Teqlər</p>
          </NavLink>
          <NavLink to={"/admin/translation"}>
            <p>Tərcümələr</p>
          </NavLink>
          <NotificationDropdown />
        </nav>
      </div>
      <div className="right">
        <Button
          onClick={logoutUser}
          className="bg-red-500 duration-500 h-[40px] w-[100px]  ease-in-out transition-all  text-white"
          type="default"
          htmlType="button"
        >
          Çıxış
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
