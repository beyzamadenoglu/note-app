import React from "react";
import TextField from "@mui/material/TextField";

const Search = ({ searchText }) => {
  return (
    <>
      <TextField
        id="search-bar"
        className="text search-box"
        onInput={(e) => {
          searchText(e.target.value);
        }}
        label="Ad ile arama"
        variant="outlined"
        placeholder="Search..."
        size="small"
        style={{color: "secondary"}}
      />
    </>
  );
};

export default Search;
