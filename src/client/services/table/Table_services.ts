import { API } from "../../../config/axios.tsx";

// export const getTableDatas = async () => {
//   const res = await API.get("tag/get-all");
//   return res.data;
// };

export const getTableDatas = async (
  pageNumber: number,
  pageSize: number,
  tagName?: string,
  orderBy?: string,
  searchTerm?: string
) => {
  let queryParams = `PageNumber=${pageNumber}&PageSize=${pageSize}`;

  if (tagName) {
    queryParams += `&TagName=${tagName}`;
  }
  if (orderBy) {
    queryParams += `&OrderBy=${orderBy}`;
  }
  if (searchTerm) {
    queryParams += `&SearchTerm=${searchTerm}`;
  }

  const url = `translate?${queryParams}`;

  const res = await API.get(url);

  return {
    data: res.data,
    headers: res.headers["x-pagination"]
      ? JSON.parse(res.headers["x-pagination"])
      : null,
  };
};
