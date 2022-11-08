// promise all is a methode to execute all the promises in an row and collect their outputs in the form of array
// in promise all then block execute only when all the resolve is called otherwise catch block is execute

const promise1=new Promise((resolve,reject)=>{
    resolve('promise1 is resolved');
})

const promise2=new Promise((resolve,reject)=>{
    reject('promise2 is reject');
})

const promise3=new Promise((resolve,reject)=>{
    resolve('promise3 is resolved');
})

Promise.all([promise1,promise2,promise3]).then((result)=>{
    console.log("Final  result",result);
}).catch((err)=>{
    console.log("Final err",err);
})