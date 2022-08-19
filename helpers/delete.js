export const Delete = async (url) => {


    try {

        await axios.delete(url)
        alert('Eliminado Correctamente')
        window.location.href="./carrito.html"
    } catch (error) {

        alert("hubo un error")

    }
}