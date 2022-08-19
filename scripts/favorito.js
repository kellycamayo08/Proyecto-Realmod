
import { GetData } from "../helpers/getData.js";
import { fav } from "../helpers/urls.js";
import { Favorito } from "../modules/favorito.js";


const container = document.querySelector('main');


document.addEventListener('DOMContentLoaded', async() =>{
    
   let dataPropied = await GetData(fav);

    Favorito(dataPropied, container);
})

document.addEventListener('click', async(e) =>{
    if(e.target.classList.contains('delete')){
        let id = e.target.id;
        // console.log(id)
        let url =`${fav}/${id} `

        await axios.delete(url)
        alert('Eliminado Correctamente')
        window.location.href="./favorito.html"
    }
        
    
})