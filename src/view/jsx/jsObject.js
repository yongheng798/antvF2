// JS实例对方和方法集合
const obj = {
    name: '陈品富',
    age: '18',
    schoool: [{
            primary: ['古麻小学', '古燕小学']
        },
        {
            juniorMiddle: '荣塘中学'
        }
    ],
    study: {
        program: {
            web: ['html', 'css', 'javascript', 'es6', 'vue', 'webpack']
        },
        shares: ['one', 'two', 'three']
    },
    children: {
        jack: {
            name: 'Jack',
            age: '2'
        },
        merray: {
            name: 'merray',
            age: '1'
        }
    }
}
const objKeys = Object.keys(obj) // 获取对象一级属性名称 [name,age,school,study,children]
const person1 = Object.assign({}, obj) //浅拷贝复制对象
const objValues = Object.values(obj) //取属性的值

const person2 = Object.create(person1) //创建实例对象，可以通过新创建的实例对象获取原对象的属性或者__proto__获取
// 比如
const age2 = person2.age //18

// 与构造函数结合
// ES5写法
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.meow = function () {
            console.log('老子来也！')
        }
    }
}
// ES6写法
function Persons(name, age) {
    this.name = name
    this.color = age
    this.meow = function () {
        console.log('老子来也！')
    }
}
// 检测对象类型
function f() {}
typeof f.prototype // "object"
// instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例。
var v = new Vehicle();
v instanceof Vehicle // true

// 构造函数的继承
function Sub(value) {
    Super.call(this);
    this.prop = value;
}
// 子类会具有父类实例的方法。有时，这可能不是我们需要的，所以不推荐使用这种写法。
Sub.prototype = new Super();

//   继承部分方法属性
function Shape() {
    this.x = 0;
    this.y = 0;
}

Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};
// 我们需要让Rectangle构造函数继承Shape。
// 第一步，子类继承父类的实例
function Rectangle() {
    Shape.call(this) //调用父类的构造函数
}
// 另一种写法
function Rectangle2() {
    this.base = Shape;
    this.base()
}
// 第二步，子类继续父类的原型
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
// 采用这样的写法以后，instanceof运算符会对子类和父类的构造函数，都返回true。
let rect = new Rectangle();

rect instanceof Rectangle //true
rect instanceof Shape //true

// 单个方法的继承，这时可以采用下面的写法
ClassB.prototype.print = function () {
    ClassA.prototype.print.call(this);
    // some code
}

// 多重继承
// javascript 不提供多重继承功能，既不允许一个对象同时继承多个对象。
// 但是，可以通过变通方法，实现这个功能
function M1() {
    this.hello = 'hello';
}

function M2() {
    this.world = 'world'
}

function S() {
    M1.call(this)
    M2.call(this)
}
// 继承M1
S.prototype = Object.create(M1.prototype);
// 通过对象的浅拷贝，继承上加入 M2
Object.assign(S.prototype, M2.prototype);
// 指定构造函数
S.prototype.constructor = S;
// 这种模式又称为 Mixin（混入）
var s = new S();
console.log(s) //{hello:'hello',world:'world'}
s.hello //'hello'
s.world //'world'

// 模块
// 以前的写法将m1和m2的函数都封装在module1对象里
var module1 = new Object({
    _count: 0,
    m1: function () {

    },
    m2: function () {

    }
})
// 使用的时候，就是调用这个对象的属性
module1.m1();
// 但是，这样的写法会暴露所有模块成员，内部状态可以被外部改写
// 比如，可以直接改变内部计数器的值
module1._count = 5

// 封装私有变量： 构造函数的写法
function StringBuilder() {
    var buffer = [];

    this.add = function (str) {
        buffer.push(str);
    }

    this.toString = function () {
        return buffer.join('');
    }

}
// 上面代码中，buffer是模块的私有变量。
// 一旦生成实例对象，外部是无法直接访问buffer的。
// 但是，这种方法将私有变量封装在构造函数中，
// 导致构造函数与实例对象是一体的，
// 总是存在于内存之中，无法在使用完成后清除。
// 这意味着，构造函数有双重作用，
// 既用来塑造实例对象，又用来保存实例对象的数据，
// 违背了构造函数与实例对象在数据上相分离的原则（即实例对象的数据，不应该保存在实例对象以外）。
// 同时，非常耗费内存。
function StringBuilder2() {
    this._buffer = [];
}

StringBuilder2.prototype = {
    constructor: StringBuilder2,
    add: function (str) {
        this._buffer.push(str);
    },
    toString: function () {
        return this._buffer.join('');
    }
}
// 这种方法将私有变量放入实例对象中，好处是看上去更自然，
// 但是它的私有变量可以从外部读写，不是很安全。

