const server = require("./server")
const request = require("supertest");


describe("Server Testes", () => {

    test("Espera uma mensagem 'Hello' ao GET /", async () => {

       await request(server).get("/").expect(200).expect("Hello")
    })

    test("Espero Falha ao enviar email invalido", async () => {

        await request(server)
                .post("/login")
                .send({email: "123", senha: "senha"})
                .expect(400)
    })

    test("Espero Falha ao enviar senha invalida", async () => {

        await request(server)
                .post("/login")
                .send({email: "email", senha: "123"})
                .expect(400)
    })

    test("Espero que de tudo certo", async () => {

        await request(server)
                .post("/login")
                .send({email: "blabla@", senha: "senha1"})
                .expect(200)
    })
})