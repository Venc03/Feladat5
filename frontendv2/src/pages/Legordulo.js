import Dropdown from 'react-bootstrap/Dropdown';

function Legorulo(props) {
    return (
        <Dropdown className='legord'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Kategória
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {props.kateg.map((kategoria, index) => (
                    <div key={index}>
                        <Dropdown.Item>{kategoria.kategorianev}</Dropdown.Item>
                    </div>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Legorulo;