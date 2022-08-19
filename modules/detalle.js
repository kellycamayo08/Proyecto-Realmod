export const Detalle = (data, container) => {
    

        const {id, title, image, description, ubicacion,tipo, habitaciones, baños,tamaño, contrato, price, casa_inteligente, parqueadero, piscina, seguridad_privada, centro_medico, area_libreria, cama_king_size, zona_juegos_niños} = data;

        container.innerHTML += `
        
        <div id="${id}" class="d-flex">
        <div class="cont1">
            <h1>${title}</h1>
            <div class="cont11">
            <img src="${image}" width="100%" height="500px" alt="">
            </div>
            <h2> $${price}</h2>
            <div class="d-flex">
          <div class="cont111">
            <h6>Casa inteligente: ${casa_inteligente} </h6>
            <h6>Parqueadero: ${parqueadero}</h6>
            <h6>Piscina: ${piscina}</h6>
            <h6>Seguridad Privada: ${seguridad_privada}</h6>
          </div>
          <div class="cont111">
            <h6>Centro Medico: ${centro_medico} </h6>
            <h6>Area de libreria: ${area_libreria} </h6>
            <h6>Camas King Size: ${cama_king_size} </h6>
            <h6>Zonas de juegos para niños: ${zona_juegos_niños} </h6>
          </div>
        </div>
        </div>
        <div class="cont2">
          <h3>Descripción</h3>
          <p>${description}</p>
          <h3>Ubicacion</h3>
          <p>${ubicacion}</p>
          <h3>Tipo de propiedad</h3>
          <p>${tipo}</p>
          <section class="d-flex my-2 ">
            <div class="d-flex align-items-center m-3 ">
              <img class="m-0 ico " src="../images/seccion2/bed.svg" width="18" height="20" alt="">
              <p class="m-0 be mx-2">Beds ${baños}</p>
            </div>
            <div class="d-flex align-items-center m-3">
              <img class="m-0 ico" src="../images/seccion2/bath.svg" width="18" height="20" alt="">
              <p class="m-0 be mx-2">Baths ${habitaciones}</p>
            </div>
            <div class="d-flex align-items-center my-3">
              <img class="m-0 ico" src="../images/seccion2/tamaño.svg" width="18" height="20" alt="">
              <p class="m-0 be mx-2">${tamaño}</p>
            </div>
          </section>
          <h2>${contrato}</h2>
          <div class="d-flex">
            <button class="carrito" id="${id}" >Agregar al Carrito</button>
            <button class="favorito" id="${id}">Agregar a Favoritos</button>
          </div>
        </div>
        
    </div>
        
        
        `
}