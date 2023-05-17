import axios, { URL } from '../axios/axios';

 const DeleteNote = async (id)  => {
    return await axios  
     .delete(`${URL.delete}/${id}`)
        .then((response) => {
            return response;
        })    
        .catch((error) => {
            return error;
        });
}

export default DeleteNote;