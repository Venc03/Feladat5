function Kerdes(props) {

    return (
        <div>
            <div className="kerdes">
                <h2>{props.teszt.kerdes}</h2>
            </div>
            <ul>
                <li><button>{props.teszt.v1}</button></li>
                <li><button>{props.teszt.v2}</button></li>
                <li><button>{props.teszt.v3}</button></li>
                <li><button>{props.teszt.v4}</button></li>
            </ul>
        </div>
    );
} export default Kerdes;