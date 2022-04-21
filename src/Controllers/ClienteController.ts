import ClientesRepository from "../repositories/ClientesRepository"
import md5 from "md5";

class ClienteController {


    static listarClientes = (req, res) => {
        new ClientesRepository().buscarClientes()
            .then(function (rows) {
                res.json(rows)
            })
            .catch((err) => {
                res.status(500).send({ error: 'Erro ao Listar Cliente' });
            })

    }

    static listarClientePorId = (req, res) => {
        const id = req.params.id;

        new ClientesRepository().buscarClientePorId(id)
            .then(function (rows) {
                res.json(rows)
            })
            .catch((err) => {
                res.status(500).send({ error: 'Erro ao Listar Cliente por Id' });
            })

    }

    static adicionarCliente = (req, res) => {
        let Cliente = req.body;
        new ClientesRepository().addCliente(Cliente)
            .then(function (rows) {
                res.status(200).json(rows)
            })
            .catch((err) => {
                res.status(500).send({ error: 'Erro ao adicionar Cliente' });
            })

    }

    static alterarCliente = (req, res) => {
        const id = req.params.id;
        let Cliente = req.body;
        new ClientesRepository().alterarCliente(id, Cliente)
            .then(function (rows) {
                res.json(rows)
            })
            .catch((err) => {
                res.status(500).send({ error: 'Erro ao alterar Cliente' });
            })

    }

    static excluirCliente = (req, res) => {
        const id = req.params.id;

        new ClientesRepository().excluirCliente(id)
            .then(function (rows) {
                res.json({id: id})
            })
            .catch((err) => {
                res.status(500).send({ error: 'Erro ao excluir Cliente' });
            })

    }


}

export default ClienteController