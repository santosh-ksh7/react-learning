import { useState } from "react";
import { Counter } from './Counter';
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';



export function Moviecomponent({ obj, id, button, editbutton }) {

  const [status, setStatus] = useState(true);

  const navigate = useNavigate();

  const style1 = {
    color: obj.rating > 8 ? "green" : "red"
  };

  const style2 = {
    display: status ? "block" : "none"
  };

  return (
    <Card className='moviecont1'>
      <img src={obj.poster} alt={obj.name} />
      <CardContent className="cont1" sx={{alignItems: "center"}}>
        <p><strong>{obj.name}</strong>
        <IconButton onClick={() => setStatus(!status)} color="primary" aria-label="info">
          {status ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </IconButton>
        <IconButton onClick={()=>navigate(`/movies/${id}`)} color="primary" aria-label="info">
          <InfoIcon />
        </IconButton>
        </p>
        <p style={style1}>🌟<strong>{obj.rating}</strong></p>
      </CardContent>
      <CardContent>{status ? <p style={style2}>{obj.summary}</p> : null}</CardContent>
      <CardActions>
        <Counter /> {button} {editbutton}
      </CardActions>
    </Card>
  );
}

