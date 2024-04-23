import Kerdes from "./Kerdes";

function Kerdesek(props) {

  return (
    <div>
      {props.tesztek.map((teszt, index) => (
        <div key={index} className='container'>
          <Kerdes teszt={teszt}/>
        </div>
      ))}
    </div>
  );
} export default Kerdesek;