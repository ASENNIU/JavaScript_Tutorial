/**
 * 本节学习JS对象基础
 */

// 第一个版本是一个函数：
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`你好！我是 ${this.name}。`);
  };
  return obj;
}

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "你好！我是 Salva。"

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
// "你好！我是 Frankie。"

// 这样可以正常工作，但有点冗长：我们必须创建一个空对象，初始化它，并返回它。更好的方法是使用构造函数。构造函数只是使用 new 关键字调用的函数。当你调用构造函数时，它将：

// 创建一个新对象
// 将 this 绑定到新对象，以便你可以在构造函数代码中引用 this
// 运行构造函数中的代码
// 返回新对象
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`你好！我是 ${this.name}。`);
  };
}

const salva_1 = new Person("Salva");
salva.name;
salva.introduceSelf();
// "你好！我是 Salva。"

const frankie_1 = new Person("Frankie");
frankie.name;
frankie.introduceSelf();
// "你好！我是 Frankie。"

function Person_2(name) {
  this.name = name;
  this.greet = function() {
      console.log("Hello, my name is " + this.name);
  };
}

let person = new Person_2("Alice");
console.log(person)
person.greet();  // 输出: Hello, my name is Alice

let person_2 = Person_2("Alice");  // 没有使用new
console.log(person_2);           // 输出: undefined
console.log(name)
console.log(person_2.name);      // 报错：TypeError: Cannot read properties of undefined (reading 'name')