
### Answers to the questions

1. It will print the value of `i = 3` since variable declared using the `var` has scope outside the for loop so the value 
    of `i` is the value last set at the final iteration in for loop.
2. It will print out the value of `discountedPrice = 150` because variable declared using `var` has scope out the for loop 
    which sets the value for discountedPrice to be 150 at the last iteration and also declaration and assignment can be done 
    same time such that the declaration of the variable is done at the beginning of the function execution but the variable 
    assignment will happen when the function execution needs its value.
3. It will print the value of `finalPrice = 150` because the `finalPrice` can be used after the for loop as variable declared 
    using var ignores the for loop so it can be accessed after the for loop at the bootom of the function and its value is set 
    by from the last iteration in the for loop.
4. The function will return an array `[50, 100, 150]` because the `push()` method pushes discounted prices at the end of the 
    array inside the for loop. So the variable `discounted` has global scope within the function
   
  ***
5. There will be a `referenceError: i is not defined` error because the variable declared using the `let` has a block level scope so 
    `i` has scope only inside the for loop and can not be used after the for loop within the function.
6. There will be a `referenceError: discountedPrice is not defined` error because the variable declared using the `let` has a block 
    level scope so `discountedPrice` has scope only inside the for loop and can not be used after the gor loop within the function.
7. It will print the value of `finalPrice = 150` since the `finalPrice` declared using `let` outside of the for loop which is updated 
    inside the for loop and has the value of 150 after the last iteration. So finalPrice has global scope within the function.
8. The function will return the array of `[50, 100, 150]` since the `discounted` declared using `let` outside of the for loop which 
    is updated inside the for loop using push() method has the value of `[50, 100, 150]` after the last iteration. So variable discounted 
    has global scope within the function.

***
9. There will be a `referenceError: i is not defined` error because the variable declared using the `let` inside the for loop has a block 
    level scope so `i` has scope only inside the for loop and can not be used after the for loop within the function.
10. There will be a `referenceError: discountedPrice is not defined` error because the variable declared using the `const` inside the for
    loop has a block level scope so `discountedPrice` has scope only inside the for loop and is undefined after the for loop within
    the function.
11. There will be a `TypeError: assignment to constant variable`error because variable `finalPrice` is declared as const which is assigned
    to have different value inside the for loop. The variable declared as const can not be reassigned to have different value from the 
    original assignment.
12. The function will return the array of `[50, 100, 150]` since the `discounted` declared using `const` outside of the for loop which 
    is updated inside the for loop using push() method has the value of `[50, 100, 150]` after the last iteration. So discounted 
    variable has global scope within the function and array variable declared using const have elements pushed into it using push() method.
    
***
13. * A `student.name`
    * B `student['grad year']`
    * C `student.greeting()`
    * D `student['favourite name'].name`
    * E `student['courseLoad'][0]`
    
***
14. * A ` '32' `
    * B `1`
    * C ` 3`
    * D `'3null' `
    * E `4`
    * F `0`
    * G ` '3undefined' `
    * H `NaN`
***
15. 
    
