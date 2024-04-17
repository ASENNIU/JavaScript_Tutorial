/***
 * JS的基本数据类型
 */

let udf = undefined
let nll = null
let nan = NaN

let a = 24
let b = 8.8
let c = 'Leon'
let d = true

const add = (x, y) => {
  return x + y
}

const sub = (x, y) => x - y

console.log(`Number add undefined: ${add(udf, a)}`)  // NaN
console.log(`Number add null: ${add(nll, a)}`)       // 24
console.log(`Number add nan: ${add(nan, a)}`)        // NaN
console.log(`Number add boolean: ${add(b, d)}`)        // 9.8
console.log(`Number sub boolean: ${sub(b, d)}`)        // 7.800000000000001

console.log(`String add Number: ${add(c, a)}`)       // Leon24
console.log(`String sub undefined: ${sub(c, a)}`)    // NaN
console.log(`String sub null: ${sub(c, nll)}`)       // NaN
console.log(`String add boolean: ${sub(c, d)}`)       // NaN

