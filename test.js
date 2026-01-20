const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("1 euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
});

test("1 dollar should be converted to yen correctly", () => {
    // 1 USD → EUR → JPY
    // 1 USD = 1 / 1.07 EUR ≈ 0.934579 EUR
    // 0.934579 EUR * 156.5 = 146.261
    let result = fromDollarToYen(1);
    expect(result).toBeCloseTo(146.26); // usamos toBeCloseTo por decimales
});

test("1 yen should be converted to pounds correctly", () => {
    // 1 JPY → EUR → GBP
    // 1 JPY = 1 / 156.5 EUR ≈ 0.00639 EUR
    // 0.00639 EUR * 0.87 = 0.00556 GBP
    let result = fromYenToPound(1);
    expect(result).toBeCloseTo(0.00556);
});
