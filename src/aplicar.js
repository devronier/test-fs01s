function aplicarDesconto(valor) {

    if(typeof valor !== 'number' ) {
        throw new Error("Valor tem que ser número")
    }

    if(valor < 0) {
        return 0
    }

    if(valor < 50) {
        return valor * 0.9
    }

    if(valor >= 50 && valor < 100) {
        return valor * 0.8
    }

    if(valor >= 100) {
        return valor * 0.7
    }
}

module.exports = aplicarDesconto

