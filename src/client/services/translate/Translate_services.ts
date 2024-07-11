import {API} from "../../../config/axios.tsx";

export const getSortedData = async (tagName: string) => {
    return await API.get(`translate?TagName=${tagName}`)
}