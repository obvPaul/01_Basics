function add(a,b) {

}
function subtract(a,b) {

}
function multiply(a,b) {

}
function supercalculator(a,b) {
    (a+b)/2*a
}
function printEasterDate(year) {
    let N = year - 1900;
    let A = N % 19;
    let B = (7*A+1)/19;
    let M = (11*A+4-B) % 29;
    let Q = N/4;
    let W = (N+Q+31-M) % 7;
    let P = 25-M-W;

    let result = Math.ceil(P);
    if (result>0){
        console.log("ostern..." + result + " April");
    } else {
        let date = 31 + result;
        console.log(date + " März");
    }

    console.log(result);
}

printEasterDate(2024)