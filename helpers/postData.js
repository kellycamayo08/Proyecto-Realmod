export const PostData = async (url, objeto) => {
    try {

        await axios.post(url, objeto)
        alert("Informacion Creada Exitosamente")
       
        
    } catch (error) {
        alert("No se pudo agregar", error)
        console.log(error)
    }
}