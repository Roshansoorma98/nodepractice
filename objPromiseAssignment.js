//Adding elements of aaray
/*const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        const a =[2,3] ;
        try{
            resolve(a[0]+a[1]);
        }catch(err)
        {
            reject('False');
        }
            
    }, 2000)
});
promiseOne.then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});

// Adding two string
const Var1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        str1='Roshan';
        str2='Soorma';
       if(str1!==str2)
        resolve( str1.concat(str2));
       else
        reject();
    })
})
Var1.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})

//factorial of given number

const functionOne= new Promise((resolve,reject)=>{
        try{
              num=5;
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
functionOne.then((result)=>{
    console.log(result);
}).catch((err)=>
{
    console.log(err);
});

// String lowercase
const strOne=new Promise((resolve,reject)=>{

    setTimeout(()=>{
           str='Roshan';
           if(str!==0)
           resolve(str.toLowerCase());
           else
           reject();
    },2000)
})

strOne.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.error(err);
})*/


// String Uppercase
const strOne=new Promise((resolve,reject)=>{

    setTimeout(()=>{
           str='Roshan';
           if(str!==0)
           resolve(str.toUpperCase());
           else
           reject();
    },2000)
})

strOne.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.error(err);
})