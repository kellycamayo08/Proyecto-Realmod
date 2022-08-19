

let inputNombre = document.getElementById('nombres');
let inputApellido = document.getElementById('apellidos');
let inputPass = document.getElementById('password');
let inputEmail = document.getElementById('email');
let inputCiudad = document.getElementById('ciudad');
let inputEdad = document.getElementById('edad');
let inputEstado = document.getElementById('estado');
let form = document.querySelector('form');
let infoUser;
let btnperfil = document.querySelector('.perfil')

document.addEventListener('DOMContentLoaded' , () => {
    infoUser = JSON.parse(sessionStorage.getItem('infoUser'));

    const { nombres, password, email, edad, apellidos, ciudad, estadoC} = infoUser;

    inputNombre.value = nombres;
    inputApellido.value = apellidos;
    inputPass.value = password;
    inputEmail.value = email;
    inputCiudad.value = ciudad;
    inputEdad.value = edad;
    inputEstado.value = estadoC;
})

