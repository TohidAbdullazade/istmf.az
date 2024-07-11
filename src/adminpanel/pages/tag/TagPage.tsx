import { Button } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import TagTabels from "../../components/TagTabels.tsx";

const TagPage = () => {
  return (
    <>
      <div className="flex justify-end px-10 my-5">
        <div className="create-btn">
          <Link to={"/admin/tags/create"}>
            <Button
              htmlType="submit"
              className="flex items-center w-[150px] p-2 justify-between"
              type="default"
            >
              <span>Əlavə et</span>
              <span>
                <IoMdAddCircle size={20} color="green" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <TagTabels />
      </div>
      <ToastContainer />
    </>
  );
};

export default TagPage;
