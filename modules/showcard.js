export const ShowCard = (data, container) =>{


    container.innerHTML='';

    data.forEach(element => {
        const {id, title, price, image, ubicacion, baños, habitaciones, tamaño, tipo} = element
        
        container.innerHTML +=`
        
        <div  class=" card  " >
        <div style="height='220px'"  >
        <img " 
          src="${image}"
          class=" card-img-top " width="100%" height="250px"  alt="..."></div>
          <div id="${id}"  class="card-img-overlay imgg">
          
            <button>Buy</button>
            <h5 class="card-title precio">$ ${price}</h5>
          </div>
        <div class="card-body " id="${id}">
          <p>${tipo}</p>
          <h5 class="card-title m-0">${title}</h5>
          <section class="d-flex align-items-center">
            <img class="m-0 " src="./images/seccion2/map.svg" width="18" height="20" alt="">
            <p class="card-text mx-2 my-3">${ubicacion}</p>
          </section>
          <section class="d-flex ">
            <div class="d-flex align-items-center ">
              <img class="m-0 ico" src="./images/seccion2/bed.svg" width="18" height="20" alt="">
              <p class="m-0 be">Beds ${baños}</p>
            </div>
            <div class="d-flex align-items-center">
              <img class="m-0 ico" src="./images/seccion2/bath.svg" width="18" height="20" alt="">
              <p class="m-0 be">Baths ${habitaciones}</p>
            </div>
            <div class="d-flex align-items-center">
              <img class="m-0 ico" src="./images/seccion2/tamaño.svg" width="18" height="20" alt="">
              <p class="m-0 be">${tamaño}</p>
            </div>
          </section>
        </div>
      </div>
        
        
        `
 
    });

}

export const ShowCard1 = (data, container) =>{


    container.innerHTML='';

    data.forEach(element => {
        const {id, title, price, image, ubicacion, baños, habitaciones, tamaño, tipo} = element
        
        container.innerHTML +=`
        
        <div id="${id}" class="card" >
        <div style="height='220px'" >
        <img
          src="${image}"
          class="card-img-top" width="100%" height="250px"  alt="..."></div>
          <div class="card-img-overlay">
          
            <button>Buy</button>
            <h5 class="card-title precio">$ ${price}</h5>
          </div>
        <div class="card-body">
          <p>${tipo}</p>
          <h5 class="card-title m-0">${title}</h5>
          <section class="d-flex align-items-center">
            <img class="m-0 " src="../images/seccion2/map.svg" width="18" height="20" alt="">
            <p class="card-text mx-2 my-3">${ubicacion}</p>
          </section>
          <section class="d-flex ">
            <div class="d-flex align-items-center ">
              <img class="m-0 ico" src="../images/seccion2/bed.svg" width="18" height="20" alt="">
              <p class="m-0 be">Beds ${baños}</p>
            </div>
            <div class="d-flex align-items-center">
              <img class="m-0 ico" src="./images/seccion2/bath.svg" width="18" height="20" alt="">
              <p class="m-0 be">Baths ${habitaciones}</p>
            </div>
            <div class="d-flex align-items-center">
              <img class="m-0 ico" src="../images/seccion2/tamaño.svg" width="18" height="20" alt="">
              <p class="m-0 be">${tamaño}</p>
            </div>
          </section>
        </div>
      </div>
        
        
        `
 
    });

}