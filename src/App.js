import express from "express";
import routes from "../src/Routes/Index"
import db from "./Config/DbConnect"

(async () => {
    try {
        await db.authenticate();
        const result = await db.sync();
        //console.log(result);
        console.log('Conectado!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados', error);
    }
})();


const app = express();
app.use(express.json())
routes(app);

export default app
