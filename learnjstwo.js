/* 
* @Author: QuanZhou
* @Date:   2015-08-15 12:52:30
* @Last Modified by:   QuanZhou
* @Last Modified time: 2015-08-15 20:33:44
*/

'use strict';
function alert(str){
    console.log(str);
}

// arguments of function practice
// foo(a[,b],c)
function foo(a, b ,c){
    if (arguments.length === 0){
        return 0;
    }
    else if (arguments.length === 2){
        c = b;
        b = null;
    }
    return (a * b - c);
}

// rest of arguments practice
function foo(a, b){
    var i, rest = [];
    if (arguments.length > 2){
        for (i = 2; i < arguments.length; i++){
            rest.push(arguments[i]);
        }
    }
    alert(a);
    alert(b);
    alert(rest);
}
foo(1, 2, 'hallo', 'hey');
foo(1);

// fucntion practice 

function sum(a, b){
    var sum = a + b;
    var i;
    switch (arguments.length){
        case 0:
        {
            return 0;
        }
        case 1:
        {
            return a;
        }
        default:
        {
        for (i = 2; i < arguments.length; i++){
             sum = sum + arguments[i];
            }
        return sum;
        }
    }
}

function area_of_circle(r, pi=3.14) {
   return r + pi;
}
alert(area_of_circle(0));
