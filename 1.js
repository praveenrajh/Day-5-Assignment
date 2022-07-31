//Day 5 Assignment 1
//Programs in anonymous function & IIFE

//a  Print odd numbers in an array

(function(num) {  
    if(num%2===1){
    console.log("odd");
    }
    else{
    console.log("even")
    }
    return odd;  
})(3) ; 

//b  Convert all the strings to title caps in a string array

var title = function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}
console.log(title("HELLO WORLD"));

//c  Sum of all numbers in an array

var arr=[1,2,3,4,5]

var sum= function(arr) {  
        let sum = 0;  
        for (let i = 0; i < arr.length; i++)  
            sum =sum + arr[i];  
        return sum;  
    } ; 
console.log(sum(arr));

//d Return all the prime numbers in an array

var num = [1,2,3,4,5,6,7,8,9];
var result = [];
var prime=function(num) {
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
num.forEach(function (element) {
  let item = prime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

//e  Return all the palindromes in an array

var Palindrome=function(s){
     let a = s;
    s = s.split('').reverse().join('');
     return s == a;
}

var plstr=function(arr,N){
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
 
//f  Return median of two sorted arrays of the same size

var median = function(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var m1 = -1, m2 = -1;

    for (var a = 0; a <= n; a++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
      
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
 
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2){
    console.log(median(ar1, ar2, n1));
}

//g  Remove duplicates from an array

var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
  
var Duplicates = function (arr) {
    var a = [];
    for (var i=0, l=arr.length; i<l; i++)
    if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
        a.push(arr[i]);
        return a;
}
console.log(Duplicates(arr));

//h  Rotate an array by k times

var Rotate = function (a, n, k){
	k = k % n;
  for (let i = 0; i < n; i++) {
		if (i < k) {
			console.log(a[n + i - k] + " ");
		}
		else {
			console.log((a[i - k]) + " ");
		}
	}
}
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 3;
Rotate(Array, N, K);



