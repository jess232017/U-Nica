import React from 'react';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../view/inicio/Inicio"
import Prueba from "../view/prueba/Prueba"
import Detalle from "../view/detalle/Detalle"

const Content = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Inicio /> }/>
                <Route exact path="/prueba" element={ <Prueba /> }/>
                <Route exact path="/detalle" element={ <Detalle /> }/>
            </Routes>
        </BrowserRouter>
    );
}
 
export default Content;