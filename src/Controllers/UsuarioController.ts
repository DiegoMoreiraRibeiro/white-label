import UsuariosRepository from "../repositories/UsuariosRepository"
import md5 from "md5";
class UsuarioController {


    static listarUsuarios = (req, res) => {
        new UsuariosRepository().buscarUsuarios()
            .then(function (rows) {
                res.json(rows)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    static listarUsuarioPorId = (req, res) => {
        const id = req.params.id;

        new UsuariosRepository().buscarUsuarioPorId(id)
            .then(function (rows) {
                res.json(rows)
            })
            .catch((err) => {
                res.json(err)
            })

    }

    static adicionarUsuario = (req, res) => {
        let usuario = req.body;
        usuario.senha = md5(usuario.senha)
        new UsuariosRepository().addUsuario(usuario)
            .then(function (rows) {
                res.json(rows)
            })
            .catch((err) => {
                res.json(err)
            })

    }

    static alterarUsuario = (req, res) => {
        const id = req.params.id;
        let usuario = req.body;
        usuario.senha = md5(usuario.senha)
        new UsuariosRepository().alterarUsuario(id, usuario)
            .then(function (rows) {
                res.json(rows)
            })
            .catch((err) => {
                res.json(err)
            })

    }

    static excluirUsuario = (req, res) => {
        const id = req.params.id;

        new UsuariosRepository().excluirUsuario(id)
            .then(function (rows) {
                res.json(rows)
            })
            .catch((err) => {
                res.json(err)
            })

    }


}

export default UsuarioController