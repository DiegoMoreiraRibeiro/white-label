import express from "express";
import UsuarioRoute from "./UsuarioRoute.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Curso de node" })
    })

    app.use(
        express.json(),
        UsuarioRoute
    )
}

export default routes