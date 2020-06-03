const a = 10000000;

let dataMap = data.map((item, index)=>{
    return{
        date: index + a,
        record: item.record
    }
});

let min = a,
    max = a + 4,
    tickCount = 5;

if(dataMap.length > 5){
    tickCount = 5;
    chart.interation('pan');
}else if(dataMap.length ===1){
    max = a;
    tickCount = 2;
    chart.point().position
}

//html 树形结构 
// <ul>
//     <li>
//         <ul>
//             <li>
//                 <ul>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                 </ul>
//             </li>
//             <li></li>
//             <li></li>
//         </ul>
//         <li></li>
//         <li></li>
//     </li>
// </ul>


// 常规的for 循环
var str = '<ul>'
for(var i = 0; i < arrList.length; i++){    
    str += `<li>${arrList[i].name}</li>`
    if(arrList[i].child){
        for(var j = 0; j <arrList[i].child.length; j ++){
            str += `<li>${arrList[i].name}</li>`
            if(arrList[i].child){
                for(var j = 0; j <arrList[i].child.length; j ++){
                    str += `<li>${arrList[i].name}</li>`
                    if(arrList[i].child){
                        for(var j = 0; j <arrList[i].child.length; j ++){
                            str += `<li>${arrList[i].name}</li>`
                        }
                        str += `</ul>`
                    } 
                    str += `</ul>`
                }
            } 
            str += `</ul>`
        }
    } 
    str += `</ul>`
}
document.getElementById('lists').innerHTML(str);
// 递归   自己调自己， 让一个函数从其内部调用其自身
function fun(arrList){
    var str = '<ul>'
    for(var i = 0; i<arrList.length; i++){
        str += `<li>${arrList[i].name}`
        if(arrList[i].child){
            str += fun(data[i].child);
        }
        str += `</li>`
    }
    str += `</ul>`
    return str;//返回值
}

// 事件冒泡 JQ 单击事件
$('.lists ul li').click(function(event){
    event.stopPropagarion();
    if($(this).find('ul').is(':visible')){
        $(this).find('ul').hide();
        this.find('span').text('+');
    }else{
        $(this).find('ul').show();
        $(this).find('span').text('-')
    }
})


const m = new Map();
$('sumit').click(()=>{    
    let _name = $('.name').val(),
        _msg = $('.message').val();
    listShow();    
});
// 展示
let listShow = ()=>{
    let str = '';
    for(let [key,value] of m){
        str += `<li>${key} ${value}</li>`;
    }
    $('.messageList').html(str);
}