const bigInt = require("big-integer");

const memory = {};

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const nth = req.body.nth;
    function fibonacci(n) {
        const bigN = bigInt(n);
        const key = bigN.toString();

        if (bigN.equals(0)) return bigInt(0);
        if (bigN.equals(1)) return bigInt(1);
        if (key in memory) return memory[key];

        memory[key] = fibonacci(bigN.minus(1)).plus(fibonacci(bigN.minus(2)));
        return memory[key];
    }

    const answer = fibonacci(bigInt(nth));

    context.res = {
        body: answer.toString()
    };
};
