/*const str= "Roshan";
const res= str.split('');
const rev= res.reverse();
const result= rev.join('');
console.log(result);*/

const str='Roshan';
const str1=[];
let j=0;
for(let i=str.length-1;i>=0;i--)
{
    str1[j]=str[i];
    j++  
}
const result= str1.join('');
console.log('The reverse string is:', result);



