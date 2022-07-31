//Day 5 Assignment 3
//programs in arrow functions

//a  Print odd numbers in an array

var odd= (num)=> {  
    if(num%2===1){
    console.log("odd");
    }
    else{
    console.log("even")
    }
    return odd;  
}
odd(5) ; 

//b  Convert all the strings to title caps in a string array

var title =(str)=> {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}
console.log(title("HELLO WORLD"));

//c  Sum of all numbers in an array

var arr=[1,2,3,4,5]

var sum=(arr) => {  
        let sum = 0;  
        for (let i = 0; i < arr.length; i++)  
            sum =sum + arr[i];  
        return sum;  
    } ; 
console.log(sum(arr));

//d  Return all the prime numbers in an array

var num = [1,2,3,4,5,6,7,8,9];
var result = [];
var prime=(num) => {
  if(num < 2){
       return false
    };
  for (let k = 2; k < num; k++){
      if(num % k == 0){
          return false;
        }
  }
  return true;
}
num.forEach((element) => {
  let item = prime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

//e  Return all the palindromes in an array

var Palindrome=(s)=>{
  let a = s;
 s = s.split('').reverse().join('');
  return s == a;
}

var plstr=(arr,N)=>{
 let ans = [];
 for (let i = 0; i < N; i++) {
     if (Palindrome(arr[i])) {
      ans.push(arr[i]);
     }
 }
 return ans;
}
let arr = [ "jutsu", "malayalam", "ada", "racecar", "cool" ];
let N = arr.length;

let s = plstr(arr, N);
for(let st of s)
console.log(st," ");