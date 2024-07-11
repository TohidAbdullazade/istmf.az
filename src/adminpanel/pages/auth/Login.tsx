import { Button, Form, Input, message } from "antd";
import { getLogin } from "../../services/login/Login_services.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

interface UserProps {
  userName: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProps>({
    userName: "",
    password: "",
  });
  const loginAdmin = (user: UserProps) => {
    getLogin(user)
      .then((res) => {
        Cookies.set("accessToken", res.data);
        navigate("/admin");
      })
      .catch(() => {
        message.error("Yalnış istifadəçi adı vəya parolu!", 2);
      })
      .finally();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className={"w-full flex justify-center my-10"}>
      <div className={"w-[400px] h-[500px] border rounded-md "}>
        <div className={"text-center my-5"}>
          <h2 className="font-inter text-2xl text-gray-400">Daxil ol</h2>
        </div>
        <Form labelCol={{ span: 24 }} className={"p-2.5"}>
          <Form.Item
            labelCol={{ span: 24 }}
            className={" font-inter"}
            label={"Istifadəçi adı"}
            name="userName"
            rules={[
              {
                required: true,
                message: "İstifadəçi adı tələb olunur! ",
              },
              {
                whitespace: true,
                message: "İstifadəçi adı boş ola bilməz!",
              },
            ]}
            hasFeedback={true}
          >
            <Input
              value={user.userName}
              onChange={handleChange}
              className={"w-full"}
              name="userName"
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label={"Password"}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Parol tələb olunur! ",
              },
              {
                whitespace: true,
                message: "Parol sahəsi boş ola bilməz!",
              },
            ]}
            hasFeedback={true}
          >
            <Input.Password
              value={user.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item labelCol={{ span: 24 }}>
            <Button
              onClick={() => loginAdmin(user)}
              className={"w-full"}
              type="primary"
              htmlType="submit"
            >
              Giriş
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
