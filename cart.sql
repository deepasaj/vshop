DROP DATABASE IF EXISTS shop;
CREATE DATABASE shop;

\c shop;

CREATE TABLE products(
  id integer PRIMARY KEY,
  name VARCHAR(20),
  description VARCHAR(20),
  price decimal
);
INSERT INTO products(id, name, description, price) values(1, 'Calvin Klien', 'Aqua women perfume', 4000);
INSERT INTO products(id, name, description, price) values(2, 'Roberto Cavalli', '75ml Women fragrance', 3000);
INSERT INTO products(id, name, description, price) values(3, 'Giorgio Armani', '75ml Women fragrance', 5000);

CREATE TABLE cartitems (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(20),
  product_id VARCHAR(20)
);