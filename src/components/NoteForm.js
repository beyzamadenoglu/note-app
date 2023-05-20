import React, { useState, useEffect } from "react";
import { FormGroup, InputLabel, Input, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import AddNote from "../services/Add";
import getAll from "../services/GetAll";


const NoteForm = ({ typeForm, not }) => {
  const [note, setNote] = useState("");
  const [priority, setPriority] = useState("");
  const [noteList, setNoteList] = useState([]);

  const [image, setImage] = useState({
    selectedImage: null,
    imagePreviewUrl: null,
  });

  const { selectedImage, imagePreviewUrl } = image;

  useEffect(() => {
    if (typeForm === "update" && not) {
      setNote(note.name);
    } else {
      setNote("");
    }
  }, []);

  const fileChangedHandler = (event) => {
    setImage({ ...image, selectedImage: event.target.files[0] });

    let reader = new FileReader();

    reader.onloadend = () => {
      setImage({
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  const handleService = async () => {
    const noteObject = {
      name: note,
      image: image,
      priority: priority,
      date: new Date().toLocaleString(),
    };
    return await AddNote(noteObject).then((response) => {
      console.log(response);
    });
  };

  const handleUpdate = async (id) => {
    const noteObject = {
      name: note,
      image: image,
      priority: priority,
    };
    return await getAll().then((response) => {
     setNoteList(response);
     noteList.forEach(note => {
      if(not.id===id) 
        return note;
     })
     console.log(noteList);
    });
  };

  const handleChange = (e) => {
    const regex = /^[0-5]$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setPriority(e.target.value);
    }
  };

  const successMessage = () => {
    toast.success("Succesfully added!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setImage({
      selectedImage: null,
      imagePreviewUrl: null,
    });
    setPriority("");
    if (typeForm === "add") {
      handleService().then(() => {
        successMessage();
      });
    }
    if (typeForm === "update") {
      handleUpdate().then(() => {
        successMessage();
      });
    }
  };

  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            gridTemplateRows: "auto",
            gridTemplateAreas: `"label . ."
        "input input button"`,
          }}
          className="add-form"
        >
          <InputLabel sx={{ gridArea: "label" }} htmlFor="my-input">
            Add Your Note
          </InputLabel>
          <Input
            required
            placeholder={"Not Bilgisi"}
            sx={{ gridArea: "input" }}
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={(e) => setNote(e.target.value)}
          />
          <Button
            sx={{ gridArea: "button" }}
            variant="contained"
            color="secondary"
            className="button"
            type="submit"
          >
            Add
          </Button>
          <Card>
            {selectedImage === null ? (
              <CardContent>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="raised-button-file"
                  multiple
                  type="file"
                  onChange={fileChangedHandler}
                />
                <label htmlFor="raised-button-file">
                  <Button variant="raised" component="span">
                    Resim Yükle
                  </Button>
                </label>
              </CardContent>
            ) : (
              <CardContent>
                <img src={imagePreviewUrl} alt="icon" width="100" />{" "}
                <CardActions />
              </CardContent>
            )}
          </Card>
          <TextField
            id="filled-number"
            type="number"
            variant="filled"
            label="0-5 arası öncelik"
            value={priority}
            onChange={handleChange}
          />
        </FormGroup>
      </form>
    </div>
  );
};

export default NoteForm;
