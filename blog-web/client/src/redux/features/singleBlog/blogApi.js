import publicAxios from "../../../Components/publicAxios";


export const getBlog = async (id) => {
    const response = await publicAxios.get(`/blogs${id}`);
    return response.data;
}