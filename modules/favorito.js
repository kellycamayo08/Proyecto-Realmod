export const Favorito = (data, container) => {
    
    data.forEach(element => {

    const {id, title, image, ubicacion, contrato, price} = element

    container.innerHTML += `
    
    <div id="${id}" class="card my-3" style="width: 18rem;">
    <img src="${image}" width="100%" class="card-img-top m-0" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${price}</li>
      <li class="list-group-item">${ubicacion}</li>
      <li class="list-group-item">${contrato}</li>
    </ul>
    <div class="card-body">
    <button style="border:none; margin-left:70px; background:#00C194; color:white; width:100px; height:40px;" class="delete" id="${id}">Eliminar</button>
      
    </div>
  </div>
    
    
    `
})
}