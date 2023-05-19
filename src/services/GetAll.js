import axios, { URL } from "../axios/axios";

const getAllNotes = async () => {
    try {
        return await axios
            .get(URL.getAll).then((res)=> {
               return res.data;
               
            });
    }
    catch (error) {
        console.log(error);
    }

}


export default getAllNotes;