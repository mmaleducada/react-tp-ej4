import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({tareita}) => {
    return <ListGroup.Item className="d-flex justify-content-between">
            {tareita}
            <Button variant="danger">Borrar</Button>
        </ListGroup.Item>;
    
};

export default ItemTarea;