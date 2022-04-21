import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../Config/DbConnect'
import Cliente from './ClienteModel';

interface AlbumAttributes {
    id: number;
    descricao: string;
    data: Date,
    cliente_id: number,
    createdAt?: Date;
    updatedAt?: Date;
}

export interface AlbumInput extends Optional<AlbumAttributes, 'id'> { }

export interface AlbumOuput extends Required<AlbumAttributes> { }

class Album extends Model<AlbumAttributes, AlbumInput> implements AlbumAttributes {
    public id!: number
    public descricao: string;
    public data!: Date
    public cliente_id!: number
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Album.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cliente_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: 'Cliente',
            key: 'id'
        }
    },

}, {
    tableName: 'album',
    sequelize: sequelizeConnection,
})


Album.belongsTo(Cliente, {
    foreignKey: 'cliente_id', as: 'Cliente'
});

export default Album