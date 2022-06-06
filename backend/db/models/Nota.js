
module.exports = (sequelize, dataTypes) => {
    let alias = "Nota";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        content: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
    }

    let config = {
        tableName: "notas",
        timestamps: false,
    }
    const Nota = sequelize.define(alias, cols, config);

    return Nota;

}