/** @jest-environment jsdom */

const { validarIdade } = require("./script")


test('validar maior de idade', function() {
    var resultado = validarIdade(18);

    expect(resultado).toBe(true);
})

test('validar menor de idade', function() {
    var resultado = validarIdade(8);

    expect(resultado).toBe(false);
})