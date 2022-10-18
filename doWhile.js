//in this loop code block execute once before checking the condition then continue if condition satisfied

const a= [5,7,9,11,13];
let i=0;
do
{
 console.log(a[i])
 i++;
}while(i<a.length)

i=0;
do
{
a[i]=a[i]+2;
 i++;
}while(i<a.length)

console.log(a);

console.log('using break');
i=0;
do
{
console.log(a[i]);
 i++;
 if(a[i]==9)
 {
     break;
 }
}while(i<a.length)

console.log('using continue');
i=0;
const b= [5,7,9,11,13];
do
{
 if(b[i]==9)
 {
    i++;
     continue;
 }
 console.log(b[i]);
 i++;
}while(i<b.length)