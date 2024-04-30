
// == 会进行隐式转换
console.log(2 == '2')              // true 
console.log(2 == 2.0)              // true
console.log(2 == '2.0')            // true

// === 判断值和类型是否想等
console.log(2 === '2')             // false
console.log(2 === 2.0)             // true

console.log(2 - false)             // 2
console.log(2 - true)              // 1
console.log('2.0' - false)         // 2
console.log('2.0' - true)          // 1

// undefined是一个数据类型，NaN和null是两个特殊的值
console.log(NaN == null)           // false
console.log(NaN == undefined)      // false
console.log(undefined == null)     // true

console.log(NaN === null)          // false
console.log(NaN === undefined)     // false
console.log(undefined === null)    // false

console.log(NaN == NaN)            // fasle
console.log(NaN === NaN)           // false
console.log(isNaN(NaN))            // false

