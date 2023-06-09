import axios, { URL } from "../axios/axios";

const GetAllNotes = async () => {
    try {
        return await axios
            .get(URL.getAll).then((res)=> {
               return res.data;
               
            });
    }
    catch (error) {
       return error;
    }

}


export default GetAllNotes;