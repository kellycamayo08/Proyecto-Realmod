import { PostData } from "../helpers/postData.js";
import { user } from "../helpers/urls.js";


const form = document.querySelector('form');


form.addEventListener('submit', async (e) =>{
    e.preventDefault();

    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let ciudad = document.getElementById('ciudad').value;
    let estadoC = document.getElementById('estadocivil').value;
    let edad = document.getElementById('edad').value;

    let infoUser = {
        id:crypto.randomUUID(),
        nombres: nombres,
        apellidos: apellidos,
        email: email,
        password: password,
        ciudad: ciudad,
        estadoC: estadoC,
        edad: edad
    }

    await PostData(user, infoUser);
    form.reset();
})


