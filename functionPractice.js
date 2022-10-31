// even and odd

/*function even(a)
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
}*/



// palindrom number
/*function palindrom(a)
{
    while(a)
    {
    const b=a%10;
    let c=b*10;
        a=c;
    }
    return b;
}
const num =121;
result=palindrom(num);

if(result==0)
{
    console.log('Palindrom number');
}
else
{
    console.log('Not Palindrom number');
}


// checking length of string is equal oe not
function equal(str)
{
 
 const a=str.length;
return a;
}

const str1='Roshan';
const str2='soorma';
result1=equal(str1);
result2=equal(str2);

if(result1==result2)
{
    console.log('Length is same');
}
else
{
    console.log('Length is different');
}


//power of a number
function power(num)
{
  num= num*num;
  return num;
}
const num=4;
let result= power(num);
console.log(result);

//count number of digit in an integer
function count(num)
{
    let i=0,sum=0,r;
while(num!=0)
    {
    r=num%10;
    sum=(sum*10)+r;
    num=num/10;
    i++;
    }
    return i;
}
const num= 20;
console.log(count(num));


//uppercase

function uppercase(str)
{
    str1=str.toUpperCase();
    return str1;
}

const str= "Roshan";
let result= uppercase(str);
console.log(result);

// Lowercase
function lowercase(str)
{
    str1=str.toLowerCase();
    return str1;
}

const str= "Roshan";
let result= lowercase(str);
console.log(result);

// Returning name by character

function name(str)
{
    if(str=='A'||str=='a')
    {
        return 'Akshaya';
    }
    if(str=='F'||str=='f')
    {
        return 'Faiz';
    }
    if(str=='S'||str=='s')
    {
        return 'Sakshi';
    }
    if(str=='Y'||str=='y')
    {
        return 'Yaswanth';
    }
    if(str=='M'||str=='m')
    {
        return 'Monika';
    }
}

const str= 'f';
result=name(str);
console.log(result);


// Persentag
function persent(num1,num2)
{
    result= num1*num2/100;
    return result;
}
const num1=100;
const num2=10;
result=persent(num1,num2);
console.log(result);*/

// factorial
function factorial(num)
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