import publicAxios from "../../../Components/publicAxios"

export const getBlogs = async () => {
    const response = await publicAxios.get('/blogs');
    return response.data;
}