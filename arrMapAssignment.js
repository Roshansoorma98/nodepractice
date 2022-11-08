//Adding arrayelent by thire self

/*const arr=[2,3,4,5,6];

const mappedArr= arr.map((num,index,arr)=>{
         return num+num;
})
const mappedArr2= arr.map(num=> num+num);
console.log(mappedArr);
console.log(mappedArr2);

//Multiply by 3 in indrx num 3 element
const arr=[2,3,4,5,6];

const mappedArr= arr.map((num,index,arr)=>{
      if(index==3)
        return num*3;
      else
        return num;
})
console.log(mappedArr);

// Sum of each element
const arr=[10,20,30,40];
const mappedArr= arr.map((num,index,arr)=>{
    if(index==0)
         sum=num;

      if(index!=0)
        return sum=sum+num;
      else
        return num;
})
console.log(mappedArr[mappedArr.length-1]);

//String lower case

const strArr=['Roshan','SAKSHI','Yashwant'];
const mapArr= strArr.map((str,index,strArr)=>{
    return str.toLowerCase();
})

console.log(mapArr);*/

//String Uperr case

const strArr=['Roshan','SAKSHI','Yashwant'];
const mapArr= strArr.map((str,index,strArr)=>{
    return str.toUpperCase();
})

console.log(mapArr);


