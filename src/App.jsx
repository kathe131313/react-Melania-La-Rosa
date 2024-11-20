import './App.css';
import Home from './paginas/Home';
import Layout from './paginas/Layout';
import NoPage from './paginas/NoPage';
import Servicios from './paginas/Servicios';
import Sobremi from './paginas/Sobremi';
import DetalleServicio from './paginas/DetalleServicio';
import {BrowserRouter, Routes,Route} from "react-router-dom";


function App() {
  

  return (
    <>
    
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="category/:categoria" element={<Servicios />} />
                <Route path='category/sobremi' element={<Sobremi/>}/>
                <Route path="/servicios/:id" element={<DetalleServicio/>}/>
                <Route path='*' element={<NoPage/>}/>
            </Route>
        </Routes>
      </BrowserRouter>

    
    </>
  )
}

export default App