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
};

module.exports = holdingsQueries;