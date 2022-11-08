//Sum of two numbers

/*const addNumbers = (a,b) => {
    return new Promise ((resolve, reject) => {
        let sum = a+b;
        resolve(sum);
    })
}
const sumNumbers=async()=>{
const result= await addNumbers(10,20);
return result;
}
sumNumbers().then((fresult)=>{
    console.log(fresult);
}).catch((err)=>{
    console.log(err);
})

// Power of array elements
const powerArr = (arr) => {
    return new Promise ((resolve, reject) => {
        for(let i=0;i<arr.length;i++)
        {
            arr[i]=arr[i]*arr[i];
        }
        resolve(arr);
    })
}
const getPower=async()=>{
const result= await powerArr([2,5,6]);
return result;
}
getPower().then((fresult)=>{
    console.log(fresult);
}).catch((err)=>{
    console.log(err);
})

//adding array elements
const addElement = (arr) => {
    return new Promise ((resolve, reject) => {
        sum=0;
        for(let i=0;i<arr.length;i++)
        {
            sum=arr[i]+sum;
        }
        resolve(sum);
    })
}
const sumElements=async()=>{
const result= await addElement([10,20,30]);
return result;
}
sumElements().then((fresult)=>{
    console.log(fresult);
}).catch((err)=>{
    console.log(err);
})
//String lowercase

const strLower = (str) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            str=str.toLowerCase();
            resolve(str);
        },2000
        )
        
    })
}
const getStr=async()=>{
const result= await strLower("Roshan");
return result;
}
getStr().then((fresult)=>{
    console.log(fresult);
}).catch((err)=>{
    console.log(err);
})

//String Uppercase

const strUpper = (str) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            str=str.toUpperCase();
            resolve(str);
        },2000
        )
        
    })
}
const getStr=async()=>{
const result= await strUpper("Roshan");
return result;
}
getStr().then((fresult)=>{
    console.log(fresult);
}).catch((err)=>{
    console.log(err);
})

//Finding given number is odd or even

const evenOdd = (num) => {
    return new Promise ((resolve, reject) => {
        if(num%2==0)
        resolve(`${num} is a even number`);
        else
        resolve(`${num} is a odd number`);
    })
}
const getEvOd=async()=>{
const result= await evenOdd(11);
return result;
}
getEvOd().then((fresult)=>{
    console.log(fresult);
}).catch((err)=>{
    console.log(err);
})

//Swapping numbers without variable

const swap = (num) => {
    return new Promise ((resolve, reject) => {
        if(num%2==0)
            resolve(num);
        else
        reject(`Number is not divisivel by 2`);
    })
}
const getNumber=async()=>{
let result= await swap(10);
num=30;
result=result+num;
num=result-num;
result=result-num;
return result;
}
getNumber().then((fresult)=>{
    console.log(fresult);
}).catch((err)=>{
    console.log(err);
})

// number is less or greater from 100
const greatNum = (num) => {
    return new Promise ((resolve, reject) => {
        if(num<100)
        resolve(`${num} is less then from 100`);
        else
        resolve(`${num} is greater than 100`);
    })
}
const getout=async()=>{
const result= await greatNum(111);
return result;
}
getout().then((fresult)=>{
    console.log(fresult);
}).catch((err)=>{
    console.log(err);
})*/

// factorial
const factorial = (num) => {
    return new Promise ((resolve, reject) => {
        num1=num-1;
                while(num1>0)
                {
                    num=num*num1;
                    num1--;
                }
                resolve(num);
    
    })
}
const getout=async()=>{
const result= await factorial(5);
return result;
}
getout().then((fresult)=>{
    console.log(fresult);
}).catch((err)=>{
    console.log(err);
})



