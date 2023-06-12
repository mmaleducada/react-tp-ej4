import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({mostrarTareas, borrarTarea}) => {
    return (
        <ListGroup>
            {
                mostrarTareas.map((nombreTarea, indiceTarea) => <ItemTarea tareita={nombreTarea} key={indiceTarea} borrarTarea={borrarTarea} ></ItemTarea>)
            }
        </ListGroup>
    );
};

export default ListaTareas;
