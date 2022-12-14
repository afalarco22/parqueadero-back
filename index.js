import express from "express";
import dataBase from "./database/dataBase.js";
import clienteRouter from "./routes/ClienteRoute.js";
import ingresoRouter from "./routes/IngresoRoute.js";
import cors from 'cors'
import productoRouter from "./routes/ProductoRoute.js";
import ventaRouter from "./routes/VentaRoute.js";

const app = express();
const port = 3100;

try {
    await dataBase.authenticate();
    console.log("Se conectó a la base de datos correctamente");
    console.log("Servidor corriendo en el puerto " + port);
    console.log(`http://localhost:${port}`);
    
} catch (error) {
    console.log("Conexión no exitosa "+error);
    
}

app.use(cors());
app.use(express.json());
app.use('/clientes', clienteRouter) // ruta clientes
app.use('/productos', productoRouter) // ruta productos
app.use('/ingresos', ingresoRouter) // ruta ingresos
app.use('/ventas', ventaRouter) // ruta ventas




app.listen(port, () => {
    /* console.log("Servidor corriendo en el puerto " + port);
    console.log(`http://localhost:${port}`); */
});