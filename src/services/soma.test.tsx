import { soma } from "./soma"
import { multiplica } from "./soma"


describe("soma", () => {
    it("deve somar 1 ao numero informado", () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('deve multiplicar o numero por 3', () => {
        const value = multiplica(2, 3)
        expect(value).toBe(6)
    })
})

