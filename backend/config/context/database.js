import Sequelize from 'sequelize';

// CREATE DATABASE CV;
// CREATE USER 'pw'@'%' IDENTIFIED BY 'pw';
// GRANT ALL PRIVILEGES ON *.* TO 'pw'@'%' WITH GRANT OPTION;
// FLUSH PRIVILEGES;

const database = new Sequelize({
  host: 'localhost',
  port: 3306,
  username: 'pw',
  password: 'pw',
  database: 'CV',
  dialect: 'mysql', //mysql, postgres, sqlite, mariadb and mssql,
});

export { database };
