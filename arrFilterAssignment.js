/*const arr = [-1, -2, 4, 5, 7];

const filteredArr = arr.filter((num, index, arr) => {
    return num > 0
});

const filteredArrShort = arr.filter(num =>   num > 0);

console.log(filteredArr);
console.log(filteredArrShort);

//printing elements those are greater by 5
const arr=[3,4,5,10];
const finalArr= arr.filter((num,index,arr)=>{
        return num>5;
})
console.log(finalArr);


// printing elements those divisival by 2
const arr=[3,4,5,10];
const finalArr= arr.filter((num,index,arr)=>{
    if(num%2==0)    
        return num;
})
console.log(finalArr);*/

//using && operator
const arr=[11,13,10];
const finalArr= arr.filter((num,index,arr)=>{
    if(num%2==1&&num<10)    
        return num;
})
console.log(finalArr);

//using & operator
