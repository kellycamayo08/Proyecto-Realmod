import { GetData } from "../helpers/getData.js";
import { Propiedad }  from "../helpers/urls.js";
import { ShowCard }  from "../modules/showcard.js";


const container = document.getElementById('container');

let dataPropied;

document.addEventListener('DOMContentLoaded', async() =>{
    
    dataPropied = await GetData(Propiedad);
    ShowCard(dataPropied, container);
})


document.addEventListener('click', ({target}) =>{
    if(target.classList.contains('imgg')){
        let idImg = target.id;
        let capturar = dataPropied.find(item => item.id == idImg)
        console.log(capturar)
        localStorage.setItem('propiedad', JSON.stringify(capturar))
        window.location.href = '../pages/detalle.html'
    }
})





