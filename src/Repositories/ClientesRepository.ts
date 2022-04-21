import Cliente from "../Models/ClienteModel";


class ClientesRepository {

    async buscarClientes() {
        try {
            return await await Cliente.findAll();
        } catch (error) {
            return 'Erro ao buscarClientes: ' + error;
        }

    }

    async buscarClientePorId(id) {
        try {
            return await Cliente.findOne({where: {id: id}});
        } catch (error) {
            return 'Erro ao buscarClientePorId: ' + error;
        }

    }

    async addCliente(obj: Cliente) {
        try {
            return await Cliente.create(obj)
        } catch (error) {
            return 'Erro ao addCliente: ' + error;
        }


    }

    async alterarCliente(id, obj) {
        try {
            let cliente = await Cliente.findOne({where: {id: id}});
            if (cliente == null)
                throw ('Usuário não encontrado')
            let newObj = obj;
            return await cliente.update(newObj);
        } catch (error) {
            return 'Erro ao alterarCliente: ' + error;
        }

    }

    async excluirCliente(id) {
        try {
            const cliente = await Cliente.findOne({where: {id: id}});
            if (Cliente == null)
                throw ('Usuário não encontrado')
            return Cliente.destroy({ where: { id: cliente.id } });
        } catch (error) {
            return 'Erro ao excluirCliente: ' + error;
        }

    }

}

export default ClientesRepository