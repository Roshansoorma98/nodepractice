//Adding each element 
/*const arr = [1,2,3,4,5];

const result = arr.reduce((preNum, currNum, index, arr) => {
    //console.log(preNum, currNum);
    return preNum+currNum;
});

console.log(result);

//Multiplying element to each others
const arr = [1,2,3,4,5];

const result = arr.reduce((preNum, currNum, index, arr) => {
    //console.log(preNum, currNum);
    return preNum*currNum;
});

console.log(result);

//Avg of elements
const arr = [4,6,8,3,5];

const result = arr.reduce((preNum, currNum, index, arr) => {
    //console.log(preNum, currNum);
    return preNum+currNum;
});

console.log("The avg of elements:",result/2);
// output is even or odd
const arr = [10,5,20];

const result = arr.reduce((preNum, currNum, index, arr) => {
    //console.log(preNum, currNum);
    return preNum+currNum;
});
if(result%2==0)
    console.log(`${result} is an even number`);
else
    console.log(`${result} is an odd number`);*/

//substraction on elements
const arr = [4,6,8,3,5];

const result = arr.reduce((preNum, currNum, index, arr) => {
    
    return preNum-currNum;
});

console.log(result);