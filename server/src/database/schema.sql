CREATE DATABASE myproducts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Criando tabela de produtos
CREATE TABLE IF NOT EXISTS products {
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  amount INTEGER NOT NULL,
}
