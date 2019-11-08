//let 只在代码块中生效
{
    let a=1
    var b=2
    console.log(a)//1
    console.log(b)//2
}
//console.log(a)//a is not defined
//console.log(b)//2
//for循环的计数器
for(let i=0;i<6;i++){
    //...
}
//console.log(i)//i is not defined


//下面代码中如果用var,则输出10
var a=[]
for(var j=0;j<10;j++){
    a[j]=function(){
        console.log(j)//变量j只有一个,执行完循环后,j=10;后面再使用就是10,不会再改变
    }
}
a[6]()//10
//面代码中如果用let,则输出6
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);//变量i有10个,每个循环中的函数用各自的i
  };
}
a[6](); // 6

//for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
  }
  // abc
  // abc
  // abc

  //var存在变量提升,let不存在变量提升
console.log(foo); // 输出undefined
var foo = 2;

//console.log(bar); // 报错ReferenceError
let bar = 2;

//暂时性死区{在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。}
var tmp = 123;
if (true) {
 // tmp = 'abc'; // 报错ReferenceError
  let tmp;
}

//let不允许在相同作用域内，重复声明同一个变量。
// 报错
function func() {
    let a = 10;
    //var a = 1;
  }
  
  // 报错
  function func() {
    let a = 10;
   // let a = 1;
  }

  //块级作用域
var tmp = new Date();
function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined

//const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。