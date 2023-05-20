import React from "react";
import TextField from "@mui/material/TextField";

const Search = ({ searchText }) => {
  return (
    <div>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          searchText(e.target.value);
        }}
        label="Ad ile arama"
        variant="outlined"
        placeholder="Search..."
        size="small"
        style={{color:"secondary"}}
      />
    </div>
  );
};

export default Search;
