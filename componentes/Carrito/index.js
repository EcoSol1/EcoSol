import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";

export const Carrito = () =>{
const value=useContext(DataContext)
const[menu,setMenu]=value.menu

const tooglefalse=()=>{setMenu(false);}

const show1=menu? "carritos show":"carritos";
const show2=menu? "carrito show":"carrito";

    return(
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su Carrito</h2>
                <div className="carrito__center">
                    <div className="carrito__item">
                        <img src={""} alt=""/>
                        <div>
                            <h3>
                                title 
                            </h3>
                            <p className="price">$345</p>
                        </div>
                        <div>
                            <box-icon name = "up-arrow" type="solid"></box-icon>
                            <p className="cantidad">1</p>
                            <box-icon name="down-arrow" type="solid"></box-icon>
                        </div>
                        <div className="remove__item">
                            <box-icon name="trash"></box-icon>

                        </div>
                    </div>
                </div>

                <div className="carrito__footer">
                    <h3>Tolta: $3456</h3>
                    <button className="btn">Payme</button>
                </div>
            </div>
            
        </div>
    )
}