import { GetData } from "../helpers/getData.js";
import { PostData } from "../helpers/postData.js";
import { cart, fav, Propiedad } from "../helpers/urls.js";
import { Detalle } from "../modules/detalle.js";

const btnCar = document.querySelector('.carrito')
const container = document.querySelector('main')
let cartt = []
let favv = []

document.addEventListener('DOMContentLoaded' ,  () =>{
    let seleccionado = JSON.parse(localStorage.getItem('propiedad'));
     Detalle(seleccionado, container)
   
}) 


document.addEventListener('click', async(e) =>{

    let dataPropied = await GetData(Propiedad);
    if((e.target.classList.contains('carrito'))){
        let id = e.target.id;
        
        let capturar = dataPropied.find(item => item.id == id)
        // console.log(capturar)
        

        const key = JSON.parse(localStorage.getItem('carrito'))
        console.log(key)

        if(key !== null){
            //si existe
            PostData(cart,capturar)
            key.unshift(capturar);
            localStorage.setItem('carrito', JSON.stringify(key))

        }else{
            cartt.push(capturar)
            localStorage.setItem('carrito', JSON.stringify(cartt))
        }
    }
        
    
})

document.addEventListener('click', async(e) =>{

    let dataPropied = await GetData(Propiedad);
    if((e.target.classList.contains('favorito'))){
        let id = e.target.id;
        
        let capturar = dataPropied.find(item => item.id == id)
        // console.log(capturar)
        
    
        
        const key = JSON.parse(localStorage.getItem('favorito'))
        console.log(key)

        if(key !== null){
            //si existe
            PostData(fav,capturar)
            key.unshift(capturar);
            localStorage.setItem('favorito', JSON.stringify(key))

        }else{
            favv.push(capturar)
            localStorage.setItem('favorito', JSON.stringify(favv))
        }
    }
        
})