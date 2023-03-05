//Qs 1. Count Characters
//You are given a string S,and your task is to return an array B(having a size of 2), where B[0] contains the count of character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.
//Note: You have to complete countCharacters function. No need to take any input.
//Ans-
const countCharacters = (S) => 
{
  let B=[0,0];
  for(let i=0; i<S.length; i++){
    
    if(S[i] == "A")
    {
      B[0]++;
    }    
    else if(S[i] == "D")
    {
      B[1]++;
    }      
  }
  return (B);
};

// --------------------------------------------------------------------------

//Qs 2. Count the Heads
//Tina is given a string  S which contains the first letter of all the student names in her class. She got a curiosity to check how many people have their names starting from the same alphabet. So given a string  S , she decided to write a code that finds out the count of characters that occur more than once in the string.
//Note: You have to complete Count Head function. No need to take any input.
//Ans- 
var Count_Occ = (s) => 
{
  let heads = '',
  stringSet = new Set(s.split('')),
  arr = [],
  count = 0;
  for(const values of stringSet)
  {
    arr.push(values);
  }
  arr.sort();
  
  for(let i=0; i<arr.length; i++)
  {
    let count = 0;
    for(let j=0; j<s.length; j++)
    {
      if(arr[i] === s[j])
      {
        count++;
      }
    }
    if(count > 1)
    {
      heads += arr[i]+count;
    }
  }
  return heads; 
};


// Sample Input
// prepbytes

// Sample Output
// e2p2


// --------------------------------------------------------------------

//Qs 3. Count the Vowels
//You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string.
//Note: You have to complete Count_Vowel function. No need to take any input.
//Ans-
var Count_Vowels= (S) => 
{
  let theString = S.toLowerCase(),
  letter,
  vowels = "aeiou",
  count = 0;
  
  for ( let i = 0; i < S.length; i++ )
  {
    letter = theString.charAt(i);
    if (vowels.indexOf(letter) > -1)
    {
      count++;
    }
  }
  return count;
};


// -----------------------------------------------------------------------------------

//Qs 4. Concatenate the Strings
//You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the concatenation of both the given strings. 
//Note: You have to complete Concatenate_Strings function. No need to take any input.
//Ans- 
var Concatenate_Strings = (S1, S2) => 
{
      return (S1.concat(S2));
};

// -------------------------------------------------------------------------------

//Qs 5. Find Length
//You are given a string S,and your task is to return the length of the string S.
//Note: You have to solve it without using length method. You have to complete findLength function. No need to take any input.
//Ans-
const findLength = (S) => 
{
    return (S.length);
};

// -----------------------------------------------------------------------------------------

//Qs 6. Find the Winner
//You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. 
//You need to find out the that which player wins the maximum number of games or there is a draw between them.
//Note: You have to complete Game_Winner function. No need to take any input.
//Ans-
var Game_Winner = (S) => 
{
  let A = 0,
  D = 0;
  for (let i = 0;i<S.length;i++)
  {
    if(S[i] == "A"){
      A++;
    }
    else{
      D++;
    }
  }
  if(A>D){
    return ("Aditya");
  }
  else if(A<D){
    return ("Danish");
  }
  else{
    return ("Draw");
  }
};


// Sample Input 1
// ADDAAADDDDD

// Sample Output 1
// Danish

// Sample Input 2
// ADDAAADD

// Sample Output 2
// Draw
// ----------------------------------------------------------------------------------

//Qs 7. Join Strings
//You are given two strings S and P, and your task is to concatenate them and return the concatenated string.
//Note: You have to complete joinStrings function. No need to take any input.
// Ans-
const joinStrings = (S, P) => 
{
  return (S.concat(P));
};

// Sample Input
// PrepBytes Technologies

// Sample Output
// PrepBytesTechnologies

// -----------------------------------------------------------------------------------

//Qs 8. Plaindrome Check
//You are given a string S,Your task is to check wether the given string is a Palindrome or not
//A Palindrome is a string, which turnout same when read in reverse direction.Example: "naman" is a Palindrome.String can contain both upppercase lowercase letters.
//Note: You have to complete Plain_Check function. No need to take any input.
// Ans-
var Palin_Check = (str) =>
{
	for (let i = 0; i < str.length / 2; i++) {  
    if (str[i] !== str[str.length - 1 - i]) {  
        return ("False");  
    }  
  }  
  return ("True");  
};

// Sample Input 1
// Naman

// Sample Output 1
// False

// Sample Input 2
// naman

// Sample Output 2
// True

// -------------------------------------------------------------------------------

//Qs 9. Reverse the String
///You are given a string S,Your task is to Reverse the string.string can contain both upppercase lowercase letters. 
//Note: You have to complete Reverse_String function. No need to take any input.
//Ans-
var Reverse_String = (str) => 
{
    const S = str.split("");
    const reversed = S.reverse();
    const joinStr = reversed.join("");
    return joinStr;
};

// Sample Input
// I am utkarsh raj

// Sample Output
// jar hsraktu ma I

// ---------------------------------------------------------------------------

//Qs 10. Match the Strings
//You are given two strings S1 and S2, task is to print  YES,if both strings are same else print NO.
//Note: You have to complete String_Match function. No need to take any input.
//Ans-
var String_Match = (S1,S2) => 
{
      var result = S1.localeCompare(S2);
      if(result === 0){
        return ("YES");
      }
        return ("NO");
};

// Sample Input
// Prepbytes
// Prepbytes

// Sample Output
// YES

// ---------------------------------------------------------------------------

//Qs 11. String Replace
//You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in S to the text string.
//Note: You have to complete Replace function. No need to take any input.
//Ans-
var Replace = (S, pattern , text) => 
{
  return (S.replace(pattern,text)) ; 
};

// Sample Input
// Hi, I am You.
// You
// Prepbytes

// Sample Output
// Hi, I am Prepbytes.

// ------------------------------------------------------------------------------------------

//Qs 12. Split the String 
//You are given a string S, Your task is to split the string with respect to spaces.
//Note: You have to complete Split_the_String function. No need to take any input.
//Ans-
var Split_the_string = (S) => 
{
  let arr = S.split(' ');
    
    return (arr);       
};

// Sample Input
// I am utkarsh raj

// Sample Output
// I
// am
// utkarsh
// raj

// -----------------------------------------------------------------------------------------

//Qs 13. Count the Vowels and Consonants
//You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels and the number of consonants in the given string.
//Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input.
//Ans-
var Count_Vowels= (S) => 
{
  let theString = S.toLowerCase(),
  letter,
  vowels = "aeiou",
  count = 0;
  
  for ( let i = 0; i < S.length; i++ )
  {
    letter = theString.charAt(i);
    if (vowels.indexOf(letter) > -1)
    {
      count = count + 1;
    }
  }
  return count; 
};

//------------------------------------------------------

var Count_Consonants= (S) => 
{
  let theString = S.toLowerCase(),
  letter,
  vowels = "aeiou",
  count = 0;
  
  for ( let i = 0; i < S.length; i++ ){
    letter = theString.charAt(i);
    if (vowels.indexOf(letter) == -1) {
      count = count + 1;
    }
  }
  return count;    
};

// Sample Input
// Prepbytes

// Sample Output
// 2
// 7
 