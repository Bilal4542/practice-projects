import publicAxios from "../../../Components/publicAxios"

const getBlogs = async () => {
    const response = await publicAxios.get('/blogs');
    return response.data;
}
export default getBlogs;