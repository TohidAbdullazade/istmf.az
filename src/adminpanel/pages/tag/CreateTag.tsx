import { Button, Form, Input } from "antd";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../../config/axios";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const CreateTag = () => {
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();

  const addNewTag = () => {
    API.post("tag", { name: input })
      .then(() => {
        toast.success(` Teq uğurlu şəkildə əlavə olundu!`, {
          position: "top-center",
          autoClose: 2000,
          draggable: true,
          pauseOnHover: false,
        });
        navigate("/admin/tags");
      })
      .catch((err: AxiosError) => {
        if (err) {
          toast.error(` Teq silinən zaman xəta baş verdi!`, {
            position: "top-center",
            autoClose: 2000,
            draggable: true,
            pauseOnHover: false,
          });
        }
      });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2 border rounded-md p-5">
        <h2 className="my-5 text-center font-inter text-xl text-gray-400">
          Teq əlavə et
        </h2>
        <Form>
          <Form.Item
            label="Ad"
            name={"tag"}
            rules={[
              {
                required: true,
              },
              { whitespace: true },
            ]}
          >
            <Input
              value={input}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setInput(e.target.value);
              }}
              placeholder="Yeni teqi əlavə edin zəhmət olmasa!"
            />
          </Form.Item>
          <div className="w-full flex gap-2 justify-center">
            <Button
              onClick={addNewTag}
              className="w-[200px]"
              htmlType="submit"
              type="default"
            >
              Təsdiqlə
            </Button>
            <Link to={"/admin/tags"}>
              <Button
                className="w-[200px] bg-red-600 text-white outline-none border-none font-inter"
                htmlType="submit"
                type="default"
              >
                Geriya Qayıt
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateTag;
