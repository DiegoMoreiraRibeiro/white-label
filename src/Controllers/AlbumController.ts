import AlbumsRepository from "../repositories/AlbumRepository"

class AlbumController {


    static listarAlbums = (req, res) => {
        new AlbumsRepository().buscarAlbums()
            .then(function (rows) {
                res.json(rows)
            })
            .catch((err) => {
                res.status(500).send({ error: 'Erro ao Listar Album' });
            })

    }

    static listarAlbumPorId = (req, res) => {
        const id = req.params.id;

        new AlbumsRepository().buscarAlbumPorId(id)
            .then(function (rows) {
                res.json(rows)
            })
            .catch((err) => {
                res.status(500).send({ error: 'Erro ao Listar Album por Id' });
            })

    }

    static adicionarAlbum = (req, res) => {
        let Album = req.body;
        new AlbumsRepository().addAlbum(Album)
            .then(function (rows) {
                res.json(rows)
            })
            .catch((err) => {
                res.status(500).send({ error: 'Erro ao Adicionar Album' });
            })

    }

    static alterarAlbum = (req, res) => {
        const id = req.params.id;
        let Album = req.body;
        new AlbumsRepository().alterarAlbum(id, Album)
            .then(function (rows) {
                res.json(rows)
            })
            .catch((err) => {
                res.status(500).send({ error: 'Erro ao Alterar Album' });
            })

    }

    static excluirAlbum = (req, res) => {
        const id = req.params.id;
        new AlbumsRepository().excluirAlbum(id)
            .then(function (rows) {
                res.json({id: id})
            })
            .catch((err) => {
                res.status(500).send({ error: 'Erro ao Excluir Album' });
            })

    }


}

export default AlbumController