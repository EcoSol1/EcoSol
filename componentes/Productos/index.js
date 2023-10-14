import React, { useContext, useState } from "react";
import IMG from "../../images/11.png";
import IMG2 from "../../images/2n.png";
import IMG3 from "../../images/3n.png";
import IMG4 from "../../images/33.png";


export const ProductosLista = () => {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [descripcion, setDescripcion] = useState('');

    const mostrarModalConDescripcion = (descripcion) => {
        setDescripcion(descripcion);
        setMostrarModal(true);
    };

    const cerrarModal = () => {
        setDescripcion('');
        setMostrarModal(false);
    };

    return (
        <>
             
            <h1  className="title"><br/>        PRODUCTOS</h1>
            
            <div className="productos">
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG} alt="#" width="50" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Bolsa de compra</h1>
                        <p>Hogar </p>
                        <p className="price">$100</p>
                    </div>
                    <div className="buttom">
                    <div>
                            <a href="#" className="btn">
                                Comprar
                            </a>
                           
                        </div>

                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG2} alt="#" width="50" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Termo de acero</h1>
                        <p>Cocina </p>
                        <p className="price">$200</p>
                    </div>
                    <div className="buttom">
                    <div>
                            <a href="#" className="btn">
                                Comprar
                            </a>
                           
                        </div>

                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG3} alt="#" width="50" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Cepillo de bambu</h1>
                        <p>Higiene </p>
                        <p className="price">$400</p>
                    </div>
                    <div className="buttom">
                    <div>
                            <a href="#" className="btn">
                                Comprar
                            </a>
                           
                        </div>

                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG4} alt="#" width="50" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Capsulas de cafe</h1>
                        <p>Comida </p>
                        <p className="price">$500</p>
                    </div>
                    <div className="buttom">
                    <div>
                            <a href="#" className="btn">
                                Comprar
                            </a>
                           
                        </div>

                    </div>
                </div>

               
            </div>
        </>
    );
}
