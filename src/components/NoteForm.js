import React, { useState } from "react";
import { FormGroup, InputLabel, Input, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from '@mui/material/TextField';
import { toast } from "react-toastify";
import AddNote from "../services/Add";

const NoteForm = () => {
  const [note, setNote] = useState([]);
  const [priority, setPriority] = useState('');

  const [image, setImage] = useState({
    selectedImage: null,
    imagePreviewUrl: null,
  });

  const { selectedImage, imagePreviewUrl } = image;

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
    e.target.reset();
    setImage({
      selectedImage: null,
      imagePreviewUrl: null,
    });
    setPriority('');
    e.preventDefault();


    handleService().then((res) => {
      successMessage();
    });
  };
  return (
    <div>
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
            placeholder={"Note description"}
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
                    upload
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
          <InputLabel sx={{ gridArea: "label" }} htmlFor="my-input">
           Lütfen "0-5" arası bir rakam giriniz.
          </InputLabel>
          <TextField
          id="filled-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={priority}
          onChange={handleChange}
        />
        </FormGroup>
      </form>
    </div>
  );
};

export default NoteForm;
