
// promise
/*const promiseOne = (num) => {
    return new Promise((resolve, reject) => {
        // one either resolve or reject will be called at any point in time
        // resolve will be called for success scenarios, reject will be called for failure scenarios
        if (num % 2 === 0) {
            resolve('Number is Even');
        } else {
            reject('Number is Odd');
        }
    })
}

promiseOne(24).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})


const promiseTwo = (arr) => {
    return new Promise((resolve, reject) => {
        // code comes here
        try{
            for(let i =0; i < arr.length;i++){
                arr[i] = arr[i] * arr[i] * arr[i];
            }
            resolve(arr);
        } catch(err) {
            reject(`Exception has occured : ${err}`);
        }
    })
}

promiseTwo([3,4,5]).then((result) => {
    console.log(`Final cubed array is : ${result}`);
}).catch((errResult) => {
    console.error(errResult);
});

// find out the cubes of the numbers.
const functionTwo = (arr) => {
    // code comes here
    setTimeout(() => {
        try{
            for(let i =0; i < arr.length;i++){
                arr[i] = arr[i] * arr[i] * arr[i];
            }
            return arr;
        } catch(err) {
            return(`Exception has occured : ${err}`);
        }
    }, 2000)
}

 console.log(functionTwo([1,2,3]));*/

// Using promises

// find out the cubes of the numbers.
   const promiseTwo = (arr) => {
    return new Promise((resolve, reject) => {
        // code comes here
        setTimeout(() => {
            try{
                for(let i =0; i < arr.length;i++){
                    arr[i] = arr[i] * arr[i] * arr[i];
                }
                resolve(arr);
            } catch(err) {
                reject(`Exception has occured : ${err}`);
            }
        }, 2000)
    })
}

promiseTwo([2,3]).then((result) => {
    console.log(`Final cubed array is : ${result}`);
}).catch((errResult) => {
    console.error(errResult);
});