/*const arr = [1,2,3,4,5];

// Map method is used to transform each and every element of any array.
// Map method returns the new array as length same as existing array.

const mappedArr = arr.map((num, index, arr) => {
    if (index === 2) 
        return num * 5;
    else 
        return num;
});

// const mappedArr = arr.map(num =>  num*5);

console.log(mappedArr);




// Reducer will reduce array to a single element

const arr = [1,2,3,4,5];

const result = arr.reduce((preNum, currNum, index, arr) => {
    console.log(preNum, currNum);
    return preNum*currNum
});

console.log(result);

// Practise 5 programs on each concept of map, array and reducer.


// Filter method is used if you want to filter the elements of an array based on a condition

const arr = [-1, -2, 4, 5, 7];

const filteredArr = arr.filter((num, index, arr) => {
    return num > 0
});

const filteredArrShort = arr.filter(num =>   num > 0);

console.log(filteredArr);
console.log(filteredArrShort);*/

// Filter method is used if you want to filter the elements of an array based on a condition

const arr = [-1, -2, 4, 5, 7];

const filteredArr = arr.filter((num, index, arr) => {
    return num > 0
});

const filteredArrShort = arr.filter(num =>   num > 0);

console.log(filteredArr);
console.log(filteredArrShort);