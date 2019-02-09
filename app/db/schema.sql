DROP DATABASE IF EXISTS bills_db;
CREATE database bills_db;

USE bills_db;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NULL,
  rating_avg DECIMAL(10,4) NOT NULL DEFAULT 0,
  age INT(3) NOT NULL,
  gender BOOLEAN NOT NULL,
  bio VARCHAR(120) NULL,
  PRIMARY KEY (user_id)
);