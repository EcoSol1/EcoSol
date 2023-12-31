import React, {useState, useEffect, createContext} from "react";
import Data from "../Data.js"
export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [productos, setProductos] = useState([])
const[menu,setMenu]=useState(true);
const[carrito,setCarrito]=useState([])

    useEffect(() => {
        const producto = Data.items
        if(producto ){
            setProductos(producto)
        }else{
            setProductos([])
        }


        setProductos(producto)

    }, [])
     
const addCarrito=(id)=>{
    const check=carrito.every(item=>{
        return item.id !==id;
    })
    if(check){
        const data=productos.filter(producto =>{
            return producto.id===id
        })
        setCarrito([...carrito,...data])
    }else{
        alert ("el producto se ha añadido al carrito")
    }
}
    const value  = {
        productos:[productos],
        menu:[menu,setMenu],
        addCarrito:addCarrito,
        carrito:[carrito,setCarrito]
    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}