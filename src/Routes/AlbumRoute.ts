import express from "express";
import AlbumController from "../Controllers/AlbumController";
import LoginService from "../Services/LoginService";

const router = express.Router();
const loginService = new LoginService();

router
    .get("/Albums", loginService.MiddlewareValidarJWT, AlbumController.listarAlbums)
    .get("/Albums/:id",loginService.MiddlewareValidarJWT, AlbumController.listarAlbumPorId)
    .post("/Albums", loginService.MiddlewareValidarJWT,AlbumController.adicionarAlbum)
    .put("/Albums/:id", loginService.MiddlewareValidarJWT,AlbumController.alterarAlbum)
    .delete("/Albums/:id", loginService.MiddlewareValidarJWT,AlbumController.excluirAlbum)

export default router;   