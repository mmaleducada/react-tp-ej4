import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
    const tareasDelLocalStorage = JSON.parse(localStorage.getItem("listaTareas")) || [];
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState(tareasDelLocalStorage);

    // ciclo de vida de un componente
    useEffect(() =>{
        localStorage.setItem("listaTareas", JSON.stringify(tareas))
    }, [tareas])

    const handleSubmit = (e) => {
        e.preventDefault();
        setTareas([...tareas, tarea]);
        setTarea("");
    };
    
    const borrarTarea= (nombreTarea) => {
        let copiaListaTareas = tareas.filter((itemTarea)=> itemTarea !== nombreTarea);
        setTareas(copiaListaTareas);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control type="text"placeholder="ingrese una tarea" onChange={(e) => setTarea(e.target.value)} value={tarea} />
                    <Button variant="info" type="submit">Agregar</Button>
                </Form.Group>
            </Form>
             <ListaTareas mostrarTareas={tareas} borrarTarea={borrarTarea} ></ListaTareas> {/*se agrega un props al listado, donde le enviamos la informacion del state tareas (array que esta guardando todas las tareas que vienen del valor del input) */}
        </>
    );
};

export default FormularioTarea;