import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Detail } from './Components/Detail';
import Search from './Components/Search';
import { Container, Navbar } from 'react-bootstrap';
import { Track } from './type/Interface';

function App() {
  return (
    <div className="App">
  <Navbar className='fluid mb-2' bg="primary">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
  </Navbar>
      
        <BrowserRouter>
        <Routes>
        <Route path= "/" element={ <Search  />} /> 
        <Route path= "/detail" element={ <Detail  /> } /> 

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
