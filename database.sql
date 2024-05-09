/* ---------------------------------------------------------------------- */
-- Create a table called 'users' with the following columns in postgresql:
-- id_user: integer, primary key, autoincrement
-- first_name: varchar
-- last_name: varchar
-- username: varchar
-- email: varchar
-- password: varchar
-- login_status: boolean

CREATE TABLE users (
    id_user SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    username VARCHAR,
    email VARCHAR,
    password VARCHAR,
    login_status BOOLEAN
);

/* ---------------------------------------------------------------------- */
-- Create a table called 'fiat' with the following columns in postgresql:
-- id_fiat: integer, primary key, autoincrement
-- fiat_name: varchar
-- fiat_symbol: varchar

CREATE TABLE fiats (
    id_fiat SERIAL PRIMARY KEY,
    fiat_name VARCHAR,
    fiat_symbol VARCHAR
);

/* ---------------------------------------------------------------------- */
-- Create a table called 'crypto' with the following columns in postgresql:
-- id_crypto: integer, primary key, autoincrement
-- crypto_name: varchar
-- crypto_symbol: varchar

CREATE TABLE crypto (
    id_crypto SERIAL PRIMARY KEY,
    crypto_name VARCHAR,
    crypto_symbol VARCHAR
);

/* ---------------------------------------------------------------------- */
-- Create a table called 'holdings' with the following columns in postgresql:
-- id_holding: integer, primary key, autoincrement
-- id_user: integer, foreign key
-- id_crypto: integer, foreign key
-- crypto_amount: float
-- id_fiat: integer, foreign key
-- fiat_amount: float

CREATE TABLE holdings (
    id_holding SERIAL PRIMARY KEY,
    id_user INTEGER,
    id_crypto INTEGER,
    crypto_amount FLOAT,
    id_fiat INTEGER,
    fiat_amount FLOAT,
    FOREIGN KEY (id_user) REFERENCES users(id_user),
    FOREIGN KEY (id_crypto) REFERENCES crypto(id_crypto),
    FOREIGN KEY (id_fiat) REFERENCES fiats(id_fiat)
);

/* ---------------------------------------------------------------------- */
-- Create a table called 'favorites' with the following columns in postgresql:
-- id_favorite: integer, primary key, autoincrement
-- id_user: integer, foreign key
-- url: varchar

CREATE TABLE favorites (
    id_favorite SERIAL PRIMARY KEY,
    id_user INTEGER,
    url VARCHAR,
    FOREIGN KEY (id_user) REFERENCES users(id_user)
);

/* ---------------------------------------------------------------------- */
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
-- Insert data into the 'users' table:
INSERT INTO users (first_name, last_name, username, email, password, login_status)
VALUES 
    ('John', 'Doe', 'johndoe', 'johndoe@example.com', 'password123', false),
    ('Jane', 'Smith', 'janesmith', 'janesmith@example.com', 'password456', false);

/* ---------------------------------------------------------------------- */
-- Insert data into the 'fiats' table:
INSERT INTO fiats (fiat_name, fiat_symbol)
VALUES
    ('US Dollar', 'USD'), ('Euro', 'EUR'),
    ('British Pound', 'GBP');

/* ---------------------------------------------------------------------- */
-- Insert data into the 'crypto' table:
INSERT INTO crypto (crypto_name, crypto_symbol)
VALUES
    ('Bitcoin', 'XXBT'),
    ('Ethereum', 'XETH'),
    ('Ripple', 'XXRP');

-- Update data in 'crypto' table:
UPDATE crypto
SET crypto_symbol = 'XETH'
WHERE crypto_name = 'Ethereum';

/* ---------------------------------------------------------------------- */
-- Insert data into the 'holdings' table:
INSERT INTO holdings (id_user, id_crypto, crypto_amount, id_fiat, fiat_amount)
VALUES
    (1, 1, 0.5, 1, 5000),
    (1, 2, 2.3, 2, 2300),
    (2, 3, 1.8, 1, 1800);

/* ---------------------------------------------------------------------- */
-- Insert data into the 'favorites' table:
INSERT INTO favorites (id_user, url)
VALUES
    (1, 'https://api.kraken.com/0/public/OHLC?pair=XETHZUSD&interval=1440&since=1704067200'),
    (2, 'https://api.kraken.com/0/public/OHLC?pair=XXBTZGBP&interval=240&since=1704067200');