const holdingsQueries = {
    getUserHoldingsById: `
    SELECT * FROM holdings
    WHERE
        id_user=$1;
    `,
    getAllUserHoldings: `
    SELECT * FROM holdings;
    `,
};

module.exports = holdingsQueries;