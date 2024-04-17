import '../lib/sprintf-js/src/sprintf.js';

/***
 * 从使用的sprintf.js 代码来看，这个库确实定义了 sprintf 和 vsprintf 函数，
 * 但并没有使用 ECMAScript 6 (ES6) 模块的 export 关键字进行导出。相反，它使用了一种较老的方法来兼容不同的 JavaScript 环境
 * 创建一个包装模块来导出
 * 如果您不想修改原始库，并且需要保持 ES6 模块的结构，您可以创建一个新的 JavaScript 文件来包装 sprintf.js 的功能，并导出所需的函数。例如，您可以创建一个新的名为 sprintf.js 
 */

export const sprintf = window.sprintf;
export const vsprintf = window.vsprintf;

/***
 * 在该的包装模块中，使用 window 对象是为了访问由 sprintf.js 脚本定义并附加到全局 window 对象上的 sprintf 和 vsprintf 函数。
 * 这种方法通常用于浏览器环境，因为在浏览器中，全局作用域是通过 window 对象访问的。
 */

/***
 * 注意事项
 * 环境限制：这种方法假设您的代码运行在一个浏览器环境中，因为 window 对象是浏览器的全局对象。
 * 如果在 Node.js 或其他非浏览器环境中运行代码，window 对象是不存在的。在 Node.js 中，全局对象是 global，但直接在模块间共享全局变量并不是一个好的实践。
 * 模块化和封装：虽然这种方法可以工作，但它违背了模块化和封装的原则。最好的做法是修改原始的 sprintf.js，使其成为一个真正的模块，直接导出所需的功能。
 */