import { GetData } from "../helpers/getData.js";
import { PostData } from "../helpers/postData.js";
import { Propiedad } from "../helpers/urls.js";
import { ShowTable } from "../modules/showTable.js";

const container_tab = document.querySelector('table');
const btnCrear = document.getElementById('crear')
const btnbuscar = document.getElementById('buscar')
const btneditar = document.getElementById('buscar')


//mostrar propiedades en la tabla
document.addEventListener('DOMContentLoaded', async () => {
    let data = await GetData(Propiedad);
    ShowTable(data, container_tab)
})

//Crear una propiedad nueva
btnCrear.addEventListener('click', async (e) => {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value
    const preci = document.getElementById('precio').value
    const descrip = document.getElementById('descripcion').value
    const ubicacion = document.getElementById('ubicacion').value
    const imagen = document.getElementById('imagen').value
    const tipoP = document.getElementById('tipo').value
    const habit = document.getElementById('habitaciones').value
    const baños = document.getElementById('baños').value
    const contrato = document.getElementById('contrato').value
    const tamaño = document.getElementById('tamaño').value
    const casaI = document.getElementById('casa').value
    const parqueadero = document.getElementById('parqueadero').value
    const piscina = document.getElementById('piscina').value
    const seguridadP = document.getElementById('seguridad').value
    const centroM = document.getElementById('centro').value
    const areaL = document.getElementById('libreria').value
    const camaK = document.getElementById('cama').value
    const zonaJ = document.getElementById('zona').value

    let crearPropiedad = {
        id: crypto.randomUUID(),
        title: titulo,
        price: preci,
        description: descrip,
        ubicacion: ubicacion,
        image: imagen,
        tipo: tipoP,
        habitaciones: habit,
        baños: baños,
        contrato: contrato,
        tamaño: tamaño,
        casa_inteligente: casaI,
        parqueadero: parqueadero,
        piscina: piscina,
        seguridad_privada: seguridadP,
        centro_medico: centroM,
        area_libreria: areaL,
        cama_king_size: camaK,
        zona_juegos_niños: zonaJ
    }
    if ((titulo == "") && (precio == "")) {
        alert('Ingresar Datos Por favor')
    } else {
        await PostData(Propiedad, crearPropiedad);

        window.location.href = "./admin.html"
    }


})

//buscar
btnbuscar.addEventListener('click', async () => {
    const titulo = document.getElementById('titulo').value
    console.log(titulo)

    const { data } = await axios.get(Propiedad)

    let buscar = data.find(item => item.title == titulo)

    console.log(buscar)
    const {id ,title, image, description, ubicacion, tipo, habitaciones, baños, tamaño, contrato, price, casa_inteligente, parqueadero, piscina, seguridad_privada, centro_medico, area_libreria, cama_king_size, zona_juegos_niños } = buscar

    document.getElementById('titulo').value = title
    document.getElementById('precio').value = price
    document.getElementById('descripcion').value = description
    document.getElementById('ubicacion').value = ubicacion
    document.getElementById('imagen').value = image
    document.getElementById('tipo').value = tipo
    document.getElementById('habitaciones').value = habitaciones
    document.getElementById('baños').value = baños
    document.getElementById('contrato').value = contrato
    document.getElementById('tamaño').value = tamaño
    document.getElementById('casa').value = casa_inteligente
    document.getElementById('parqueadero').value = parqueadero
    document.getElementById('piscina').value = piscina
    document.getElementById('seguridad').value = seguridad_privada
    document.getElementById('centro').value = centro_medico
    document.getElementById('libreria').value = area_libreria
    document.getElementById('cama').value = cama_king_size
    document.getElementById('zona').value = zona_juegos_niños
    document.getElementById('id').value = id
})

//editar
btneditar.addEventListener('click', async (e) => {
    e.preventDefault()
    const idP = document.getElementById('id').value
    const titulo = document.getElementById('titulo').value
    const precio = document.getElementById('precio').value
    const descrip = document.getElementById('descripcion').value
    const ubicacion = document.getElementById('ubicacion').value
    const imagen = document.getElementById('imagen').value
    const tipoP = document.getElementById('tipo').value
    const habit = document.getElementById('habitaciones').value
    const baños = document.getElementById('baños').value
    const contrato = document.getElementById('contrato').value
    const tamaño = document.getElementById('tamaño').value
    const casaI = document.getElementById('casa').value
    const parqueadero = document.getElementById('parqueadero').value
    const piscina = document.getElementById('piscina').value
    const seguridadP = document.getElementById('seguridad').value
    const centroM = document.getElementById('centro').value
    const areaL = document.getElementById('libreria').value
    const camaK = document.getElementById('cama').value
    const zonaJ = document.getElementById('zona').value

    let crearPropiedad = {
        id: idP,
        title: titulo,
        price: precio,
        description: descrip,
        ubicacion: ubicacion,
        image: imagen,
        tipo: tipoP,
        habitaciones: habit,
        baños: baños,
        contrato: contrato,
        tamaño: tamaño,
        casa_inteligente: casaI,
        parqueadero: parqueadero,
        piscina: piscina,
        seguridad_privada: seguridadP,
        centro_medico: centroM,
        area_libreria: areaL,
        cama_king_size: camaK,
        zona_juegos_niños: zonaJ
    }
    await axios.put(`${Propiedad}/${idP}`, crearPropiedad)
    alert('Modificado Correctamente')

})




//delete
document.addEventListener('click', async ({ target }) => {
    if (target.classList.contains('delete')) {
        let id = target.id

        await axios.delete(`${Propiedad}/${id}`)
        alert("Eliminado Correctamente")
        window.location.href = "./admin.html"
    }
})

