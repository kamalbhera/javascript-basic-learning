//Qs 1. Find the Product.
//Write a program that takes an array as input from the user and find out the product of the elements.
//Note: You have to complete Find_Prod. No need to take any input.
//Ans - 
const Find_Prod = (array, N) => 
{
  const prod =  array.reduce((x,y)=> x*y);
  return (prod); 
};

//Sample Input
// 5
// 1 2 3 4 5

// Sample Output
// 120
// -----------------------------------------------------------------------------------------------------

//Qs 2. Find the Sum.
//Write a program which takes an array as input from the user and find out the sum of the array elements.
//Note: You have to complete Find_Sum. No need to take any input.
//Ans -
const Find_Sum = (array, N) => 
{
  const sum =  array.reduce((x,y)=> x+y);
  return (sum);

};
//Sample Input
//5
//1 2 3 4 5

//Sample Output
//15

// --------------------------------------------------------------------------------------

//Qs 3. Count Occurrences.
//You are given an array A containing N integer elements and an integer K, and your task is to return the count of occurrences of 
//K in array A.
//Note: You have to complete findCount function. No need to take any input.
//Ans -
const findCount = (N, K, Arr) => 
{
    let count=0;
    for(let i=0; i<Arr.length; i++){
        if (Arr[i] == K){
          count++;
        }
    }
    return (count);
};

// Sample Input
// 4 3
// 3 3 1 2

// Sample Output
// 2

// ------------------------------------------------------------------------------

//Qs 4. Even Odd.
//You are given an array A containing N integer elements, and your task is to return an array B(having a size equal to 2)
//, where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A.
//Note: You have to complete findEvenOdd function. No need to take any input.
//Ans- 
const findEvenOdd = (N, Arr) => 
{
    let sum = [0 , 0];
    for(let i = 0; i < N; i++)
    {
      if(Arr[i] % 2 === 0)
      {
	sum[0] += Arr[i];
      }
      else
      {
	sum[1] += Arr[i];
      }
    }
    return (sum);
};

// Sample Input
// 7
// 1 2 3 4 5 6 7

// Sample Output
// 12 16

// ------------------------------------------------------------------

//Qs 5. Find whether the number is present or not.
//Write a program which takes an array as input from the user and a number.
//Check whether the number is present or not.
//Note: You have to complete Find_Num. No need to take any input.
//Ans- 
const Find_Num = (array,N,M) => 
{
  for(let i = 0; i<array.length; i++){
   if(array[i] === M){
    return ("YES");
   }
  
  }
  return ("NO");
};

// Sample Input
// 5
// 1 2 3 4 5
// 2

// Sample Output
// YES

// -------------------------------------------------------------------------------------

//Qs 6. Higher Age.
//You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 18(18 included).
//Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge function. No need to take any input.
//Ans- 
const highAge = (N, Arr) => 
{
    let filterArr = Arr.filter(item => item >= 18);
    return (filterArr);
};

// Sample Input
// 6
// 11 23 3 45 72 68

// Sample Output
// 23 45 72 68

// -------------------------------------------------------------------------------

// Qs 7. Increment the Array Elements.
//You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.
//You have to complete Inc_Arr. No need to take any input.
//Ans- 
const Inc_Arr = (array,N) => 
{
  let i = 0;
  while (i < array.length){
    console.log(array[i] + 1);
    i++;
  }
};

// Sample Input
// 5
// 1 2 3 4 5

// Sample Output
// 2 3 4 5 6 

// -------------------------------------------------------------------------------

//Qs 8. Pass or Fail.
//You are given an array A containing the maths marks of students in your class, and your task is to determine if all the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 32.
//If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes).
//Note: You have to complete isAllPass function. No need to take any input.
//Ans-
const isAllPass = (N, Arr) => 
{
  for(let i = 0; i < N; i++)
  {
    if (Arr[i] < 32)
    {
      return ("NO");
    }
  }
  return ("YES");
};

// Sample Input
// 7
// 13 89 45 98 67 45 54

// Sample Output
// NO

// ---------------------------------------------------------------------------------

// Qs 9. Unique Color Shirt
//Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe.Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many M
//unique color shirts are left in the wardrobe. Prepbuddy wants you to find M.
//Note: As there are many shades of a color so consider integers as a color name.
//i.e, color of shirt is 0,1,2, … , N.
// Ans-
function Unique_Shirts (arr,N) {
  
    let remains = 0;
    for (let i=0; i < arr.length; i++){
      
      var count = [];
      for (let j=0; j < arr.length; j++){
             
        if (arr[i] == arr[j]){
          count++;
        }
             
      }
      if(count == 1){
        remains++;
      }
    }
    return (remains);
  }

// Input
// 6
// 3 2 4 1 2 3

// Output
// 2

// -------------------------------------------------------------------------------

// Qs 10. Min and Max.
//Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.
//The problem statement is simple- given N elements, find the minimum and maximum numbers among those elements.
// Ans-
function arrayMin(Arr) {
    return Math.min(...Arr);
  
  }
  
  function arrayMax(Arr) {
   return Math.max(...Arr);
  }


//   Input
//   6
//   3 1 4 6 2 7
//   output
//   1 7

// -----------------------------------------------------------------------

// Qs 11. Birthday Game.
// Yatharth and Anamika are playing a game. Anamika loves Yatharth very much and she wants to share a chocolate bar with him in which each of the squares consists of an integer represented by A[i]. 
//She decides to share a contiguous segment of the chocolate bar selected such that the length of the segment matches Yatharth's birth month 
//M and the sum of the integers on the squares is equal to his birthday D. 
//You must determine how many ways she can divide the chocolate.
// Ans- 
function Birthday_Game(arr,D ,M) {
 
    let count = 0;
    for(let i = 0; i < arr.length - (M - 1); i++)
    {
      let sum1 = 0;
      for(let j = i; j < i + M; j++)
      {
        sum1 += arr[j];
      }
      if(sum1 === D)
      {
        count++;
      }
    }
    return count;
  
}

// Input
// 5
// 2 2 1 3 2
// 4 2

// Output
// 2
