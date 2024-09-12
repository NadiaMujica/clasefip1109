
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

  const imagenesPerros = await fetchApi();

  console.log(imagenesPerros);

});
