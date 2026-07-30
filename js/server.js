require("dotenv").config();

const puerto = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

console.log(`Servidor iniciado correctamente en el puerto ${puerto}`);
console.log("Variables de entorno cargadas correctamente");