//Arrow function is same as normal function aprt from 2 basic differences
//even,odd

/*const even=(a)=>
{
    const b=a%2;
    return b;
}
const num=21;
result=even(num);

if(result==0)
{
    console.log('Even number');
}
else
{
    console.log('Odd number');
}

// factorial
const factorial=(num)=>
{
    num1=num-1;
    while(num1>0)
    {
        num=num*num1;
        num1--;
    }
    return num;
}
let num=3;
result=factorial(num);
console.log(result);

// persentage
const persent=(num1,num2)=>
{
    result= num1*num2/100;
    return result;
}
const num1=100;
const num2=10;
result=persent(num1,num2);
console.log(result);

//Program to find Sum of Digits
const avg=(num1,num2,num3)=>
{
sum=num1+num2+num3;
sum=sum/2;
return sum;
}
const num1=20;
const num2=30;
const num3=40;
result=avg(num1,num2,num3);
console.log(result);*/

const great=(num,num1)=>
{
    if(num<num1)
    return "Num is less then num1";
    else
    return "Num is greater then num1";
}
const num=20;
const num1=30;
result=great(num,num1);
console.log(result);