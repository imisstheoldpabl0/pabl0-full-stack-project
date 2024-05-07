-- Select all holdings for a user where the user id matches the one logged in
-- and join the fiats and crypto tables to get the names of the fiat and crypto

SELECT
    h.id_crypto,
    h.crypto_amount,
    h.id_fiat,
    h.fiat_amount,
    f.id_fiat,
    f.fiat_name,
    c.id_crypto,
    c.crypto_name
FROM
    holdings h
JOIN
    fiats f ON h.id_fiat = f.id_fiat
JOIN
    crypto c ON h.id_crypto = c.id_crypto
WHERE
    h.id_user = 1; -- This is the user_id that is logged in


-- Select all favorites for a user where the user id matches the one logged in
SELECT
    id_favorite, -- This is the id of the favorite
    url
FROM
    favorites
WHERE
    id_user = 1; -- This is the user_id that is logged in