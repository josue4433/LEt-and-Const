function double(arr) {
    return arr.map(function(val) {
    return val * 2;
    });
}

const double = arr => arr.map(val * 2);


function squareAndFindEvens(numbers) {
    var squares = number.map(function(num){
        return num **2;
    });
    var evens = squares.filter(function(square){
        return square %2 === 0;
    });
    return evens;
}
const squareAndFindEvens = number => numbers.map(val => val ** 2).filter(square => square % 2 ===0)