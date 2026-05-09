function makeAdder(x) {
    return function (y) {
        return x + y
    }
}

let base = makeAdder(4);
let add5 = base(5)
let add10 = base(10)

console.log(add5);
console.log(add10);
console.log(add10);
console.log(add10);
console.log(add5);



