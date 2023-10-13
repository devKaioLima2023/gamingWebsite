const Sequelize = require("sequelize");
const conexao = new Sequelize("gamestorrent","root","Z16682604l",{
    host: "localhost",
    dialect: "mysql"
});


module.exports = conexao;