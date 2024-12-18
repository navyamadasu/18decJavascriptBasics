// {
//     var a=10;//function scope
//     console.log(a);
    
// }
// console.log(a);
//(both lines get be printed)

//************************************************************************************ 

// {
//     let a=5//block scope
//     console.log(a);
        
//     }
//     console.log(a);
    //only one line can be printed
    
//**********************************************************************************
// {
// const a=20;//block scope
// console.log(a);

// }
// console.log(a);
//********************************************************************************** */
// data types

//  Number

// let first = 30;
// let second =50;
// let third =-100;
// console.log(third+second+first);


// string ("" '' ``)

// let firststring ='screen sharing';
// console.log(firststring);
//     //    (or)
// alert(firststring);


// Boolean

// let a = 10;
// let b =20;
// console.log(a == b);

// BigInt

// let bignum = BigInt(12345678912344335456786543456789876543567);
// console.log(bignum);

// Undefined

// let a;
// console.log(a);

// Null

// let a = null;

// Symbol

// let first = Symbol(10);
// let second = Symbol(10);
// console.log(first == second);
//----------------------------------------------------------------------------------------------------
//Non-primitive datatype

//  Array:
//************************ */ array literal*********************//
// let newArray=[];
// let newArray2=['10',20,"hello",true]
// console.log(newArray);
// console.log(newArray2[3]);

// ************************array constructor***************************//

// let newArray = new Array();
// newArray[0] ='Apple'
// newArray [1]='grapes'
// newArray [2]='orange'
// console.log(newArray);

// let newArray1 = new Array('green','blue','red');
// console.log(newArray1);
// ----------------------------------------------------------------------------------
// OBJECT
//*********************** */ object literal************************//

// const student = {
//     name:"Navya",
//     age :26,
//     rollno:123,

// }
// console.log(student.name);

// **************************object construcor**********************//

// let newObj= new Object();

// newObj.first = "CAR";
// newObj.second = "Bike";
// newObj.third = 'Scooty';
// console.log(newObj.first);
// console.log(Object.keys(newObj));

// ---------------------------------------------------------------------------------
// OPERATORS

// ***********************Arthimatic operator : +,-,/,*,%,**,--,++*******************//

// let a=20;
// let b=30;

// console.log(`a+b:`,a+b);
// console.log(`b-a:`,b-a);
// console.log(`a*b:`,a*b);
// console.log(`a**b:`,a**b);

// console.log(`addition of a+b is ${a+b}`);
// console.log(`subtraction of a+b is ${a-b}`);
// console.log(`multiplication of a*b is ${a*b}`);
// console.log(`divide of a/b is ${a/b}`);
// console.log(`modulo of a%b is ${a%b}`);
// console.log(`exponentiation of a**b is ${a**b}`);

// console.log(a);
// console.log(++a);
// console.log(a++);
// console.log(a--);
// console.log(--a);


// **********************Assignment operator: = ,+= ,-= ,*=, /=, %= ,**  ************************//

// let x = 5;
// x +=5;
// console.log(x); 

// let a = 5;
// a -=5;
// console.log(a); 

// let b = 5;
// b /=5;
// console.log(b); 

// let c = 5;
// c *=5;
// console.log(c); 

// let d = 5;
// d %=5;
// console.log(d); 

// let y = 5;
// y **=5;
// console.log(y); 

// *************************logical operators : && || ! *******************//

// let x = 6;
// let y = 9;
// console.log(y>=x && y==x);//false
// console.log(x<=y || y==x); //true automatically
// console.log(!(x==y));


//****************************** */ comparison operator : ==,===,>,<,<=,>=,!=,!==  ***************************//

// console.log(3 == 3);
// console.log(3 ===  " 3");
// console.log(3 != 3);

// console.log(5== "5");
// console.log(5=== "5");
// console.log(5!=3);
// console.log(6>3);
// console.log(8<=10);


// *****************************Bitwise operator*************************//

// type of and  instance of

// let str = BigInt(1234567890);  // "hello",true,2,bigint
// console.log(typeof str);

// let str = "hello";
// console.log(typeof str);

// let str = 7;
// console.log(typeof str);

// let str=BigInt(34567);
// console.log(typeof str)
// -------------------------------------------------------------------------------------
// This operator 

// const test = {
//     prop: 42,
//     func: function () {
//       return this.prop;(this -point out the test)
//     },
//   };
  
//   console.log(test.func())
// -----------------------------------------------------------------------------------------------
// ***********************************Calculator**********************************************
let buttons =document.getElementsByTagName('button');

let result = document.getElementById('result');

for(i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        let input = this.innerText;
        updateDisplay(input)
        
    }
}
function updateDisplay(input){
    let currentDisplay = result.innerText
    if(currentDisplay=="0"){
        if(input!="AC"&&input!="DEL" && input!="="){
            result.innerText=""
            result.innerText=input
        }

    }
    else{
       
    
        if(input=="DEL"){
            result.innerText = currentDisplay.substring(0,currentDisplay.length-1)
            // if(result.innerText==""){
            //     result.innerText="0"
            // }
        }
        if(input=="AC"){
            result.innerText="0"
        }
        if(input!="C"&&input!="DEL"&&input!="="){
            result.innerText+=input
            x = x+6
            x+=7
        }

        if(input=="="){          
            let display = result.innerText
            result.innerText= eval(display)
        }
    }

}