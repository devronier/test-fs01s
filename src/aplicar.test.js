const aplicarDesconto = require("./aplicar")

describe("Aplicar Desconto", () => {
    test("Deve retornar 0 ao enviar 0", () => {
        const resultado = aplicarDesconto(0)
        expect(resultado).toBe(0)
    })

    test("Testa valor da compra negativo", () => {
        const resultado = aplicarDesconto(-100)
        expect(resultado).toBe(0)
    })

    test("Deve Lançar um erro ao enviar não número", () => {

        expect(() => aplicarDesconto("abc")).toThrow()
    })

    test("Testa desconto 10%", () => {

        const resultado = aplicarDesconto(40)
        expect(resultado).toBe(36)
    })

    test("Testa desconto 20%", () => {

        const resultado = aplicarDesconto(50)
        expect(resultado).toBe(40)
    })

    
    test("Testa desconto 30%", () => {

        const resultado = aplicarDesconto(100)
        expect(resultado).toBe(70)
    })
})

