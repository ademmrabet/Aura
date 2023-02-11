DROP DATABASE IF EXISTS store;
CREATE DATABASE IF NOT EXISTS store;
USE store;

CREATE TABLE IF NOT EXISTS user(
    id INT AUTO_INCREMENT,
    userName VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    phoneNumber VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,
    confirm_password VARCHAR(250) NOT NULL,
    created_At TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updated_At TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    Photo VARCHAR(250) NOT NULL,
    role VARCHAR(250) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS sessions(
    id INT AUTO_INCREMENT,
    session VARCHAR(250) NOT NULL,
    logedIn_At TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    user_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS types(
    id INT AUTO_INCREMENT,
    type_name VARCHAR(250) NOT NULL,
    type_description VARCHAR(250) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS products(
    id INT AUTO_INCREMENT,
    product_name VARCHAR(250) NOT NULL,
    product_quantity VARCHAR(250) NOT NULL,
    description VARCHAR(250) NOT NULL,
    type_Id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(type_Id) REFERENCES types(id)
);