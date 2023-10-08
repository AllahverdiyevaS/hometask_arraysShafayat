// решить три задачи с codewars
//  https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// const check =(num)=>{ return num%2===0?"even":"odd"}

// console.log(check(7));

// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
// Write a function to split a string and convert it into an array of words.
// function stringToWord(string) {
//   const array=string.split(' ')
//   return array

// }
// const string="I love arrays they are my favorite"
// console.log(stringToWord(string));

// https://www.codewars.com/kata/55b42574ff091733d900002f
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.
// function filterFriends(array) {
//   return array.filter((el) => el.length === 4);

// }

// const array = ["Ryan", "Kieran", "Jason", "Yous"];
// console.log(filterFriends(array));

// Задача на filter
// 1. Отфильтровать массив только с уникальными хначения используя filter и indexOf()
// const products = ["Apple","Banana","Cherry","Apple","Orange","Cherry"];

// const uniqProducts = products.filter((el, index, products) => {
//   return products.indexOf(el) === index;
// });
// console.log(uniqProducts);

// // 2. Отфильтровать продукты дешевле 15
// const products = [
//   { name: "Apple", price: 15 },
//   { name: "Banana", price: 8 },
//   { name: "Cherry", price: 3 },
//   { name: "Grape", price: 22 },
//   { name: "Orange", price: 12 },
// ];
// const priceFilter = products.filter((el) => el.price < 15);
// console.log(priceFilter);
// // 3. Найти объект с автором В
// const books = [
//   { title: "Book 1", author: "Author A" },
//   { title: "Book 2", author: "Author B" },
//   { title: "Book 3", author: "Author A" },
//   { title: "Book 4", author: "Author C" },
// ];
// const authorB=books.find((el)=>el.author==="Author B")
// console.log(authorB);

// // задачи sort

// // 4. отсортировать по id
// const arr2 = [
//   { id: 9, title: "велосипед", price: 45000 },
//   { id: 14, title: "самокат", price: 15000 },
//   { id: 7, title: "сноуборд", price: 20000 },
//   { id: 1, title: "лыжи", price: 22000 },
//   { id: 3, title: "ролики", price: 18000 },
//   { id: 13, title: "коньки", price: 17000 },
//   { id: 4, title: "скейтборд", price: 19000 },
//   { id: 15, title: "парашют", price: 50000 },
//   { id: 8, title: "гироборд", price: 25000 },
//   { id: 6, title: "сёрфборд", price: 27000 },
//   { id: 10, title: "подводные лыжи", price: 55000 },
//   { id: 12, title: "мотоцикл", price: 65000 },
//   { id: 11, title: "санки", price: 5000 },
//   { id: 5, title: "батут", price: 30000 },
//   { id: 2, title: "катамаран", price: 32000 },
// ];
// const idSort=arr2.sort((a,b)=> {return a.id-b.id})
// console.log(idSort);
// // 5. отсортировать объекты по алфавиту
// const people = [
//   { name: "Frank", age: 35 },
//   { name: "Eva", age: 22 },
//   { name: "Hannah", age: 31 },
//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 30 },
//   { name: "Jack", age: 27 },
//   { name: "Bob", age: 20 },
//   { name: "David", age: 28 },
//   { name: "Grace", age: 29 },
//   { name: "Isaac", age: 23 },
// ];
// const sortFromAToZ=people.sort((a,b)=>{return a.name.localeCompare(b.name)})
// console.log(sortFromAToZ);

// // 6. Отсортиировать по возрасту
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 30 },
//   { name: "David", age: 28 },
//   { name: "Eva", age: 22 },
//   { name: "Frank", age: 35 },
//   { name: "Grace", age: 29 },
//   { name: "Hannah", age: 31 },
//   { name: "Isaac", age: 23 },
//   { name: "Jack", age: 27 },
// ];
// const sortAge=people.sort((a,b)=>a.age-b.age)
// console.log(sortAge);

// // задачи reduce
// // 7. найти сумму четных!! чисел массива.
// const numbers22 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39];
// const sumOfEven = numbers22.reduce((acc, val) => {
//   return val%2 === 0 ? acc + val : acc;
// }, 0);
// console.log(sumOfEven);

// // 8.  Используя метод reduce найти наибольшее число массива.
// const numbers23 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39];
// const maxNumber=numbers23.reduce((acc,current)=>{if (current>acc ){return current

// }else{return acc}})
// console.log(maxNumber);

// // 9.reduce найти объект товара с самой высокой ценой.
// const arr2 = [
//   { id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
//   { id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
//   { id: 3, title: "сноуборд", price: 20000, marks: [3, 3, 2, 3] },
//   { id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
// ];
// const maxPrice=arr2.reduce((acc,current)=>{if (current.price>acc.price) {return current

// }else{return acc}});
// console.log(maxPrice);

// // 10. Найти среднюю оценку marks у товара
// const arr2 = [
//   { id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
//   { id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
//   { id: 3, title: "сноуборд", price: 20000, marks: [3, 3, 2, 3] },
//   { id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
// ];
// const newArr2=[];

// for (const { marks, ...el } of arr2) {
//   const average =
//     marks.reduce((acc, current) => acc + current, 0) / marks.length;
//    el.average = average;
// newArr2.push(el);
//  }

//  console.log(newArr2);
