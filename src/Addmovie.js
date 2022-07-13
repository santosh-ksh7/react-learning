import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import * as yup from 'yup';
import { API } from "./global";

const formValidationSchema = yup.object({
      poster: yup.string().min(5).required(),
      name: yup.string().required(),
      rating: yup.number().min(1).max(10).required(),
      summary: yup.string().min(20).required(),
      trailer: yup.string().min(5).required(),
})

export function Addmovie() {

  // const [poster, setPoster] = useState(null);
  // const [name, setName] = useState(null);
  // const [rating, setRating] = useState(null);
  // const [summary, setSummary] = useState(null);
  // const [trailer, setTrailer] = useState(null);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
      poster: "",
      name: "",
      rating: "",
      summary: "",
      trailer: ""
    },
    validationSchema: formValidationSchema,
    onSubmit:(values)=> {
        fetch(`${API}/movies` ,{
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type" : "application/json"
        }
      }).then(navigate("/movies"))
    }
  })

  // const run1 = () => {
    // const newmv = {
    //   poster: poster,
    //   name: name,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer
    // };
    // fetch("${API}/movies" ,{
    //   method: "POST",
    //   body: JSON.stringify(newmv),
    //   headers: {
    //     "content-type" : "application/json"
    //   }
    // }).then(navigate("/movies"))
  // };


  return (
    <form className="movieform" onSubmit={formik.handleSubmit}>
      <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} id="standard-basic" label="Enter Movie Poster" variant="standard" name="poster" />
      {formik.touched.poster && formik.errors.poster ? formik.errors.poster : null}
      <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} id="standard-basic" label="Enter Movie Name" variant="standard" name="name" />
      {formik.touched.name && formik.errors.name ? formik.errors.name : null}
      <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} id="standard-basic" label="Enter Movie Rating" variant="standard" name="rating" />
      {formik.touched.rating && formik.errors.rating ? formik.errors.rating : null}
      <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} id="standard-basic" label="Enter Movie Summary" variant="standard" name="summary" />
      {formik.touched.summary && formik.errors.summary ? formik.errors.summary : null}
      <TextField onChange={formik.handleChange} onBlur={formik.handleBlur} id="standard-basic" label="Enter Movie Trailer" variant="standard" name="trailer" />
      {formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : null}
      <Button type="submit" variant="outlined">Add Movie</Button>
    </form>
  );
}
