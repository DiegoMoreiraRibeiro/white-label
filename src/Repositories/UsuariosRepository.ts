import UsuarioModel from "../Models/UsuarioModel"
import LoginViewModel from "../Models/ViewModel/LoginViewModel";


class UsuariosRepository {

    async buscarUsuarios() {
        try {
            return await await UsuarioModel.findAll();
        } catch (error) {
            return 'Erro ao buscarUsuarios: ' + error;
        }

    }

    async buscarUsuarioPorId(id) {
        try {
            return await UsuarioModel.findOne({ where: { id: id } });
        } catch (error) {
            return 'Erro ao buscarUsuarioPorId: ' + error;
        }

    }

    async addUsuario(obj) {
        try {
            return await UsuarioModel.create(obj)
        } catch (error) {
            return 'Erro ao addUsuario: ' + error;
        }


    }

    async alterarUsuario(id, obj) {
        try {
            const usuario = await UsuarioModel.findByPk(id);
            if (usuario == null)
                throw ('Usuário não encontrado')
            usuario.nome = obj.nome;
            usuario.email = obj.email;
            usuario.senha = obj.senha;
            return await usuario.save();
        } catch (error) {
            return 'Erro ao alterarUsuario: ' + error;
        }

    }

    async excluirUsuario(id) {
        try {
            const usuario = await UsuarioModel.findByPk(id);
            if (usuario == null)
                throw ('Usuário não encontrado')
            return UsuarioModel.destroy({ where: { id: usuario.id } });
        } catch (error) {
            return 'Erro ao excluirUsuario: ' + error;
        }

    }


    async validarUsuario(login: LoginViewModel): Promise<UsuarioModel> {
        try {
            return await UsuarioModel.findOne({
                where: { email: login.email } && { senha: login.senha }
            });
        } catch (error) {
            return null;
        }

    }

}

export default UsuariosRepository