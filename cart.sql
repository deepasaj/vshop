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

CREATE TABLE coupons (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20),
  description VARCHAR(20),
  discount decimal
);
INSERT INTO coupons(id, name, description, discount) values(1, 'coupon_summer_1', '20% off on Perfumes', 400);
INSERT INTO coupons(id, name, description, discount) values(2, 'coupon_summer_2', '10% off on toys', 300);
INSERT INTO coupons(id, name, description, discount) values(3, 'coupon_winter_1', '15% off on electronics', 500);

CREATE TABLE cartcoupons (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(20),
  coupon_id VARCHAR(20)
);
