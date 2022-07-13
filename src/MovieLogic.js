import { Moviecomponent } from './Moviecomponent';
import {useEffect} from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { API } from './global';


export function MovieLogic() {

  const[arr,setArr] = useState([]);

  const getdata = () => {
    fetch(`${API}/movies`).then((data) => data.json()).then((data)=>setArr(data))
  }

  const deletedata=(id)=>{
    console.log(id);
    fetch(`${API}/movies/${id}`, {
      method: "DELETE"
    }).then(()=> getdata())
  }

  const navigate = useNavigate()

  useEffect(()=>getdata(), [])

  return <div className="App">
    {arr.map((ele, index) => <Moviecomponent obj={ele} key={ele._id} id={ele._id} 
    button={<IconButton style={{marginLeft: "auto"}} color="error" onClick={() => deletedata(ele._id)}><DeleteIcon /></IconButton>}
    editbutton={<IconButton color="secondary" onClick={()=> navigate(`/movies/edit/${ele._id}`)}><EditIcon /></IconButton>} />)}
  </div>;
}
