module.exports = function reverse (n) {
    let strNumber = String(n);
    let result = '';
    for(let i = strNumber.length - 1; i >= 0; i--) {
        if (strNumber[i] !== '-'){
            result += strNumber[i];
        }
    }
    return +result;
}
