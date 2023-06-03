import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  
  return (
    <>
    <Container className='my-5 main'>
      <h1 className='display-4 text-center'>Lista de tareas</h1>
      <hr />
    </Container>
    <footer className='text-center bg-dark text-light p-4'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
