// let user = 'yash';
// console.log(user)
// let items =[ 'milk', 'bread','butter','apple'];
// console.log(items)
// items[1]='muttapapps'
// console.log(items)
// items.push('mangoes','orange','pinapple')
// items.pop()
// items.pop()
// items.splice(1,1,'mango')
// console.log(items)
// let user ={
//     name:'Abcd',
//     Age: 34,
//     address:'Mumbai',
//     email: 'abcd@gmail.com',
//     hobbies:['teaching','reading','cooking']
// }
// // console.log(user.hobbies[2])
// user.name ='ram'
// user.phone = '0987654321'
// // console.log(user.phone)
// delete user.Age
// console.log(user)
// console.log(typeof user)
// let users =[
//     {name:'yash', age:24, address:'mumbai'},
//     {name:'Abhi', age:18, address:'Bangalore'},
//     {name:'Ram', age:20, address:'chennai'},
//     {name:'Krish', age:17, address:'Goa'},
//     {name:'Gopal', age:15, address:'kerala'},
//     {name:'Nandu', age:15, address:'kerala'},
//     {name:'Don', age:15, address:'kerala'},
//     {name:'Vijay', age:15, address:'kerala'},
//     {name:'Arun', age:15, address:'kerala'},
//     {name:'Shyam', age:15, address:'kerala'},
//     {name:'Addarsh', age:15, address:'kerala'},
//     {name:'Praveen', age:15, address:'kerala'},
//     {name:'Sasi', age:15, address:'kerala'},
//     {name:'Sangu', age:15, address:'kerala'},
//     {name:'ROhith', age:15, address:'kerala'},
//     {name:'Rohan', age:15, address:'kerala'},
// ]
// let random = Math.random()
// let random=Math.floor(Math.random()*100)
// let random= Math.floor(Math.random()*10)
// let random=Math.floor(Math.random()*100000)
// console.log(random)
// let random = Math.floor(Math.random()*users.length)
// console.log(users.length)
// console.log(users[random].name)

//task 1


let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];
console.log(shoppingList[0])
shoppingList.push('carrots')
console.log(shoppingList)
shoppingList.pop()
//arr.splice(indexvalue,deletevalue,additems)
let items = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];
console.log(items);
items[items.length-1].splice(1,1,"cucumbers");
items[items.length-1].splice(2,1,'Bell Peppers');

// task 2

let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};
console.log(student.name)
student.phone="123-456-7890"
// student.Gender="Male" 
// student.Subject="Maths"
console.log(student)
delete student.grade;
console.log(student)
//  delete student.address.country;
// student.address.state="kerala";
student.age="21"

//conditionals assignment
//task 1

let num=100
if(num>0){
    console.log("the number is +ve")
}
else if(num>=0){
    console.log("the number is Zero")
}
else{
    console.log("the number is -ve")
}

//task2

//90>= and <=100 --grade A
//80>= and <=89 --grade B
//70>= and <=79 --gade C
//60>= and <=69 --grade D
//<60--grade F

let grade=95
if(grade>=90 && grade<=100){
    console.log('Your Grade is: A')
}
else if(grade>=80 && grade<=89){
    console.log("your grade is:B")
}
else if(grade>=70 && grade<=79){
    console.log("your grade is:C ")
}
else if(grade>=60 &&  grade<=69){
    console.log("your grade is:D")
}
else{
    console.log("your Grade is : F !!!!")
}

// task 3
num='hi goooys'
if(num){
    console.log("Truthy")
}
else{
    console.log("falsy")
}