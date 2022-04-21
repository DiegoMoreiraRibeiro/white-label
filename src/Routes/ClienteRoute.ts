import express from "express";
import ClienteController from "../Controllers/ClienteController";
import LoginService from "../Services/LoginService";

const router = express.Router();
const loginService = new LoginService();
router
    .get("/clientes", loginService.MiddlewareValidarJWT,ClienteController.listarClientes)
    .get("/clientes/:id", loginService.MiddlewareValidarJWT,ClienteController.listarClientePorId)
    .post("/clientes", loginService.MiddlewareValidarJWT,ClienteController.adicionarCliente)
    .put("/clientes/:id", loginService.MiddlewareValidarJWT,ClienteController.alterarCliente)
    .delete("/clientes/:id", loginService.MiddlewareValidarJWT,ClienteController.excluirCliente)

export default router;   