// 封装私有变量，立即执行函数的写法
let module2 = (() => {
    let _count = 0;
    let m1 = function () {

    };
    let m2 = function () {

    };
    return {
        m1: m1,
        m2: m2
    };
})();
// 这样子，_count 变量外部就无法读取了
console.info(module2._count); //undefined

// 模块的放大器
// 如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块
// 这时就有必要采用 “放大模式”（augmentation）
// 如继承模块2的写法
let module3 = ((mod) => {
    mod.m3 = function () {

    };
    return mod
})(module2);

// 如果采用上面的写法，
// 第一个执行的部分有可能加载一个不存在空对象，
// 这时就要采用"宽放大模式"（Loose augmentation）。
let module4 = ((mod) => {
    return mod;
})(window.module1 || {})

// 与"放大模式"相比，“宽放大模式”就是“立即执行函数”的参数可以是空对象。

// 输入全局变量
// 为了在模块内部调用全局变量，必须显式地将其他变量输入模块。
let module5 = (($, YAHOO) => {
    // ...
})(jQuery, YAHOO);

// 立即执行函数还可以起到命名空间的作用。

(($, window, document) => {
    function go(num) {

    }

    function handleEvents() {

    }

    function initalize() {

    }

    function dieCarouselDie() {

    }

    window.finalCarouse1 = {
        init: initalize,
        destroy: dieCarouselDie
    }

})(jQuery, window, document)

// Object.getPrototypeOf()  返回参数对象的原型
const F = function () {}
const f = new F()
Object.getPrototypeOf(f) === F.prototype; //true
// 特殊对象的原型
// // 空对象的原型是 Object.prototype
Object.getPrototypeOf({}) === Object.prototype //true

// Object.prototype 的原型是null
Object.getPrototypeOf(Object.prototype) === null

// 函数的原型是 Function.prototype
Object.getPrototypeOf(f) === Function.prototype; //true

// Object.setPrototypeOf方法为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象。
const a = {}
const b = {
    x: 1
}
Object.setPrototypeOf(a, b)

Object.getPrototypeOf(a) === b // true
a.x // 1

Object.create()
// 原型对象
const A = {
    print: () => {
        console.log('hello world')
    }
}
// 实例对象
const B = Object.create(A)

Object.getPrototypeOf(B) === A //true
B.print() //'hello world'
B.print === A.print //true

// Object.creat() 方法可以用下面的代码代替
if (typeof Object.create !== 'function') {
    Object.create = (obj) => {
        function F() {}
        F.prototype = obj
        return new F()
    }
}

// 三种方式生成的新对象是等价的
const obj1 = Object.create({});
const obj2 = Object.create(Object.prototype);
const obj3 = new Object();

// 除了对象的原型，Object.create方法还可以接受第二个参数。该参数是一个属性描述对象，它所描述的对象属性，会添加到实例对象，作为该对象自身的属性。

const obj1 = Object.create({}, {
    p1: {
        value: 123,
        enumerable: true,
        configurable: true,
        writable: true
    },
    p2: {
        value: 'abc',
        enumerable: true,
        configurable: true,
        writable: true
    }
})

// 等同于
const obj3 = Object.create({}, {
    p1: 123,
    p2: 'abc'
})

// 返回该对象的原型。该属性可读写。
Object.prototype.__proto__

// 获取实例对象obj的原型对象，有三种方法
obj.__proto__
obj.constructor.prototype
Object.getPrototypeOf(obj)
// 上面三种方法之中，前两种都不是很可靠。__proto__属性只有浏览器才需要部署，其他环境可以不部署。而obj.constructor.prototype在手动改变原型对象时，可能会失效。
const P = function () {}
const p = new P()
const C = function () {}
C.prototype = p
const c = new C()

C.constructor.prototype === p // false

// 因此，推荐使用第三种Object.getPrototypeOf方法，获取原型对象。


Object.getOwnPropertyNames()
// 方法返回一个数组，成员是参数对象本身的所有属性的键名，不包含继承的属性键名。

Object.getOwnPropertyNames(Date)
// ["parse", "arguments", "UTC", "caller", "name", "prototype", "now", "length"]

// Date对象所有自身的属性，都是不可以遍历的。
Object.keys(Date) // []

// 对象实例的hasOwnProperty方法返回一个布尔值，用于判断某个属性定义在对象自身，还是定义在原型链上。
Object.prototype.hasOwnProperty()
Date.hasOwnProperty('length') // true
Date.hasOwnProperty('toString') //false

