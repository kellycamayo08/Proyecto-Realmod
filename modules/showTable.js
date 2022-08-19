export const ShowTable = (data, container) => {


    container.innerHTML = `
    
    <tr class="text-center">
    <th class="m-0" scope="col">Id</th>
    <th class="m-0" scope="col">Titulo</th>
    <th scope="col">Precio</th>
    <th scope="col">Descripcion</th>
    <th scope="col">Ubicación</th>
    <th scope="col">Imagen</th>
    <th scope="col">Tipo</th>
    <th scope="col">Habitaciones</th>
    <th scope="col">Baños</th>
    <th scope="col">Tamaño</th>
    <th scope="col">Contrato</th>
    <th scope="col">Casa Inteligente</th>
    <th scope="col">Parqueadero</th>
    <th scope="col">Piscina</th>
    <th scope="col">Seguridad Privada</th>
    <th scope="col">Centro Medico</th>
    <th scope="col">Area de Libreria</th>
    <th scope="col">Cama King Size</th>
    <th scope="col" >Zona de Juegos </th>
    <th scope="col" >Opciones </th>

  </tr>
    
    `
    data.forEach(item => {
        const {id, title, price, description, ubicacion, image,
        tipo, habitaciones, baños, tamaño, contrato, casa_inteligente,
    parqueadero, piscina, seguridad_privada, centro_medico, area_libreria,
    cama_king_size, zona_juegos_niños} = item

        container.innerHTML += `
        
        <tr class="m-0">
        <td>${id}</td>
        <td>${title}</td>
        <td>${price}</td>
        <td>${description}</td>
        <td>${ubicacion}</td>
        <td><img class="m-0" width="200px" height="150" src="${image}" alt=""></td>
        <td>${tipo}</td>
        <td>${habitaciones}</td>
        <td>${baños}</td>
        <td>${tamaño}</td>
        <td>${contrato}</td>
        <td>${casa_inteligente}</td>
        <td>${parqueadero}</td>
        <td>${piscina}</td>
        <td>${seguridad_privada}</td>
        <td>${centro_medico}</td>
        <td>${area_libreria}</td>
        <td>${cama_king_size}</td>
        <td>${zona_juegos_niños}</td>
        <td scope="col" > <button class="btn delete btn-danger my-2" id="${id}">Eliminar</button></td>
        
      </tr>

        `
    })

}