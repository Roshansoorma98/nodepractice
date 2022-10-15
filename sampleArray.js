const arg= [6,10,8,12,15,20];// assigning the valuse to array
console.log('Taken array',arg);

console.log('The length of array is : ',arg.length);// it will give the length of array

console.log('First element of array : ',arg[0]); //it will show the first index value

arg.push(30);// push is use to add another element in array
console.log('After pushing elemrnt:',arg);

arg.pop(); //pop is use t remove last index value
console.log('After using pop:',arg);

console.log(`After using pop: ${arg}`); // it shows the all value of array without bracket

arg.push('Roshan');// pushing string in same array
console.log('After pushing String: ',arg);

const cars= new Array("Suzuki", "Maruti", "Verena");// declaring array class using new 
console.log('Array class',cars);

console.log('The Sortest array',arg.sort((a,b)=>{return a-b})); // it giver shortes array element

console.log('The Sortest string array',cars.sort()); 
console.log('Last index element:', arg[arg.length-1]);