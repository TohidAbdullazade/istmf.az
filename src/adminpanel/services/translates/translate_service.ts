import { API } from "../../../config/axios";
import {
  TranslationInterface,
  TranslationInterfacePayload,
} from "../../interface/translate/TranslateInterface.ts";

// ===> Post new Translate to the Server <===
export const addNewTranslation = async (
  translateObject: TranslationInterface
) => {
  const res = await API.post("translate", translateObject);
  const data = await res.data;
  console.log(data);
  return data;
};

export const getAllTranslations = async (
  pageNumber: number,
  pageSize: number,
  tagName?: string | null,
  orderBy?: string | null,
  searchTerm?: string |null
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

  // Выполняем запрос
  const res = await API.get(url);

  return {
    data: res.data,
    headers: res.headers["x-pagination"]
      ? JSON.parse(res.headers["x-pagination"])
      : null,
  };
};
export const deleteTranslate = async (id: number) => {
  await API.delete(`translate/${id}`);
};

export const getSingleTranslation = async (id: number) => {
  const res = await API.get(`translate/${id}`);
  const data = await res.data;
  return data;
};

export const updateTranlate = async (
  value: TranslationInterfacePayload,
  id: number
) => {
  await API.put(`translate/${id}`, value);
};

export const transformTranslationData = (
  data: any
): TranslationInterfacePayload => {
  return {
    translateDto: {
      englishWord: data.englishWord,
      russianWord: data.russianWord,
      azDescription: data.azDescription,
      ruDescription: data.ruDescription,
      source: data.source,
    },
    tagIds: data.tags.map((tag: any) => tag.id),
  };
};

export const getTranlationById = async (id: number) => {
  const data = await getSingleTranslation(id);
  const transformedData = transformTranslationData(data);
  return transformedData;
};
