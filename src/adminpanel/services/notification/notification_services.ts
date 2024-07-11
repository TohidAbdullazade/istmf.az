// Post new Notification

import { API } from "../../../config/axios";
import { NotificationInterface } from "../../interface/notification/NotificationInterface.ts";

export const makeNewNotification = async (info: NotificationInterface) => {
  const res = await API.post("notification",info);
  const data = await res.data;
  return data;
};
