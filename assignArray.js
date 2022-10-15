//Join() method

/*const sArray= [6,10,5,20,15];
console.log(sArray.join());// it gives the output with seperation of arrya element by ,

console.log(sArray.join('')); // it will concat each element show the element without ,
console.log(sArray.join('-'));// if we want to use other seperator so we need to follow this
//console.log(sArray[1].join('-'));*/

// Random element

/*const arg= [3,10,'Roshan',20,25, 16];
const length= arg.length;
const value= Math.random()*length;
const result= Math.floor(value);
console.log('The random element is : ', arg[result]);

const arg= [3,10,'Roshan',20,25, 16];
const result= Math.floor(Math.random()*arg.length);
console.log('The random element is :',arg[result]);*/

// Program on toString

const arg= [3,10,'Roshan',20,25, 16];
const a=(arg.toString()); // Its represent an string by array element
console.log(arg);
const b=(`${arg}`);
console.log(typeof a,a);
console.log(typeof b,b);



/*const str ="roshan";
const str2= `Roshan is ${a}`;
console.log(str2);


const c = true; //--->.number
const e = false;

const f =c+e;//-->60 number
const g =c.toString();
const h= e.toString();

const i = g+h;
console.log(i);
console.log(f)

const value =[ Math.random(), Math.random()];
console.log(value);
//https://javascript.info/*/