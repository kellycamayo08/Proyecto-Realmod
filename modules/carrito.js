export const Carrito = (data, container) =>{


    data.forEach(element => {
       
    const {id, title, image,price} = element

    container.innerHTML += `
    
    <div id="${id}" class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img class="m-0" src="${image}" width="100%" height="200" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${price}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <button style="border:none; background:#00C194; color:white; width:100px ; height:40px" class="delete" id="${id}">Eliminar</button>
            </div>
        </div>
      </div>
    </div>
    
    `
    
})
}