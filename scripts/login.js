import { GetData } from "../helpers/getData.js";
import { user } from "../helpers/urls.js";


const form = document.querySelector("form");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let data = await GetData(user);

    data.forEach(element => {
        const { email: emailUser, password: passUser, tipo } = element;


        if (tipo == "admi" && emailUser == email && passUser == password) {
            alert("Bienvenido Administrador")

            let dataUser = data.find(item => item.email == email && item.password == password);
            sessionStorage.setItem('infoUser', JSON.stringify(dataUser))
            form.reset();

            window.location.href = './admin.html'
        } else
            if ((emailUser == email) && (passUser == password)) {

                let dataUser = data.find(item => item.email == email && item.password == password);
                sessionStorage.setItem('infoUser', JSON.stringify(dataUser))
                form.reset();


                window.location.href = './home.html'
            } else if (email == "" && password == "") {
                alert("Por favor ingresar datos")

               
            }
    })
})
