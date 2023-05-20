import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Note from "./Note";
import getAll from "../services/GetAll";
import Search from "./Search";

const NoteList = () => {
  const [noteList, setNoteList] = useState([]);
  const [sorted, setSorted] = useState("ASC");
  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
     return data.filter((d) => d.name.toLowerCase().includes(query));
    }
  };
  const dataFiltered = filterData(searchQuery, Object.values(noteList));


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
    <div className="notes">
      <Search searchQuery={searchQuery} searchText={setSearchQuery} />
      <div style={{ padding: 3 }}>
      </div>
      <InputLabel id="demo-simple-select-label">Öncelik sıralaması</InputLabel>
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
        <div id="list-container">
        {dataFiltered && dataFiltered.length > 0 ? (
          dataFiltered.map((note, index) => <Note key={index} note={note} />)
        ) : (
          <>
            <h3>Henüz içerik girilmedi. </h3>
          </>
        )}
        </div>
        
    </div>
  );
};

export default NoteList;
