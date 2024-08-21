import Sequelize from 'sequelize' 

const sequelize = new Sequelize ('robin', 'root', 'maiakisinovsky', {
    host: '127.0.0.1',
    dialect: 'mysql',
    host: 3306
}); 

sequelize.authenticate (

)

export { sequelize }