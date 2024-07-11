import { useEffect, useState } from "react";
import {
  activeNotification,
  getReadedAppeals
} from "../../services/appeals/Appeals_services";
import { Button, Modal, Space, Table } from "antd";
import { NotificationInterface } from "../../interface/notification/NotificationInterface.ts";
import { format } from "date-fns";

const UnreadAppeals = () => {
  const [data, setData] = useState<NotificationInterface[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

  useEffect(() => {
    getReaded();
  }, []);

  const getReaded = () => {
    getReadedAppeals()
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err.message));
  };

  const makeActive = (id?: string) => {
    activeNotification(id!)
      .then(() => {
        getReaded();
        setModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openModal = (id: string) => {
    setModal(true);
    setSelectedId(id);
  };
  return (
    <>
      <Table
        columns={[
          {
            title: "№",
            dataIndex: "count",
          },
          {
            title: "Name",
            dataIndex: "name",
          },

          {
            title: "Surname",
            dataIndex: "surname",
          },

          {
            title: "Phone Number",
            dataIndex: "phoneNumber",
          },

          {
            title: "Əməliyyat",
            render: (_, value: NotificationInterface) => (
              <Space>
                <Button onClick={() => openModal(value.id!)}>Oxu</Button>
              </Space>
            ),
          },
        ]}
        dataSource={data.map((item: NotificationInterface, index: number) => ({
          ...item,
          key: item.id,
          count: ++index,
          name: item.name,
          surname: item.surname,
          phoneNumber: item.phoneNumber,
        }))}
      ></Table>
      <Modal
        onOk={() => makeActive(selectedId)}
        cancelText="Geriyə"
        open={modal}
        onCancel={() => setModal(false)}
      >
        {data
          ?.filter((item: NotificationInterface) => item.id == selectedId)
          .map((item) => (
            <>
              <h2 className="text-center text-4xl ">Müraciət</h2>
              <div className="flex flex-col gap-4">
                <div className="flex  items-center gap-2">
                  <strong className="">Name:</strong> <span>{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <strong>Surname:</strong> <span>{item.surname}</span>
                </div>
                <div className="flex items-center gap-2">
                  <strong>Email:</strong> <span>{item.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <strong>Phone Number:</strong> <span>{item.phoneNumber}</span>
                </div>
                <div className="flex text-balance   gap-2">
                  <strong>Content:</strong> <span>{item.content}</span>
                </div>
                <div className="flex items-center gap-2">
                  <strong>Insert Date:</strong>{" "}
                  <span>
                    {format(new Date(item.insertDate), "dd.MM.yyyy HH:mm")}
                  </span>
                </div>
              </div>
            </>
          ))}
      </Modal>
    </>
  );
};

export default UnreadAppeals;
