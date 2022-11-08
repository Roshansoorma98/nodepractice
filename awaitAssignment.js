//Adding an number with given num

/*const functionOne=(num)=>{
    return new Promise((resolve,reject)=>{
        num=num+5;
        resolve(num);
    }) 
}

addNum=async(num)=>{
    const result= await functionOne(23);
    console.log(result);
}
addNum();

//Adding array element
const functionTwo=(arr)=>{
    return new Promise((resolve,reject)=>{
        sum=0;
        for(let i=0;i<arr.length;i++)
        {
                sum=arr[i]+sum;
        }
        resolve(sum);
    })
}

addElement=async()=>{
   const result=await functionTwo([2,5,6]);
   console.log(result);
}
addElement();


//Shorting array element
const functionThree=(arr)=>{
    return new Promise((resolve,reject)=>{
        
        const sortedarr=arr.sort((a,b)=>{return a-b});
        resolve(sortedarr);
    })
}

sortElement=async()=>{
   const result=await functionThree([10,7,5]);
   console.log(result);
}
sortElement();

// percentage 

const function4=(num,num1)=>{
    return new Promise((resolve,reject)=>{
        const result=num*num1/100;
        resolve(result);
    })
}

percentage=async()=>{
   const result=await function4(100,20);
   console.log(result);
}
percentage();

//Even or Odd
const function5=(num)=>{
    return new Promise((resolve,reject)=>{
        if(num%2==0)
        resolve("This is an even number");
        else
            resolve("This is an odd number");
    })
}
evenOdd=async()=>{
   const result=await function5(5);
   console.log(result);
}
evenOdd();

//Swapping numbers

const function6=(num1,num2)=>{
    return new Promise((resolve,reject)=>{
        temp=num1;
        num1=num1+num2;
        num2=num1-num2;
        num1=num1-num2;
        if(num1!=temp)
        resolve("Number are swaped");
    })
}
swapNum=async()=>{
   const result=await function6(10,20);
   console.log(result);
}
swapNum();*/

//Factorial of number

const function6=(num)=>{
    return new Promise((resolve,reject)=>{
        num1=num-1;
                while(num1>0)
                {
                    num=num*num1;
                    num1--;
                }
                resolve(num);
    })
}
factorial=async()=>{
   const result=await function6(5);
   console.log(result);
}
factorial();


