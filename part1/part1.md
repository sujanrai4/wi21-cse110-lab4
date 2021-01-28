
### Answers to the questions

1. It will print the value of `i = 3` since variable declared using the `var` has scope outside the for loop so the value 
    of `i` is the value      last set at the final iteration in for loop.
2. It will print out the value of `discountedPrice = 150` because variable declared using `var` has scope out the for loop 
    which sets the value for discountedPrice to be 150 at the last iteration and also declaration and assignment can be done 
    same time such that the declaration of the variable is done at the beginning of the function execution but the variable 
    assignment will happen when the function execution needs its value.
3. It will print the value of `finalPrice = 150` because the `finalPrice` can be used after the for loop as variable declared 
    using var ignores the for loop so it can be accessed after the for loop at the bootom of the function and its value is set 
    by from the last iteration in the for loop.
4. The function will return an array `[50, 100, 150]` because the `push()` method pushes discounted prices at the end of the 
   array
   
  ***
5. It will be an error because the variable declared using the `let` has a block level scope so `i` has scope only inside the for loop.
6. It will be an error because the variable declared using the `let` has a block level scope so `discountedPrice` has scope only inside the for loop.
7. It will have value for `finalPrice` of **0** since the `finalPrice` declared using `let` will be the same after exiting the for loop.
