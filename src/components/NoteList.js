import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Note from "./Note";
import getAll from "../services/GetAll";

const NoteList = () => {
  const [noteList, setNoteList] = useState([]);
  const [sorted, setSorted] = useState("");

  useEffect(() => {
    getAll().then((data) => {
      setNoteList(data);
    });
  }, []);


  const handleOrder = () => {
    let sortedArr = noteList;
    if (sorted === "ASC") {
      sortedArr = sortedArr.sort(function (a, b) {
        return b.priority - a.priority;
      });
      setSorted("DESC");
    } else if (sorted === "DESC") {
      sortedArr = sortedArr.sort(function (a, b) {
        return a.priority - b.priority;
      });
      setSorted("ASC");
    }

    setNoteList(sortedArr);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSorted(e.target.value);
  };

  return (
    <>
      <div>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sorted}
          label="Priority"
          onChange={handleChange}
          onClick={handleOrder}
        >
          <MenuItem value={"ASC"}>High to low</MenuItem>
          <MenuItem value={"DESC"}>Low to high</MenuItem>
        </Select>
        {noteList && noteList.length > 0 ? (
          noteList.map((note, index) => <Note key={index} note={note} />)
        ) : (
          <>
          
            <h3>Henüz içerik girilmedi. </h3>
          </>
        )}
      </div>
    </>
  );
};

export default NoteList;
