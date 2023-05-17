import axios, { URL } from '../axios/axios';

 const UpdateNote = async (id, updated)  => {
    return await axios
     .put(`${URL.update}/${id}`, updated)
        .then((response) => {
            return response;
        })    
        .catch((error) => {
            return error;
        });
}

export default UpdateNote;