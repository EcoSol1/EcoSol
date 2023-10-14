import React from "react";
import {Swicht, Route}from "react-router-dom";
import Inicio from "./Inicio";
import ProductosLista from "./Productos/index";

export const Paginas =() =>{
    return(
        <section>
            <Swicht>
                <Route path="/" exact component={Inicio} />
                <Route path="/productos/" exact Component={ProductosLista}/>
            </Swicht>
        </section>
    );
}