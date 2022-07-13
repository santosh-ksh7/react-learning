import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect } from "react";
import { useState } from "react";

export function Additionalinfo() {

  const { id } = useParams();

  // const movie = movielist[id];

  const[movie, setMovie] = useState({})

  useEffect(()=>{
    fetch(`https://62aaf0f8a62365888bd041ae.mockapi.io/movies/${id}`).then((data)=>data.json()).then((data)=>setMovie(data))
  }, [])

  const navigate = useNavigate();

  const style1 = {
    color: movie.rating > 8 ? "green" : "red"
  };

  return (
    <div className="addinfocont">
      <iframe
        width="100%"
        height="500"
        src={movie.trailer}
        title="RRR Trailer (Telugu) - NTR, Ram Charan, Ajay Devgn, Alia Bhatt | SS Rajamouli | 25th March 2022"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className="cont1">
        <p><strong>{movie.name}</strong></p>
        <p style={style1}>🌟<strong>{movie.rating}</strong></p>
      </div>
      <p>{movie.summary}</p>
      <Button onClick={() => navigate(-1)} variant="outlined" startIcon={<ArrowBackIosIcon />}>Back</Button>
    </div>
  );
}
