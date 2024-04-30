/* JS basic variable and io*/
import { sprintf} from './sprintf.js'

/***
 * 格式化输出
 */

let msg = "Liovale"


/***
 * 1. 使用字符串模板（Template Literals）
 * JavaScript ES6 引入了模板字符串，这是一种包含嵌入表达式的字符串字面量。你可以使用反引号（`）来创建模板字符串，并用 ${expression} 语法嵌入变量和表达式。
 */
console.log(`Welcome to js, ${msg}`) // 注意

/***
 * 2. 使用 console.log 的高级特性
 * console.log 可以接受多个参数，并且可以使用类似于 C 语言中 printf 的格式化选项。
 */
console.log("Hello %s!", msg)

/***
 * 3. 对于更复杂的格式化需求，可以使用第三方库，如 sprintf-js，它提供了类似于 C/C++ 中 sprintf 的功能。
 * 首先，需要安装这个库：
 * nvm install sprintf-js
 */
// const sprintf = require('sprintf-js').sprintf // 这种方式是运行在node.js环境而非浏览器
// let info = sprintf("Thinking and coding, %s.", msg)
// console.log(info)


// 操作 DOM

// 这种方法过时了，不好维护 
// document.write(`<h1>${msg}</h1>`)

// innerHTML
document.getElementById('content').innerHTML = `<h1>innerHTML ${msg}</h1>`


// appendChild
let contentDiv = document.getElementById('content')
let newElement = document.createElement('h1')
/***
 * 我这里使用的sprintf库过于古老，不想修改原始库，并且需要保持 ES6 模块的结构，可以创建一个新的 JavaScript 文件来包装 sprintf.js 的功能，并导出所需的函数。
 */
newElement.textContent = sprintf("appendChild %s", msg)
contentDiv.appendChild(newElement);

alert(`Welcome ${msg}!`)

