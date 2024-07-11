import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getTagById, updateNewTag } from "../../services/tags/tag_services";
import { AxiosError } from "axios";
import { Button, Form, Input } from "antd";
import { toast } from "react-toastify";

type TagType = {
  id: number;
  name: string;
};

const UpdateTag = () => {
  const { id } = useParams();
  const newId = Number(id);

  const [data, setData] = useState<TagType>({ id: 0, name: "" });
  const navigation = useNavigate();

  const getTags = (newId: number) => {
    getTagById(newId)
      .then((res: TagType) => setData(res))
      .catch((err: AxiosError) => console.log(err.message));
  };

  useEffect(() => {
    if (id !== undefined) {
      getTags(newId);
    }
  }, []);

  const handleUpdate = (name: string, id: number) => {
    updateNewTag(name, id)
      .then(() => {
        toast.success(`Teq uğurlu şəkildə yeniləndi`, {
          position: "top-center",
          autoClose: 1500,
          draggable: true,
          closeOnClick: true,
        });
      })
      .catch(() => {
        toast.error("Teqi yeniləyən zaman xəta baş verdi", {
          position: "top-center",
          autoClose: 1500,
          draggable: true,
          closeOnClick: true,
        });
      })
      .finally(() => {
        navigation("/admin/tags");
      });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2 border rounded-md p-5">
        <h2 className="my-5 text-center font-inter text-xl text-gray-400">
          Teqi dəyişdir
        </h2>
        <Form onFinish={() => handleUpdate(data.name, data.id)}>
          <Form.Item
            label="Ad"
            rules={[
              {
                required: true,
              },
              { whitespace: true },
            ]}
          >
            <Input
              value={data.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setData({ ...data, name: e.target.value })
              }
              placeholder="Teqi yeniləyin... "
            />
          </Form.Item>
          <div className="w-full gap-2.5 flex justify-center">
            <Button htmlType="submit" className="w-[220px]" type="default">
              Teqi yenilə
            </Button>
            <Link to={"/admin/tags"}>
              <Button htmlType="submit" className="w-[220px]" type="default">
                Geriyə Qayıt
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateTag;
