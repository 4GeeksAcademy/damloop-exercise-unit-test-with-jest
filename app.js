// Tasas de conversión
let oneEuroIs = {
    JPY: 156.5, // japan yen
    USD: 1.07, // us dollar
    GBP: 0.87, // british pound
};

// Euro → Dollar
const fromEuroToDollar = function (valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
};

// Dollar → Yen
const fromDollarToYen = function (valueInDollar) {
    // Primero convertimos dólares a euros
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    // Luego euros a yenes
    return valueInEuro * oneEuroIs.JPY;
};

// Yen → Pound
const fromYenToPound = function (valueInYen) {
    // Convertimos yenes a euros
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    // Luego euros a libras
    return valueInEuro * oneEuroIs.GBP;
};

// Función sum (del ejercicio previo)
const sum = (a, b) => a + b;

// Exportamos todo
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
