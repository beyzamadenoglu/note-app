import { createSlice } from '@reduxjs/toolkit'

const getNoteList = () => {

}

const initialState = {
    noteList: getNoteList(),
}

export const noteSlice = createSlice({
    name: "note",
    initialState: initialState,
    reducers: {
        setNote: (state, action) => {
        
        },
        addNote: (state, action) => {
          
        },
        deleteNote: (state, action) => {
           
        },
        updateNote: (state, action) => {
           
        }
    }
})

export const { setNote, addNote, deleteNote, updateNote } = noteSlice.actions;
export default noteSlice.reducer;