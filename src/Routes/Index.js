import express from "express";
import UsuarioRoute from "./UsuarioRoute"
import ClienteRoute from "./ClienteRoute"
import AlbumRoute from "./AlbumRoute"
import LoginRoute from "./LoginRoute"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Curso de node" })
    })

    app.use(
        express.json(),
        UsuarioRoute,
        ClienteRoute,
        AlbumRoute,
        LoginRoute
    )
}

export default routes