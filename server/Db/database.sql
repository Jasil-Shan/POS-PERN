CREATE DATABASE POS;


CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  price DECIMAL NOT NULL,
  offer_id INT REFERENCES offers(offer_id)
);

CREATE TABLE offers (
  offer_id SERIAL PRIMARY KEY,
  offer_type VARCHAR(50) NOT NULL,
  discount_value DECIMAL,
  free_product_id INT
);


CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(product_id),
  quantity INT
);