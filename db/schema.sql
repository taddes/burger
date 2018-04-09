  CREATE DATABASE burgers_db;
  USE burgers_db;

  CREATE TABLE burgers(
  id INT AUTO_INCREMENT,
  burger_name varchar(50) NOT NULL,
  devoured BOOLEAN default false,
  date TIMESTAMP.
  PRIMARY KEY (id),
  );