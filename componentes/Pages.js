import React from "react";
import { Routes, Route} from "react-router-dom";
import {Inicio} from "./Inicio";
import {ProductosLista} from "./Productos/index";
import { Switch } from 'react-router-dom';



export const Pages =() =>{
    return(
        <section>
            <Routes>
            <Route path="/" exact Component={Inicio}/>;
            <Route path="/productos" exact Component={ProductosLista}  />
 
            </Routes>
        </section>
    );
}