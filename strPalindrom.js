/*function palindrom(str)
{
const str1=[];
let j=0;
for(let i=str.length-1;i>=0;i--)
{
    str1[j]=str[i];
    j++  
}
const res=str1.join('');
return res;
}

const str="Roshan";
const str2=palindrom(str);

console.log(str2);

if(str2==str)
{
    console.log('String is Palindrom');
}
else
{
    console.log('Not palindrom');
}*/



function palindrom(str)
{
const str1=str.split('');
const rev= str1.reverse();
const result=rev.join('');
return result;
}

const str="saas";
const str2=palindrom(str);

console.log(str2);

if(str2==str)
{
    console.log('String is Palindrom');
}
else
{
    console.log('Not palindrom');
}