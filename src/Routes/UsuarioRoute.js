import express from "express";
import UsuarioController from "./../Controllers/UsuarioController";

const router = express.Router();

router
    .get("/usuarios", UsuarioController.listarUsuarios)
    .get("/usuarios/:id", UsuarioController.listarUsuarioPorId)
    .post("/usuarios", UsuarioController.adicionarUsuario)
    .put("/usuarios/:id", UsuarioController.alterarUsuario)
    .delete("/usuarios/:id", UsuarioController.excluirUsuario)

export default router;   