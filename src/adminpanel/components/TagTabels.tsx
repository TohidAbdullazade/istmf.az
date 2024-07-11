import { useEffect, useState } from "react";
import { Button, Modal, Space } from "antd";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { TagProps } from "../interface/tags/TagInterface.ts";
import { deleteTag, GET_ALL_TAGS, getTagById } from "../services/tags/tag_services.tsx";

const TagTabels = () => {
  const [tableData, setTableData] = useState<TagProps[]>([]);

  const getDatas = () => {
    GET_ALL_TAGS()
      .then((res) => {
        setTableData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDatas();
  }, []);

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Bu Məlumatı silməyinizdən əminsiniz?",
      onOk: () => {
        deleteTag(id)
          .then(() => {
            toast.success("Əməliyyat uğurla silindi!", {
              position: "top-center",
              autoClose: 1500,
              draggable: true,
              pauseOnHover: false,
              closeOnClick: true,
            });
            getDatas();
          })
          .catch((err: AxiosError) => {
            console.log(err.message);
          });
      },
      onCancel: () => {
        toast.info("Silinmə əməliyyatından imtina edildi!", {
          position: "top-center",
          autoClose: 1500,
          draggable: true,
          pauseOnHover: false,
          closeOnClick: true,
        });
        return;
      },
    });
  };

  const handleUpdate = (id: number) => {
    getTagById(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="w-[1200px] flex flex-col max-h-[600px] overflow-y-auto mt-4 h-full rounded-2xl">
        <div className="pagenation-side w-full sticky top-0 z-20 flex justify-between items-center min-h-[60px] pl-6 pr-11 bg-slate-100 rounded-tl-2xl rounded-tr-2xl"></div>
        <div className="data-side w-full flex flex-col">
          {tableData?.map((item: TagProps, index: number) => (
            <div
              key={item.id}
              className={`columns p-4 items-center justify-between font-inter text-sm text-gray-600 flex ${
                index % 2 === 0 ? "bg-[#FBFBFB]" : ""
              }`}
            >
              <div className="cell-2 w-[168px] text-center font-inter text-base pl-5 h-full">
                {item.name}
              </div>

              <Space className="ml-8">
                <Link to={`/admin/tag/${item.id}`}>
                  <Button onClick={() => handleUpdate(item.id!)}>Yenilə</Button>
                </Link>
                <Button onClick={() => handleDelete(item.id!)}>Sil</Button>
              </Space>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TagTabels;
