import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../Config/DbConnect'

interface UsuarioAttributes {
    id: number;
    nome: string;
    email: string;
    senha?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UsuarioInput extends Optional<UsuarioAttributes, 'id'> { }

export interface UsuarioOuput extends Required<UsuarioAttributes> { }

class Usuario extends Model<UsuarioAttributes, UsuarioInput> implements UsuarioAttributes {
    public id!: number
    public nome!: string
    public email!: string
    public senha!: string

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Usuario.init({
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
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Usuario',
    sequelize: sequelizeConnection,
})

export default Usuario