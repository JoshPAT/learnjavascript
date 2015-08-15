/* 
* @Author: JoshPAT
* @Date:   2015-08-13 23:03:15
* @Last Modified by:   QuanZhou
* @Last Modified time: 2015-08-14 16:50:11
*/

/* Codes below follows my self-study notes from:
http://zhouquan.me/2015/07/21/javascript-one/#more
*/

function alert (str){
    console.log(str);
}

// Array Practice 
'use strict';
var arr = ['小明', '小红', '大军', '阿黄'];
alert('欢迎' + arr.slice(0,3).join('，') +'和'+ arr[3]+'同学!');

// Object Practice
var dog = {
    name: 'Zipper',
    age: '5',
    height: '50cm',
    tags: ['happy', 'lazy'],
    city: 'Berlin',
    zipcode: 'null',
    'prop' : 'invalid'
};
alert('name' in dog); // check if there's such prop
delete dog.name;   // delete prop
alert('name' in dog);
dog['name'] = 'Zipper'; // add prop
alert(dog.hasOwnProperty('prop')); //if prop not written in normal variables
                                
// Condition Statement
var height = 1.78;
var weight = 67;

var bmi = weight / (height * height);
if (bmi > 32){
    alert('严重肥胖');
}else if (bmi > 28){
    alert('肥胖');
}else if (bmi > 25){
    alert('过重');
}else if (bmi > 18.5){
    alert('正常');
}else{
    alert('过轻');
} 

// Map & Set

var names = ['Michael', 'Bob', 'Tracy'];
var scores = [95, 75, 85, 77];

var m = new Map();
for (var i in names){
    m.set(names[i],scores[i]);
}
alert(m.get('Michael'));
m.delete('Michael');
alert(m.get('Michael'));
m.set('Michael',88);

var s = new Set([1,2,3,3,3,3]);
for (var x of s){
    alert(x);
}

// Iterable 

var a = ['A','B','C'];
a.forEach(function (element, index, array){
    alert(element); // 
    alert(index); // 
    alert(array); //array itself
});

m.forEach(function(value, key, map){
    alert('m['+key+']'+'='+value);
});





