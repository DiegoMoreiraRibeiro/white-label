import Album from "../Models/AlbumModel";
import Cliente from "../Models/ClienteModel";


class AlbumsRepository {

    async buscarAlbums() {
        try {
            return await Album.findAll({
                include: [
                    { model: Cliente, as: 'Cliente' }
                ],
            });
        } catch (error) {
            return 'Erro ao buscarAlbums: ' + error;
        }

    }

    async buscarAlbumPorId(id) {
        try {
            return await Album.findOne({
                include: [
                    { all: true }
                ],
                where: { id: id }
            });
        } catch (error) {
            return 'Erro ao buscarAlbumPorId: ' + error;
        }

    }

    async addAlbum(obj: Album) {
        try {
            return await Album.create(obj)
        } catch (error) {
            return 'Erro ao addAlbum: ' + error;
        }


    }

    async alterarAlbum(id, obj) {
        try {
            let album = await Album.findByPk(id);
            if (album == null)
                throw ('Album não encontrado')
            let newObj = obj;
            return await album.update(newObj);
        } catch (error) {
            return 'Erro ao alterarAlbum: ' + error;
        }

    }

    async excluirAlbum(id) {
        try {
            const album = await Album.findByPk(id);
            if (Album == null)
                throw ('Usuário não encontrado')
            return Album.destroy({ where: { id: album.id } });
        } catch (error) {
            return 'Erro ao excluirAlbum: ' + error;
        }

    }

}

export default AlbumsRepository