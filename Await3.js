const functionOne=(num)=>{
return new Promise((resolve,reject)=>{
 setTimeout(() => {
    if(num%2==0)
        resolve("this is an Even number");
    else
        resolve("this is an odd number");
    
 }, 3000);})
}

const getOut=async()=>{
    const result= await functionOne(10);
    console.log(result);
}

getOut();