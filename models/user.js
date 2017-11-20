const Sequelize = require('sequelize');
const sequelize = new Sequelize('zzim', 'root', 'root', {dialect: 'mysql'})

const User = sequelize.define('user', {
	username: {
		type: Sequelize.STRING
	},
	password: {
		type: Sequelize.STRING
	}
});

module.exports = User;
