
const url = "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=4";

const fetchApi = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching the dog api images:", error);
  }
};



document.addEventListener("DOMContentLoaded", async () => {

  const btnMostrar = document.getElementById('botonMostrar');
  const contenedor = document.getElementById('contenedor');

  const imagenesPerros = await fetchApi();

  //console.log(imagenesPerros)

  let estado = false;

  btnMostrar.addEventListener('click', () => {
    estado = true;

    if (estado) {

      contenedor.classList.remove('oculto');

      imagenesPerros.forEach((imagenPerro, index) => {

        const { url } = imagenPerro;

        const imagen = document.createElement('img')
        imagen.src = `${url}`;
        imagen.alt = `imagen de perro ${index + 1}`
        //Agregar clases de css para dar estilos a imagen
        imagen.class = "";

        const card = document.createElement('div');
        //Agregar las clases de css para dar estilos
        card.class = "";

        card.appendChild(imagen);

        contenedor.appendChild(card);

      });

    };


  });




});
