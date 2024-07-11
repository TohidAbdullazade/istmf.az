import { API } from "../../../config/axios";

export const getUnreadAppeals = async () => {
  const res = await API.get("notification/passive");
  const data = await res.data;
  return data;
};

export const activeNotification = async (id: string) => {
  await API.put(`notification/${id}`);
};

export const getReadedAppeals = async () => {
  const res = await API.get("notification/active");
  const data = await res.data;
  return data;
};
