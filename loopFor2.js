console.log('Multiple declaration');
for(let i=0,j=3;i<j;i++)// multiple variable declaration 
{
    console.log(i+j);
}
console.log('First block omited');
i=0;
j=2;
for(;i<=j;i++)// first block omited
{
    console.log(i+j);
}

console.log('First and third block omited');

i=0;
for(;i<=j;)
{
    console.log(i*j);
    i++;
}

console.log('Using break statment');
const a= [2, 4, 6,20, 10, 15]
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
    if(a[i]==20)
    {
        break; // it is use to break the looping
    }
}

console.log('Using continue statment');
for(let i=0;i<a.length;i++)
{

    if(a[i]==20)
    {
        continue; // it is use to skip any statments or element once
    }
    else
    {
        console.log(a[i]);
    }
}