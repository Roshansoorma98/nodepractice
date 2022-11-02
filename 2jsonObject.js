//this is the example of using array in object
/*const person={name:'Ritik', 
age:23, 
city:['Seoni malwa','indore','bhopal'],
college:'svce',
address:{block:'Seoni malwa',
pincode:'461223',
state:'MP'
}
}
/*for(let key in person)
{
    result=person[key];
    console.log(result);
}

delete person.city[1];

console.log(person);*/

// using function in object
//using functions in objects
const person = {
    name:"ashok",
    age:20,
    profession:"student",
    course:"b.tech",
    college:"jntuk",
    sem:1,
    fullName : `${this.name}`, // cannot use this operator outside the functions.
    subjects:function sub() {
       // code
       return `${this.name} is of age ${this.age} and he studies in college ${this.college}`; // You can access the properties of the object inside object using this operator
    },
    arrowFunEg:() => {
        return `${this.name} is of age ${this.age} and he studies in college ${this.college}`; // this operator cant be used inside arrow functions of object.
    }

}
   
console.log(person.subjects());
console.log(person.arrowFunEg());

