// percentage using promise


/*const functionOne=(num1,num2)=>{
    return new Promise((resolve,reject)=>{
        try{
            num=num1*num2/100;
            resolve(num);
        }catch(err){
            reject();
        }
    })
}

functionOne(100,20).then((result)=>{
    console.log(result);
}).catch((err)=>
{
    console.log(err);
});


//String length min or max from 10

const functionStr=(str,l1)=>{
    return new Promise((resolve,reject)=>{
        l1=str.length;
                if (l1<10)
                {
                    resolve("String length is less then 10");
                }
                else
                {
                    reject("String length is greater then 10");
                }

    })
}
str='Roshan';
functionStr(str).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})


//factorial of given number

const functionOne=(num)=>{
    return new Promise((resolve,reject)=>{
        try{
                num1=num-1;
                while(num1>0)
                {
                    num=num*num1;
                    num1--;
                }
                resolve(num);
            }catch(err){
            reject();
        }
    })
}
functionOne(5).then((result)=>{
    console.log(result);
}).catch((err)=>
{
    console.log(err);
});

// String lowercase


const functionStr=(str)=>{
    return new Promise((resolve,reject)=>{
                     str1=str.toLowerCase();
                     if(str1!=str)
                     {
                        resolve(str1);
                     }
                     else
                     {
                        reject('String already in lower case');    
                     }


    }
)}
str='roshan';
functionStr(str).then((result)=>
{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})


// String uppercase

const functionStr=(str)=>{
    return new Promise((resolve,reject)=>{
                     str1=str.toUpperCase();
                     if(str1!=str)
                     {
                        resolve(str1);
                     }
                     else
                     {
                        reject('String already in upper case');    
                     }


    }
)}
str='ROSHAN';
functionStr(str).then((result)=>
{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})


//adding number in array elements


const promise5 =(arr)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
                for(let i =0;i<arr.lenght;i++){
                    arr[i]=arr[i]+3;
                }
                resolve(arr);
            }
            catch(err){
                reject(`Exception has occured :${err}`);
            }
        },2000)
    })
}
promise5([1,2,3]).then((result)=>{
    console.log(`Array after result :${result}`);
}).catch((errResult) => {
    console.error(errResult);
});


// greatest number

const functionThree=(num1,num2)=>{
 return new Promise((resolve,reject)=>{
               if(num1<num2)
               {
                 resolve(num1);
               }else{
                 reject(num1);
               }
                  
 })
}

const num1=10;
const num2=30;
functionThree(num1,num2).then((result)=>{
    console.log("Num1 is less then from num2");
}).catch((err)=>{
    console.log("Num1 is grater then from num2");
})

// Avg of given numbers
const functionavg=(num1,num2,mum3)=>{
    return new Promise((resolve, reject)=>{
        try{
            num=(num1+num2+num3)/2;
            resolve(num);
        }catch(err){
            reject();
        }
    })
}
num1=10;
num2=20;
num3=30;

functionavg(num1,num2,num3).then((result)=>{
    console.log("Avg of numbers:",result);
}).catch((err)=>{
    console.log(err);
})

//Power of number
const functionavg=(num)=>{
    return new Promise((resolve, reject)=>{
        try{
            num=num*num;
            resolve(num);
        }catch(err){
            reject();
        }
    })
}
num=13;
functionavg(num).then((result)=>{
    console.log("Power of numbers:",result);
}).catch((err)=>{
    console.log(err);
})*/

//sample modlus program

const functionfinal = (numbers)=>{
    return new Promise((resolve,reject) => {
if (numbers%2 ==1){
    resolve('number is true');
}
else{
    reject('number is false');
}
    })
}
functionfinal(11).then((result)=>{
console.log(result);
}).catch((err) =>{
    console.log(err);
})