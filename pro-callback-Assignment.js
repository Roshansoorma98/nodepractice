// Number 1

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
functionOne(500,20).then((result)=>{
    //Multiply by 2 after getting percentage
    return new Promise((resolve,reject)=>{
        const a=2;
        if(a==2)
        resolve( result*2);
        else
        reject();
    }).then((secresult)=>{
        console.log(secresult);
    })
}).catch((err)=>
{
    console.log(err);
});

//  make even number after getting power of any number
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
num=12;
functionavg(num).then((result)=>{
    // try to make even number 
    return new Promise((resolve,reject)=>{
            if(result%2==1)
            resolve(result+1);
            else 
            reject();
            
    }).then((secResult)=>{
        console.log("Even Power of numbers:",secResult);
    })
}).catch((err)=>{
    console.log('We are in catch block',err);
})


// Adding two string
const functionStr=(str1)=>{
    return new Promise((resolve,reject)=>{
                     str1=str1.toLowerCase();
                     if(str1!=str)
                     {
                        resolve(str1);
                     }
                     else
                     {
                        reject();    
                     }


    }
)}
str='Roshan';
functionStr(str).then((result)=>
{
    //concatination of both string
    return new Promise((resolve,reject)=>{
        finalstr=result.concat('Soorma');
        a=2;
        if(a==2)
        resolve(finalstr);
        else
        reject();
    }).then((secResult)=>{
        console.log('Final:',secResult);
    })  
}).catch((err)=>{
    console.log(err);
})

//adding all the elements of array 


const promise5 =(arr)=>{
    return new Promise((resolve,reject)=>{
            try{
                    
                for(let i=0; i<arr.lenght; i++)
                {
                    arr[i]=arr[i]+3;
                }
                resolve(arr);
            }
            catch(err){
                reject(`Exception has occured :${err}`);
            }
    })
}
promise5([2,3,5]).then((result)=>{
    // adding all the elements of array
    return new Promise((resolve,reject)=>{
        a=2;
        if(a==2)
        resolve(result[0]+result[1]+result[2]);
        else
        reject();
    }).then((secResult)=>{
        console.log(`Array after Secresult :${secResult}`);
    })
}).catch((errResult) => {
    console.error(errResult);
});*/

//Making greatest number less
const functionThree=(num1,num2)=>{
    return new Promise((resolve,reject)=>{
                  if(num1<num2)
                  {
                    resolve(num1);
                  }else{
                    reject();
                  }
                     
    })
   }
   
   const num1=10;
   const num2=30;
   functionThree(num1,num2).then((result)=>{
    // making greatest number less
    return new Promise((resolve,reject)=>{
        a=2;
        if(a==2)
        resolve(result=result-result);
        else
        reject();
    }).then((secResult)=>{
        console.log("Final Number",secResult);
    })
       
   }).catch((err)=>{
       console.log("We are in catch block");
   })