import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TypeEvents from "./Pages/TypeEvents/TypeEvents";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="Tipo de Evento" element={<TypeEvents/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes