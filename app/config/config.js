var env = {
    development: {
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
      host: process.env.MYSQL_HOST,
      dialect: "mysql"
    },
    test: {
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
      host: process.env.MYSQL_HOST,
      dialect: "mysql"
    },
    production: {
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
      host: process.env.MYSQL_HOST,
      dialect: "mysql"
    }
  };
  
  module.exports = env;
  