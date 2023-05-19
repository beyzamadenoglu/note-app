import React, { useState, useEffect} from 'react';
import Note from "./Note";
import getAll from '../services/GetAll';

const NoteList = () => {

  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    getAll().then((data) => {
        setNoteList(data);
    });
}, []);

  return (
    <>
        {noteList &&
            noteList.length > 0
                ? noteList.map((note, index) => (
                    <Note key={index} note={note} />
                )) : <> <h3>There is no data </h3> </>
            }

    </>
  )
}

export default NoteList;