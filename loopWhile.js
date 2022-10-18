const a=[3,5,7,9,12];
let i=0;
while(i<a.length)
{
    console.log(a[i]);
    i++;
}

const b=[3,5,7,9,12];
i=0;
while(i<b.length)
{
    b[i]=b[i]+2;
    i++;
}
console.log(b);

console.log('using beak');
const c=[3,5,7,9,12];
i=0;
while(i<c.length)
{
    console.log(c[i]);
    i++;
    if(c[i]==7)
    {
        break;
    }
}

console.log('using continue');
const d=[3,5,7,9,12];
i=0;
while(i<d.length)
{
    if(d[i]==9)
    {
        i++;
        continue;
    }

    console.log(d[i]);
    i++;
}