import express from "express";
import routes from "./Routes/Index"
import db from "./Config/DbConnect"
import cors from 'cors';
import NotificaEnsaio from "./Schedule/NotificaEnsaio/NotificaEnsaio";

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
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "*");
    app.use(cors());
    next();
});

//NotificaEnsaio.Init();
routes(app);

export default app
