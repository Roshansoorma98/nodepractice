// find out the cubes of the numbers.
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

promiseTwo([11,2,3]).then((result) => {
    console.log(`Final cubed array is : ${result}`);
    // sort this array after getting cube for each element
    return new Promise((resolve, reject) => {
        const sortedArr = null.sort((a,b) => {
            return a-b;
        });
        resolve(sortedArr);
    })
}).then((secResponse) => {
    console.log(`sorted response is : ${secResponse}`);
}).catch((errResult) => {
    console.error(`Ctach block is : ${errResult}`);
});

// 5 programs on how to avoid callback hell using promises.


/*//obj in Promises
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        const a =2 ;
        if (a === 2)
            resolve('Success');
        else
            reject('False');
    }, 2000)
});


promiseOne.then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});

// 5 programs on this concept.

// what is promise.all and a program on that concept.*/