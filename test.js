// Importar as funções do arquivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Teste para a função fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

// Teste para a função fromDollarToYen
test("One dollar should be equivalent to a certain amount of yen", function() {
    const yen = fromDollarToYen(3.5);
    const expected = (3.5 / 1.07) * 156.5;
    expect(yen).toBe(expected);
});

// Teste para a função fromYenToPound
test("One yen should be equivalent to a certain amount of pounds", function() {
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(pounds).toBe(expected);
});
