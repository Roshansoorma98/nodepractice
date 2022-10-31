//Program to find greatest of two numbers

/*function great(num,num1)
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

// Number positive or nagetive
function pos(num)
{
    if(num>0)
    return "Num is positive";
    else
    return "Num is negative";
}
const num=-30;
result=pos(num);
console.log(result);

//Program to find Sum of Digits
function avg(num1,num2,num3)
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

//prime number

function prime(num)
{
    let flag=0,i;
    if(num==0||num==1)
    flag=1;
    for(i=2;i<=num/2;i++)
    {
        if(num%i==0)
        {
        flag=1;
        break;
        }
    }
    if(flag==0)
        return 'Prime number';
    else
    return 'Not prime number';
}
const num=8;
result=prime(num);
console.log(result);