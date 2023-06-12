import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({tareita, borrarTarea}) => {
    return <ListGroup.Item className="d-flex justify-content-between">
            {tareita}
            <Button variant="danger" onClick={()=>borrarTarea(tareita)}>Borrar</Button>
        </ListGroup.Item>;
    
};

export default ItemTarea;