import axios, { URL } from '../axios/axios';

 const UpdateNote = async (note)  => {
    return await axios
     .put(`${URL.update}/${note.id}`, note)
        .then((response) => {
            return response;
        })    
        .catch((error) => {
            return error;
        });
}

export default UpdateNote;