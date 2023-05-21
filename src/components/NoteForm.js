import React, { useState, useEffect } from "react";
import { FormGroup, InputLabel, Input, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import AddNote from "../services/Add";
import Update from "../services/Update";
import GetById from "../services/GetById";
import { useParams } from "react-router-dom"

const NoteForm = ({ typeForm, typeText }) => {
  const [note, setNote] = useState("");
  const [priority, setPriority] = useState("");

  const [image, setImage] = useState({
    selectedImage: null,
    imagePreviewUrl: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const setNoteState = async () => {
      const updateObject = await GetById(id);
      setNote(updateObject.name);
      setPriority(updateObject.priority);
      setImage( {
        selectedImage:  updateObject.image.selectedImage,
        imagePreviewUrl:  updateObject.image.imagePreviewUrl,
      });
    }

    if (typeForm === "update" && id) {
      setNoteState();
    } else {
      setNote("");
    }
  }, [id]);


  const fileChangedHandler = (event) => {
    setImage( {
      selectedImage: event.target.files[0],
      imagePreviewUrl: event.target.files[0],
    });
    let reader = new FileReader();

    reader.onloadend = () => {
      setImage({
        selectedImage: reader.result,
        imagePreviewUrl: reader.result
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
    return await AddNote(noteObject);
  };

  const handleUpdate = async () => {
    const noteObject = {
      name: note,
      image: image,
      priority: priority,
      date: null,
      id: id
    };

    return await Update(noteObject);
  }

  const handleChange = (e) => {
    const regex = /^[0-5]$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setPriority(e.target.value);
    }
  };

  const successMessage = () => {
    toast.success(`Başarıyla ${typeText}!`, {
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
      typeText = "Kaydedildi"
      handleService().then(() => {
        successMessage();
      });
    } else if (typeForm === "update") {
      typeText = "Güncellendi."
      handleUpdate().then(() => {
        successMessage();
      });
    }
  };

  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup className="add-form" sx={{ gap: 2 }}>
          <InputLabel htmlFor="my-input" style={{fontSize:'25px'}}>
            Not girin
          </InputLabel>
          <TextField
            required
            placeholder={"Not Bilgisi"}
            id="my-inbput"
            onChange={(e) => setNote(e.target.value)}
            value={note}
          />
          <Card>
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
                    {typeForm === "update" ? "Güncelle" : "Resim Yükle"}
                  </Button>
                </label>
                { image.imagePreviewUrl != null &&
                  <>
                    <p> Yüklenen resim; </p>
                    <img src={image.imagePreviewUrl} alt="icon" width="100" />  
                  </> }
            </CardContent>
          </Card>
          <TextField
            id="filled-number"
            type="number"
            variant="filled"
            label="0-5 arası öncelik"
            value={priority}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="secondary"
            className="button"
            type="submit"
          >
           {typeForm === "update" ? "Güncelle" : "Ekle" }
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default NoteForm;
