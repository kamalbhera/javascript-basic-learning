// Qs 1. Find the number of digits.
// Take a number from the user and print the count of digits in that number.
// Note: You have to complete Find_Digits. No need to take any input.
//Ans- 
        const Find_Digits = (N) => 
        { 
        var a = 0;
        while (N !== 0)
        {
            a = a + 1;
            N = parseInt(N / 10);
        }
        return (a);
        };

// ----------------------------------------------------------------

// Qs 2. Find the Fives.
// Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.
// Note: You have to complete Find_Five. No need to take any input.
//Ans-
        const Find_Five = (N) => 
        { 
            let x = 0;
            for (; N > 0; )
            {
              let y = 0;
              y = parseInt(N % 10);
              if(y == 5)
              {
                x++;
              }
              N = parseInt( N / 10);
            }
            return(x);
        };

// -----------------------------------------------------------------------

//Qs 3. Find Sum
// You are given an integer N, and your task is to find the sum of all the even integers starting from 1 upto N (N inclusive).
// Note: You have to complete findSum function. No need to take any input.
//Ans-
        const findSum = (n) => {
            let x, y = 0;
            for(x=1; x<=n; x++)
            {
            if (x%2===0)
            {
                y=y+x;   
            }
            }
            return (y);
        };

// ------------------------------------------------------------------------

//Qs 4. Find the sum of the digits of a given number.
// Write a program that takes a number from the user and get the sum of the digits present in the number.
// Note: You have to complete Number_Sum. No need to take any input.
//Ans-
        const Number_Sum = (N) => 
        {
            let x, y = 0;
            while(N)
            {
            x = N%10;
            y = y + x;
            N = parseInt(N/10);
            }
            return y;
        }

// -------------------------------------------------------------------------------------

//Qs 5. Print the Odds.
// Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.
// Note: You have to complete Print_Odd. No need to take any input.
//Ans-
        const Print_Odd = (N) => 
        {
        let i=2;
        console.log(i);
            for (; i <= N; i++)
            {
            if (i%2 !== 0)
            {
            console.log(i);
            }
            }
        };

// ------------------------------------------------------------------

//Qs 6. Print the Pattern.
// Write a program which ask user for no of lines and print a pattern using an asterik .
// Note: You have to complete Print_pattern. No need to take any input.
//Ans-
        const Print_pattern = (N) => 
        {
        let a = "";
        for (let i = 1; i <= N; i++) {
            for (let b = 0; b < i; b++) {
            a = a + "*";
            }
            a = a + "\n";
        }
        console.log(a);
        };

// ---------------------------------------------------------------------

//Qs 7. Check whether a Number is a prime or not.
// Write a program which takes  a number from user and check whether number is prime number or not a prime number.
// Note: You have to complete Prime_Check. No need to take any input.
//Ans-
        const Prime_Check = (N) => 
        {  
        if (N < 2){
            return ("NO");
        }
        for (let z = 2; z<N; z++){
            if (N % z === 0){
            return ("NO");
            }
        }
        return ("YES");
        };

// -------------------------------------------------------------------

//Qs 8. Print Numbers
//You are given an integer N, and your task is to print all the integers starting from 1 till N (N inclusive).
//Note: You have to complete printNumbers function. No need to take any input.
//Ans-
        const printNumbers = (n) => 
        {
            for (var i = 1; i <= n; i++){
                console.log(i);
            }
        };

// --------------------------------------------------------------------

//Qs 9. Print the Table
// Write a program which takes a number from user and print the table.
// Note: You have to complete Print_Table. No need to take any input.
//Ans-
        const Print_Table = (N) => 
        {
            for (let i = 1; i <= 10; i++){
            console.log(`${N} * ${i} = ${N*i}`);
            }
        };
