//common array properties nand methods
let arr1=[1,2,3,4,5]
const arr2=[72,13,32,17,90]

arr1.concat(arr2);// output [1,2,3,4,5,72,13,32,17,90]
arr1.reverse() //output [5.4.3.2.1]  reverses the elements in the array this methods overwrites the original array
arr1.indexOf(3) // output 2 returns index of the element in the array
arr2.find((value)=>value<=18)  //output 13 returns first element that meets the condition
arr1.forEach((item)=>item*2)  //output it takes each element within the array and multiplies it by 2   2 4.6,8,10
arr1.map((item)=>item*2)  //same output as forEach() method
//diff between forEach() and map()
//-forEach() does not return new array based on given array map() returns an entirely new array
//-forEach() returns undefined  map()returns the newly created array
//-forEach() doesn't return any value hence method chaining not posssible map() can be chained
//-forEach() not executed for empty elements map 
arr1.join("separator") // returns the elements as a string separated by the separator{, . - anything}
arr1.push(9); // output [1,2,3,4,5,9]  adds the element as the last in the array
arr1.pop()//  5  returns the last element off the array and returns it
arr1.shift()// output 1  removes the first element from the array and returns it
arr1.unshift(9)// [9,1.2.3.4.5] adds elements to the begining of array
arr1.sort((a,b)=>b-a)  //[5,4,3,2,1]  sorts the elements in descending order
arr1.reduce((acc,curr)=>acc+curr,0) //15 this is a single usecase {calculating the sum} for reduce though it has lots of usage 
arr1.filter((item)=>item>4) // output 5  filters items based on the given condition on the callback function

