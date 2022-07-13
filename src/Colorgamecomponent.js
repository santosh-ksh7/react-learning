
export function Colorgamecomponent({ col }) {
  let style3 = {
    backgroundColor: col,
    width: "200px",
    height: "30px",
    margin: "10px",
    textAlign: "center",
    color: "white",
  };
  return <div style={style3}>{col}</div>;
}
