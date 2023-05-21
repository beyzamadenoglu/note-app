import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Note from "./Note";
import Pagination from "./Pagination";
import GetAll from "../services/GetAll";
import Search from "./Search";

const NoteList = () => {
  const [noteList, setNoteList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageContent, setPageContent] = useState([]);
  const [contentLength, setContentLength] = useState(0);
  const [filteredNoteList, setFilteredNoteList] = useState([]);
  const [sorted, setSorted] = useState("sort");
  const [searchQuery, setSearchQuery] = useState("");
  const notesPerPage = 10;

  const filterData = (query, data) => {
    setCurrentPage(1)
    return data.filter((d) => d.name.toLowerCase().includes(query));
  };

  useEffect(() => {
    setFilteredNoteList(filterData(searchQuery, Object.values(noteList)));
  },[searchQuery]);

  useEffect(() => {refreshContent(); }, [noteList.length]);

  useEffect(() => {
    let tempPage = currentPage * notesPerPage
    if (searchQuery === null || searchQuery === "") {
      setContentLength(noteList.length);
      setPageContent(noteList.slice(tempPage - notesPerPage, tempPage ));
    } else {
      setContentLength(filteredNoteList.length);
      setPageContent(filteredNoteList.slice(tempPage - notesPerPage, tempPage ));
    }
  }, [currentPage, noteList, sorted, filteredNoteList]);

  const refreshContent = () => {
    GetAll().then((data) => {
      setNoteList(data);
      setFilteredNoteList(data);
    });
  }

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
    setCurrentPage(1);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSorted(e.target.value);
  };

  return (
    <div className="notes">
      <div className="note-utils">
        <Search searchQuery={searchQuery} searchText={setSearchQuery} />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sorted}
            label="Priority"
            onChange={handleChange}
            onClick={handleOrder}
            className="sort-box"
          >
            <MenuItem value={"sort"}>Sırala</MenuItem>
            <MenuItem value={"ASC"}>Artan Öncelik</MenuItem>
            <MenuItem value={"DESC"}>Azalan Öncelik</MenuItem>
          </Select>
      </div>

      <div id="list-container">
        <h1>Notlarınız</h1>
        {pageContent && pageContent.length > 0 ? (
          pageContent.map((note, index) => <Note key={index} note={note} onNoteDelete={refreshContent} />)
        ) : (
          <h3>{searchQuery.length === 0 ? "Henüz içerik girilmedi." : "Aramanızla eşleşen sonuç bulunamadı." }</h3>
        )}
      </div>
      <Pagination totalNotes={contentLength} notesPerPage={notesPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
};

export default NoteList;
