
import { GetData } from "../helpers/getData.js";
import { cart } from "../helpers/urls.js";
import { Carrito } from "../modules/carrito.js";


const container = document.querySelector('main');


document.addEventListener('DOMContentLoaded', async() =>{
    
   let dataPropied = await GetData(cart);

    Carrito(dataPropied, container);
})

document.addEventListener('click', async(e) =>{
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        let id = e.target.id;
        // console.log(id)
        let url =`${cart}/${id} `

        await axios.delete(url)
        Swal.fire(
            'Eliminado',
            'Correctamente',
            'success'
          )
        window.location.href="./carrito.html"

    }
        
    
})