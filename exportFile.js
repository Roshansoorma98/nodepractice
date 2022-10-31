// factorial 
/*function factorial(num)
{
    num1=num-1;
    while(num1>0)
    {
        num=num*num1;
        num1--;
    }
    return num;
}

exports.factorial=factorial;


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
exports.prime=prime;*/

//Program to find Sum of Digits
function avg(num1,num2,num3)
{
sum=num1+num2+num3;
sum=sum/2;
return sum;
}

exports.avg=avg;