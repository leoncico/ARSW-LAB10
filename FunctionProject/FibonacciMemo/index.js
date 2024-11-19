module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth
    let memory = {}

    function fiboMemo(n, fn){
        if (n in memory){
            return memory[n]
        }
        else{
            memory[n] = fn(n)
            return memory[n]
        }
    }

    let fibonacci = function(n) {
        if (n <= 0) return 0
        if (n === 1) return 1
        return fibonacci(n - 1) + fibonacci(n - 2)
    }

    let answer = fiboMemo(nth, fibonacci)

    context.res = {
        body: answer.toString()
    }
}