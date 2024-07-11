import { API } from "../../../config/axios";

// ===> GET ALL TAGS FROM SERVER <===
export const GET_ALL_TAGS = async () => {
  return await API.get(`tag/get-all`);
   
};
// ===> DELETE TAG FROM THE SERVER <===
export const deleteTag = async (id: number) => {
  await API.delete(`tag/${id}`);
};

// ===> GET SINGLE TAG FOR UPDATE  <===
export const getTagById = async (id: number) => {
  const res = await API.get(`tag/${id}`);
  const data = await res.data;
  return data;
};

// ===> GET ALL TAGS FROM SERVER <===
export const GET_ALL_TAGS_FOR_TRANSLATION = async () => {
  const res = await API.get(`tag/get-all`);
  return res.data;
};

export const updateNewTag = async (name: string, id: number) => {
  const res = await API.put(`tag/${id}`, { name });
  const data = await res.data;
  return data;
};
