import axios, { URL } from '../axios/axios';

 const AddNote = async (noteObject)  => {
    return await axios  
     .post(URL.add, noteObject)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export default AddNote;