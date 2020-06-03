// promise 异步加载图片
function loadIamgeAsync(url){
    return new Promise((resolve, reject)=>{
        const image = new Image();

        image.onload = ()=>{
            resolve(image)
        };

        image.onerror = ()=>{
            reject(new Error('Could not load image ad' + url));
        };

        image.src = url
    })
}

// 使用Promise 对象实现Ajax操作
const getJSON = (url)=>{
    const promise = new Promise((resolve,reject)=>{
        const handler = ()=>{
            if(this.readyState !==4){
                return
            }
            if(this.status ===200){
                resolve(this.response)
            }else{
                reject(new Error(this.statusText))
            }
        }
        
        const client = new XMLHttpRequest();
        client.open('GET',url)
        client.onreadystatechange = handler
        client.responseType = 'json'
        client.setRequestHeader('Accept', 'application/json')
        client.send()

    })
    return promise
}

getJSON('posts.json').then((json)=>{
    console.log(`Contents: ${json}`)
},(error)=>{
    console.log('出错了'+ error)
})

// 应用1 加载图片
const preloadIamge = (path)=>{
    return new Promise((resolve, reject)=>{
        const image = new Image()
        image.onload = resolve
        image.onerror = reject
        image.src = path
    })
}

// Generator 函数与 Promise 的结合
function getFoo(){
    return new Promise((resolve, reject)=>{
        resolve('foo')
    })
}

const g = function* (){
    try{
        const foo = yield getFoo()
        console.log(foo)
    }catch(e){
        console.warn(e)
    }
}

function run(gernerator){
    const it = gernerator()

    function go(result){
        if(result.done) return result.value

        return result.value.then(function(value){
            return go(it.next(value))
        },function(error){
            return go(it.throw(error))
        })
    }

    go(it.next())
}
run(g)

// 遍历器 Iterator
let objIterator = {
    data:['hello','world'],
    [Symbol.iterator](){
        const self = this
        let index = 0
        return {
            next(){
                if(index < self.data.length){
                    return{
                        value: self.data[index++],
                        done: false
                    }
                }else{
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

// 调用 Iterator 接口的场合
// 1、 解构赋值
let setValue = new Set().add('a').add('b').add('c')
let [x,y] = setValue

let [fitst, ...rest] = setValue

// 2、扩展运算符
const strIterator = 'hello world'
const arr1 = [...strIterator]

// yield* yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。
let generator = function* (){
    yield 1
    yield* [2,3,4]
    yield 5
}

let iterator = generator()

// for of 循环
const arrOf = ['red','green','blue']
for(let item of arrOf){
    console.log(item)
}

const objOf = {}
objOf[Symbol.iterator] = arrOf[Symbol.iterator].bind(arrOf)
for(let item of objOf){
    console.log(item)
}

arrOf.forEach((elment, index)=>{
    console.log(elment)
    console.log(index)
})

for(let pair of arrOf.entries()){
    console.log(pair)
}

// 对象
let es6 = {
    edition: 6,
    committrr: 'TC39',
    standard: 'ESMA-262'
}
for(let e in es6){
    console.log(e)
}
// 或者
for(let key of Object.keys(es6)){
    console.log(key + ':' + es6[key])
}

// async
// ES2017 标准引入了 async 函数，使得异步操作变得更加方便。
// async 函数是什么？一句话，它就是 Generator 函数的语法糖。
// 前文有一个 Generator 函数，依次读取两个文件。
const fs = require('fs');
const { resolve } = require('path');
const { spawn } = require('child_process');

const readFile = (fileName)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(error, data)=>{
            if(error) return reject(error)
            resolve(data)
        })
    })
}

const asynReadFile = async ()=>{
    const f1 = await readFile('/ect/fstab')
    const f2 = await readFile('etc/shells')

    console.log(f1.toString())
    console.log(f2.toString())
}

// 基本用法
async function getStockPriceByName(name){
    const symbol = await getStockSymbole(name)
    const stockPrice = await getStockPrice(symbol)
    return stockPrice
}
getStockPriceByName('goog').then(function(result){
    console.log(result)
})


// 指定多少毫秒后输出一个值。
function timeout(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms)
    })
}

async function asyncPrint(value, ms){
    await timeout(ms)
    console.log(value)
}

asyncPrint('hello world', 1000)

// 上面的写法还可以优化成
async function timeout2(ms){
    await new Promise((resolve) =>{
        setTimeout(resolve, ms)
    })
}
async function asyncPrint2(value, ms){
    await timeout2(ms)
    console.log(value)
}

asyncPrint2('hello world', 1000)


// async 函数有多种使用形式。
// 函数声明
async function foo(){}

// 函数表达式
const foo2 = async function(){}

// 对象的方法
let objAsync = { async foo(){}}
objAsync.foo().then()

// Class 的方法
class Storage{
    constructor(){
        this.cachePromise = caches.open('avatars')
    }

    async getAvatar(name){
        const cache = await this.cachePromise
        return cache.match(`/vaatars/${name}.jpg`)
    }
}
const storage = new Storage()
storage.getAvatar('jeck').then()

// 箭头函数
const fooJ = async ()=>{}

// 与其它异步处理方法的比较
// 我们通过一个例子，来看 async 函数与 Promise、Generator 函数的比较。

// 假定某个 DOM 元素上面，部署了一系列的动画，前一个动画结束，才能开始后一个。如果当中有一个动画出错，就不再往下执行，返回上一个成功执行的动画的返回值。
// Promise 的写法
function chainAnimationsPromise(elem, animations){
    // 变量ret 用来保存上一个动画的返回值
    let ret = null
    // 新建一个空的 Promise
    let p = Promise.resolve()
    // 使用then方法，添加所有的动画
    for(let anim of animations){
        p = p.then((val)=>{
            ret = val
            return anim(elem)
        })
    }
    // 返回一个部署了错误捕捉机制的Promise
    return p.catch((e)=>{
        // 忽略错误，继续执行
    }).then(()=>{
        return ret
    })
}

// Generator 函数的写法
function chainAnimationsGenerator(elem, animations){
    return spawn(function*(){
        let ret = null
        try{
            for(let anim of animations){
                ret = yield anim(elem)
            }
        }catch(e){}
        return ret
    })
}

// 最后是async 函数的写法
async function chainAnimationsAsync(elem, animations){
    let ret = null
    try{
        for(let anim of animations){
            ret = await anim(elem)
        }
    }catch(e){}
    return ret
}

// 依次远程读取一组 URL，然后按照读取的顺序输出结果
async function logInOrder(urls){
    for(const url of urls){
        const response = await fetch(url)
        console.log(await response.text())
    }
}

// 按顺序输出
async function logInOrder2(urls) {
    // 并发读取远程URL
    const textPromises = urls.map(async url => {
      const response = await fetch(url);
      return response.text();
    });
  
    // 按次序输出
    for (const textPromise of textPromises) {
      console.log(await textPromise);
    }
  }

//   class 的基本语法
function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  
Point.prototype.toString = function () {
return '(' + this.x + ', ' + this.y + ')';
};
  
const mp = new Point(1, 2);

class Point2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
const mp2 = new Point2(1, 2);


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