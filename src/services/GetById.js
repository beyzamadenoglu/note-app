import axios, { URL } from "../axios/axios";

const GetById = async (id) => {
    try {
        return await axios
            .get(`${URL.getAll}/${id}`).then((res)=> {
               return res.data;
            });
    }
    catch (error) {
       return error;
    }

}


export default GetById;