export const GetDataId = async (id) => {

    const url = "https://api-realmod.herokuapp.com/propiedades"

    const {data} = await axios.get(`${url}/${id}`);

    return data;
}