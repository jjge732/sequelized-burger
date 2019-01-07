module.exports = (sequelize, DataTypes) => {
    const Burger = sequelize.define('Burger', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        burgerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });
    return Burger;
};
