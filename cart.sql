DROP DATABASE IF EXISTS shop;
CREATE DATABASE shop;

\c shop;

CREATE TABLE cartitems (
  id SERIAL PRIMARY KEY,
  product_id VARCHAR
);