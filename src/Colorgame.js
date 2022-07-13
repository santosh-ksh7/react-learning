import { useState } from "react";
import { Colorgamecomponent } from './Colorgamecomponent';

export function Colorgame() {

  let arrinitial = ["red", "green", "blue"];

  const [ip, setIp] = useState(null);

  const style4 = {
    backgroundColor: ip
  };

  const [arr, setArr] = useState(arrinitial);

  return (
    <div>
      <input style={style4} onChange={(event) => setIp(event.target.value)} type="text" placeholder='Enter a color' />
      <button onClick={() => setArr([...arr, ip])}>Add Color</button>
      {arr.map((ele, index) => <Colorgamecomponent key={index} col={ele} />)}
    </div>
  );
}
