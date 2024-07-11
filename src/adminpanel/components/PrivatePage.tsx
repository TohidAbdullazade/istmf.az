import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivatePage = ({ children }: { children: ReactNode }) => {
  const access = Cookies.get("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!access) {
      navigate("/login");
    }
  }, [access, navigate]);

  useEffect(() => {
    if (access && access.includes("status=401")) {
      Cookies.remove("accessToken");
      navigate("/login");
    }
  }, [access, navigate]);

  return <>{children}</>;
};

export default PrivatePage;
