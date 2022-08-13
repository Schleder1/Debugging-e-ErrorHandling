function recebeLista(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Lista inválida!");

        if (typeof arr !== 'object')
        throw new TypeError('Array precisa ser um tipo object');

        if(typeof num !== 'number')
        throw new TypeError('Num precisa ser um tipo number');

        if (arr.length !== num) throw new RangeError('Tamanho inválido!');

        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.message)
        } else if (e instanceof TypeError){
            console.log("Este erro é em TypeError!")
            console.log(e.message)
        } else if (e instanceof RangeError){
            console.log("Esse erro é um RangeError!")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}

console.log(recebeLista([1,2,3,4,5], 5));