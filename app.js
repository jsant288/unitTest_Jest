// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
const fromDollarToYen = function(dollars){
    let valueInYen =  dollars * 127.9;
    return valueInYen;
}
const fromYanToPound = function(yen){
    let valueInDollar =  yen * .006;
    return valueInDollar;
}

const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYanToPound};
