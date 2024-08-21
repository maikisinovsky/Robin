import { sequelize } from "../DB/dbcontroller";
import Sequelize from 'sequelize'

const User = sequelize.define('User', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    gmail: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
});

export { Users } 
