const DataTypes = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Task", {
        id: {
            type : DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate : {
                len: [1, 100]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        priority: {
            type: DataTypes.ENUM("low", "medium", "high"),
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM("pending", "in progress", "done"),
            allowNull: false
        }
    }, {
        timestamps: false
    })
};