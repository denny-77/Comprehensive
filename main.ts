export{}
let message='Hello World';
console.log(message);

let x=20;
let y=20;

let isBeginner: boolean=true;
console.log(isBeginner);
let total: Number=40;
console.log(total);
let name: string='Denny';
let sentence: string=`My name is ${name}
I am a beginner in TypeScript`;
console.log(sentence);

let list1:number[]=[1,3,5,7];
console.log(list1);
let list2:Array<number>=[2,4,6,8];
console.log(list2);

let person1: [string,number]=['John',22];
console.log(person1);

enum car {BMW,BENZ,AUDI};
let c: car=car.BENZ;
console.log(c);

let a;//haven't specified type so inferred it to be of type any.
a=10;
a=true;

let b=20;//type inference taking place.

let multiType: number|string;
multiType=20;
multiType='Chris';

function add(num1:number,num2:number,num3?:number)
{
  if(num3)
  return num1 + num2 + num3;
  else
  return num1+num2;
}
console.log(add(10,10));
console.log(add(5,10,15));


interface Person{
  name:string;
  age:number;
}
function name_age(person:Person)
{
  console.log(`${person.name} ${person.age}`);
}
let p={
  name:'Bruce Wayne',
  age:28 
};
name_age(p);

class Employee
{
  empname:string;
  constructor(name:string)
  {
    this.empname=name;
  }
  greet()
  {
    console.log(`Good Morning ${this.empname}`);
  }
}

let emp1=new Employee('Rahul');
emp1.greet();

class Manager extends Employee
{
  constructor(managername:string)
  {
    super(managername);
  }
  delegate()
  {
    console.log('Manager delegating tasks');
  }
}

let m1=new Manager('Ramesh');
m1.delegate();
m1.greet();
