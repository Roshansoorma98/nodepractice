const a=[2,4,6,8,10];
let i=0;
switch(i)// it is use to reduce the multiple use of if.
{
    case 0:
        a[i]=10;
    break;
    case 1:
        a[i]=20;
    break;
        
    case 2:
        a[i]=30;
    break;
    default:
        console.log("Looking for element");
        break;

}
console.log(a);