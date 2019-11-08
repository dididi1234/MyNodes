//以前为变量赋值只能直接复制
let a=1;
let b=2;
let c=3;
//ES6允许写成下面这样
let[a,b,c]=[1,2,3]//代码表示，可以从数组中提取值，按照对应位置，对变量赋值

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []
//如果解构不成功，变量的值就等于undefined。

let [x, y] = [1, 2, 3];
x // 1
y // 2
//另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。
let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4

//如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};


//对于 Set 结构，也可以使用数组的解构赋值
let [x, y, z] = new Set(['a', 'b', 'c']);
x // "a"
//解构赋值允许指定默认值。
let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
//ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
let [x = 1] = [undefined];
x // 1

let [x = 1] = [null];
x // null
//上面代码中，如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。

//如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
function f() {
    console.log('aaa');
  }
  
  let [x = f()] = [1];//上面代码中，因为x能取到值，所以函数f根本不会执行。上面的代码其实等价于下面的代码。

  //默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined

//解构不仅可以用于数组，还可以用于对象。
let{foo,bar}={foo:1,bar:2}
foo//1
bar//2
//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值

//如果变量名与属性名不一致，必须写成下面这样。
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'
//这实际上说明，对象的解构赋值是下面形式的简写
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };
//也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
foo // error: foo is not defined

const node = {
    loc: {
      start: {
        line: 1,
        column: 5
      }
    }
  };
  
  let { loc, loc: { start }, loc: { start: { line }} } = node;
  line // 1
  loc  // Object {start: Object}
  start // Object {line: 1, column: 5}
  //上面代码有三次解构赋值，分别是对loc、start、line三个属性的解构赋值。注意，最后一次对line属性的解构赋值之中，只有line是变量，loc和start都是模式，不是变量。

  //字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length : len} = 'hello';
len // 5


//变量的解构赋值用途很多。
//交换变量的值
let x = 1;
let y = 2;

[x, y] = [y, x];

//从函数返回多个值
//函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。
// 返回一个数组

function example() {
    return [1, 2, 3];
  }
  let [a, b, c] = example();
  
  // 返回一个对象
  
  function example() {
    return {
      foo: 1,
      bar: 2
    };
  }
  let { foo, bar } = example();

  //解构赋值可以方便地将一组参数与变量名对应起来。
  // 参数是一组有次序的值
function f([x, y, z]) { }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { }
f({z: 3, y: 2, x: 1});

//解构赋值对提取 JSON 对象中的数据，尤其有用。
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
  };
  
  let { id, status, data: number } = jsonData;
  
  console.log(id, status, number);
  // 42, "OK", [867, 5309]

  //遍历 Map 结构
  ///任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}