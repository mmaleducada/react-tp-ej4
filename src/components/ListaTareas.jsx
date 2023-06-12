import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({mostrarTareas}) => {
    return (
        <ListGroup>
            {
                mostrarTareas.map((nombreTarea, indiceTarea) => <ItemTarea tareita={nombreTarea} key={indiceTarea}></ItemTarea>)
            }
        </ListGroup>
    );
};

export default ListaTareas;