// 另外，hasOwnProperty方法是 JavaScript 之中唯一一个处理对象属性时，不会遍历原型链的方法。

// in 运算符和 for...in 循环
// in 运算符返回一个布尔值，表示一个对象是否具有某个属性。
// 它不区分该属性是对象的自身属性，还是继承的属性
'length' in Date //true
    'toString' in Date //true

// 获得对象的所有可遍历属性（不管是自身的还是继承的），可以使用for...in循环。
for (p in obj) {
    console.log(p)
}

// 为了在for...in循环中获得对象自身的属性，可以采用hasOwnProperty方法判断一下。
for (let name in obj) {
    if (obj.hasOwnProperty(name)) {
        console.log(name)
    }
}
// 输出对象属性数组 []

// 获得对象的所有属性（不管是自身的还是继承的，也不管是否可枚举），可以使用下面的函数。
function inheritedPropertyNames(obj) {
    let props = {};
    while (obj) {
        Object.getOwnPropertyNames(obj).forEach(function (p) {
            props[p] = true;
        });
        obj = Object.getPrototypeOf(obj);
    }
    return Object.getOwnPropertyNames(props);
}

inheritedPropertyNames(obj);


// 对象的拷贝
// 如果要拷贝一个对象，需要做到下面两件事情。
// 确保拷贝后的对象，与原对象具有同样的原型。
// 确保拷贝后的对象，与原对象具有同样的实例属性。

function cotyObject(origin) {
    let copy = Object.create(Object.getPrototypeOf(origin));
    copyOwnPropertiesFrom(copy, origin);
    return copy;
}

function copyOwnPropertiesFrom(target, source) {
    Object.getOwnPropertyNames(source).forEach(function (propKey) {
        let desc = Object.getOwnPropertyDescriptor(source, propKey)
        Object.defineProperty(target, propKey, desc);
    })
    return target;
}

// 另一种更简单的写法，是利用 ES2017 才引入标准的Object.getOwnPropertyDescriptors方法。
function copyObject2(orig) {
    return Object.create(
        Object.getPrototypeOf(orig),
        Object.getOwnPropertyDescriptors(orig)
    )
}

function clone(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
}

// 对象的存取器
const obj5 = Object.defineProperty({}, 'p', {
    get: function () {
        return 'getter';
    },
    set: function (value) {
        console.log('setter' + value)
    }
});
obj5.p // 'getter'
obj5.p = 123 // 123

var obj4 = {
    get p() {
        return 'getter';
    },
    set p(value) {
        console.log('setter: ' + value);
    }
};

/*
Array 对象
*/
// 静态方法
const arr = [1, 2, 3]
Array.isArray(arr) //true

// 实例方法
arr.valueOf() // [1, 2, 3]
arr.toString() // "1,2,3"
arr.push(true, {})
// push和pop结合使用，就构成了“后进先出”的栈结构（stack）。
arr.sort((a, b) => {
    return a - b
})

[{
    name: "张三",
    age: 30
}, {
    name: "李四",
    age: 24
}, {
    name: "王五",
    age: 28
}].sort(function (o1, o2) {
    return o1.age - o2.age;
})
// bad
[1, 4, 2, 6, 0, 6, 2, 6].sort((a, b) => a > b)

// good
[1, 4, 2, 6, 0, 6, 2, 6].sort((a, b) => a - b)

// 链式使用
const users = [{
        name: 'tom',
        email: 'tom@qq.com'
    },
    {
        name: 'peter',
        email: 'peter@qq.com'
    }
]

users.map((item) => {
    return item.email
}).filter((email) => {
    return /^t/.test(email);
}).forEach((email) => {
    console.log(email)
})

// 包装对象【数值，字符串，布尔值】

/*
Math对象
*/
Math.E // 2.718281828459045
Math.LN2 // 0.6931471805599453
Math.LN10 // 2.302585092994046
Math.LOG2E // 1.4426950408889634
Math.LOG10E // 0.4342944819032518
Math.PI // 3.141592653589793
Math.SQRT1_2 // 0.7071067811865476
Math.SQRT2 // 1.4142135623730951

// 

/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait, type) {
    if (type === 1) {
        let previous = 0;
    } else if (type === 2) {
        let timeout;
    }
    return function () {
        let context = this;
        let args = arguments;
        if (type === 1) {
            let now = Date.now();

            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        } else if (type === 2) {
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(context, args)
                }, wait)
            }
        }
    }
}

// 数据平均值