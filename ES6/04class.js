//es5
// function Point(x, y) {
//     this.x = x;
//     this.y = y;
//   }
  
//   Point.prototype.toString = function () {
//     return '(' + this.x + ', ' + this.y + ')';
//   };
  
//   var p = new Point(1, 2);
  //es6
  class Point{
    constructor(x,y){
        this.x=x;
        this.y=y
    }
    toString(){
        return '(' + this.x + ', ' + this.y + ')';
    }
  }
  let p = new Point(1,2)
  console.log(p)

  //构造函数的prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面。
  class Point {
    constructor() {
      // ...
    }
  
    toString() {
      // ...
    }
  
    toValue() {
      // ...
    }
  }
  
  // 等同于
  
  Point.prototype = {
    constructor() {},
    toString() {},
    toValue() {},
  };
//在类的实例上面调用方法，其实就是调用原型上的方法。
class B {}
let b = new B();

b.constructor === B.prototype.constructor // true
//上面代码中，b是B类的实例，它的constructor方法就是B类原型的constructor方法。


//Object.assign方法可以很方便地一次向类添加多个方法
class Point {
    constructor(){
      // ...
    }
  }
  
  Object.assign(Point.prototype, {
    toString(){},
    toValue(){}
  });