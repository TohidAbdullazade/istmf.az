import {API} from "../../../config/axios.tsx";

export const getTagsForSite = async (id: number) => {
    const res = await API.get(`/tag/${id}`);
    const data = await res.data
    return data
}

 export const getAllTagsForSite = async () => {
   return  await API.get(`/tag/get-all`);
 }