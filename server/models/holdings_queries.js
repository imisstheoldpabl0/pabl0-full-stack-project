const holdingsQueries = {
    getUserHoldingsById: `
    SELECT * FROM holdings
    WHERE
        id_user=$1;
    `,
    addHoldingByUserId: `
    INSERT INTO holdings(id_user, id_crypto, crypto_amount)
    VALUES ($2, $3,
        (SELECT id_user FROM users WHERE id_user=$1);
    `,
    getAllUserHoldings: `
    SELECT * FROM holdings;
    `,
    userExists: `
    SELECT id_user
    FROM users
    WHERE id_user = $1
    `,
    userIsLogged: `
    SELECT login_status
    FROM users
    WHERE id_user =$1
    `,
    hasThatCrypto: `
    SELECT id_crypto
    FROM holdings
    WHERE id_crypto = $1
    `,
    addNewCrypto: `
    INSERT INTO holdings(id_user, id_crypto, crypto_amount)
    VALUES ($1, $2, $3)
    `,
    updateCryptoAmount: `
    UPDATE holdings
    SET crypto_amount = $3
    WHERE id_crypto = $2 AND id_user=$1
    `
};

module.exports = holdingsQueries;