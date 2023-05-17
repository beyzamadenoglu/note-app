import axios, { URL } from "../axios/axios";

const getAllNotes = async () => {
    try {
        return await axios
            .get(URL.getAll).then((res)=> {
                if (res.status === 200) {
                    return res.data;
                }
                else {
                    return { error: 'Notes not found' }
                }
            });
    }
    catch (error) {
        console.log(error);
    }

}

export default getAllNotes;