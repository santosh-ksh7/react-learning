import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  poster: yup.string().min(5).required(),
  name: yup.string().required(),
  rating: yup.number().min(1).max(10).required(),
  summary: yup.string().min(20).required(),
  trailer: yup.string().min(5).required(),
})

export function Editinfo() {

  const [mv, setMv] = useState({});

  const [status, setStatus] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://62aaf0f8a62365888bd041ae.mockapi.io/movies/${id}`)
      .then((data) => data.json())
      .then((data) => setMv(data))
      .then(() => setStatus(true));
  }, []);


  return status ? <Editinfocomponent mv={mv} /> : "Loading";
}


function Editinfocomponent({ mv }) {

  const formik = useFormik({
    initialValues: {
        poster: mv.poster,
        name: mv.name,
        rating: mv.rating,
        summary: mv.summary,
        trailer: mv.trailer
    },
    validationSchema: formValidationSchema,
    onSubmit: (values)=>{
      fetch(`https://62aaf0f8a62365888bd041ae.mockapi.io/movies/${id}`, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "content-type": "application/json"
          }
        }).then(() => navigate("/movies"));
    }
  })

  // const [poster, setPoster] = useState(mv.poster);
  // const [name, setName] = useState(mv.name);
  // const [rating, setRating] = useState(mv.rating);
  // const [summary, setSummary] = useState(mv.summary);
  // const [trailer, setTrailer] = useState(mv.trailer);

  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <form className="movieform" onSubmit={formik.handleSubmit}>
      <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} id="standard-basic" label="Enter Movie Poster" variant="standard" value={formik.values.poster}  name="poster" />
      {formik.touched.poster && formik.errors.poster ? formik.errors.poster : null}
      <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} id="standard-basic" label="Enter Movie Name" variant="standard" value={formik.values.name} name="name" /> 
      {formik.touched.name && formik.errors.name ? formik.errors.name : null}
      <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} id="standard-basic" label="Enter Movie Rating" variant="standard" value={formik.values.rating}  name="rating" />
      {formik.touched.rating && formik.errors.rating ? formik.errors.rating : null}
      <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} id="standard-basic" label="Enter Movie Summary" variant="standard" value={formik.values.summary} name="summary" />
      {formik.touched.summary && formik.errors.summary ? formik.errors.summary : null}
      <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} id="standard-basic" label="Enter Movie Trailer" variant="standard" value={formik.values.trailer} name="trailer" />
      {formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : null}
      <Button type="submit"
        // onClick={() => {
        // let obj = {
        //   poster: poster,
        //   rating: rating,
        //   name: name,
        //   summary: summary,
        //   trailer: trailer
        // };
        // fetch(`https://62aaf0f8a62365888bd041ae.mockapi.io/movies/${id}`, {
        //   method: "PUT",
        //   body: JSON.stringify(obj),
        //   headers: {
        //     "content-type": "application/json"
        //   }
        // }).then(() => navigate("/movies"));
        // }} 
      variant="outlined">Update Movie</Button>
    </form>
  );
}
