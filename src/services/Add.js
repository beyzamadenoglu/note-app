import axios, { URL } from '../axios/axios';

 const AddNote = async (noteObject)  => {
    return await axios  
    .post(URL.add, noteObject);
        
}
export default AddNote;