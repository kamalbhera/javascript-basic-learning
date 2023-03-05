//Qs 1. Calculator.
//Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.
//Note : You have to complete Calculator. No need to take any input
//Ans- 
        const Calculator = (A, B, C) => 
        {
            switch (A) {
                case '+':
                    return (B + C);
                    break;
                case '-':
                    return (B - C);
                    break;
                case '*':
                    return (B * C);
                    break;
                case '/':
                    return (B / C);
                    break;
                default:
                    return ("Enter Valid Values");
            }
        };

// ----------------------------------------------------------------------------------------------------------------

//Qs 2. Check whether the condition is fulfilled or not?
//Write a program that takes a number and prints whether the number is divisible by 6 and 9 or not.
//Note: You have to complete Check_divisibility. No need to take any input.
//Ans -
        const Check_divisibility = (N) =>
        {
        if ((N % 6) === 0 && (N % 9) === 0)
        {
            return ("Divisible by both");
        }
        else
        {
            return ("Not Divisible by both");
        }
        };

// --------------------------------------------------------------------------------

//Qs 3. Eligible Voter
//You are given an integer A, denoting the age of a person, and your task is to determine whether he/she is eligible to vote or not.
//Note : You have to complete isEligible function. No need to take any input
//Ans-
        const isEligible = (a) => {
            if (a >= 18){
            return ("Eligible for Voting");
        }
        else{
            return ("Not Eligible for Voting");
        }
        };

// --------------------------------------------------------------------------------

//Qs 4. Find Relation.
//PrepBuddy wants you to get familiar with various Relational operators. He provides you with two integer values X and Y and asks you to find the relation between them.
//The relationships between integers X and Y are as follows:
//1.If X < Y,it means that X is smaller than Y.
//2.If X > Y,it means that X is greater than Y.
//3.If X = Y,it means that X is equal to Y.
//Note : You have to complete findRelationship function. No need to take any input.
//Ans-
        const findRelation = (x,y) => {
            if (x < y){
            return (`${x} is smaller than ${y}`);
            }
            else if (x > y){
            return (`${x} is greater than ${y}`);
            }
            else if (x == y){
            return (`${x} is equal to ${y}`);
            }
            else{
            return ("Please enter valid number");
            }
        };

// ----------------------------------------------------------------------------------------

//Qs 5. Find Grades
//Your school has the following grading system based upon the marks(M) obtained by a student:
//1.If M ≤ 10,the grade will be E.
//2.If 11 >= M <= 20,the grade will be D.
//3.If 21 >= M <= 30,the grade will be C.
//4.If 31 >= M <= 40,the grade will be B.
//5.If 41 >= M <= 50,the grade will be A.
//Your friend will enter his marks out of 50, and your task is to print his grades using a switch statement.
//Note : You have to complete findGrades function. No need to take any input.
//Ans-
        const findGrades = (a) => {
            switch(true){
            case (a<=10):
                return ("E");
                break;
            case (a>10 && a<=20):
                return ("D");
                break;
            case (a>20 && a<=30):
                return ("C");
                break;
            case (a>30 && a<=40):
                return ("B");
                break;
            case (a>40 && a<=50):
                return ("A");
                break;
            default:
                return ("Please enter a valid Grade");
                break;
            }
        };

// -------------------------------------------------------------------------------

//Qs 6. Get Value
//You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.
//| P or p 	- PrepBytes      |
//| Z or z 	- Zenith         |
//| E or e 	- Expert Coder   |
//| D or d 	- Data Structure |
//Note: You have to complete getValue function. No need to take any input.
//Ans-
        const getValue = (a) => 
        {
        if (a == "P" || a == "p")
        {
            return ("PrepBytes");
        }
        else if (a == "Z" || a == "z")
        {
            return ("Zenith");
        }
        else if (a == "E" || a == "e")
        {
            return ("Expert Coder");
        }
        else if (a == "D" || a == "d")
        {
            return ("Data Structure");
        }
        else
        {
            return ("Not a valid input");
        }
        };

// ---------------------------------------------------------------------------------------------

//Qs 7. Find the maximum out of three numbers.
//Take three numbers and print the largest number among them if all of three are same print  -1.
//Note: You have to complete Max_out_of_three. No need to take any input.
//Ans-
        const Max_out_of_three = (A,B,C) => {
            
            if (A>B && A>C) 
            {
            return A;
            }
            else if (B>A && B>C)
            {
            return B;
            }
            else if (C>A && C>B) 
            {
            return C;
            }
            else if (A == B && B == C && C == A)
            {
            return "-1";
            }
        };

// -----------------------------------------------------------------------------------------------------------

//Qs 8. Second Smallest.
//You are given 3 distinct integers X,Y and Z, and your task is to find and return the second smallest integer among the three provided integers.
//Note: You have to complete findSndSmallest function. No need to take any input.
//Ans-
        const findSndSmallest = (x,y,z) => {
            if ((x<y && x>z) || (x >y && x < z))
        {
            return x;
        }
        else if ((y>x && y<z) || (y<x && y>z))
        {
            return y;
        }
        else if ((z<x && z>y) || (z>x && z<y)) 
        {
            return z;
        }
        else{
            return ("Enter valid number");
        }
        };

// --------------------------------------------------------------------------------------------------------------

//Qs 9. Check whether the triangle is Acute or Obtuse
//Write a program takes takes three angles and checks whether the triangle is acute or obtuse.
//Note: You have to complete Triangle_Check. No need to take any input.
//Ans-
        const Triangle_Check = (A,B,C) =>
        {
        if ((A < 90) && (B < 90) && (C < 90))
        {
            return ("Acute");
        }
        else
        {
            return ("Obtuse");
        }   
        };