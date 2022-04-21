import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../Config/DbConnect'

interface ClienteAttributes {
    id: number;
    nome: string;
    email: string;
    celular: number;
    aniversario: Date,
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ClienteInput extends Optional<ClienteAttributes, 'id'> { }

export interface ClienteOuput extends Required<ClienteAttributes> { }

class Cliente extends Model<ClienteAttributes, ClienteInput> implements ClienteAttributes {
    public id!: number
    public nome!: string
    public email!: string
    public celular!: number
    public aniversario!: Date

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Cliente.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    celular: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    aniversario: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'Cliente',
    sequelize: sequelizeConnection,
})

export default Cliente