
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
14. * A ` '32' `=> because of `'3'` concatenation takes precedence over `+` and conversion of `2` into `'2'` and the                         concatenation of `'3' + '2' ` takes place.
    * B `1`     => because of the `-` operator has higher precedence than concatenation, conversion of `'3'` into `3`                      takes place and the substraction takes place on `3 -2`.
    * C ` 3`    => because of the operand number `3` `+` takes precedence and the conversion of null into `0` takes                         place
    * D `'3null' =>`because of the `'3'` concatenation takes precedence over `+` so conversion of `null` into string                        `'null'` takes place and concatenantion operation take place.
    * E `4`     => Boolean true has numerical value of `1` and `+` operator has higher precedence
    * F `0`     => Boolean false has numerical value of `0` and `+` operator has higher precedence
    * G `'3undefined'`=> because concatenation has higher precedence over `+` , undefined is converted to string                                  `undefined` and the concatenation of `'3' + 'undefined` takes place.
    * H `NaN` => because `-` operator has higher precedence over concatecation, `"3"` is converted into number `3` and                    undefined has NaN numerical value. so `3 - NaN` is also `NaN`.
***
15. * A `true`  => when operands are of different types, javascript convert operands into numbers so `'2'` is converted                    to number `2` first and compare it with 1 which is true.
    * B `false` => because both operands are strings, so the dictionary comparision takes place, first letter                              comparision between `'2'` and `'1'` takes place. since `'2' < '1' ` is false. so  the result is                          false.
    * C `true`  => because regular equality check converts both operands into same data type and since both operands are                   the same after, it returns true.
    * D `false` => because the strict equality check does not convert operands rather compares their types first and                        since one is string and the other one is number, it returns false as their data types are different.
    * E `false` => because regular equality check converts the operands first and Boolean true has numerical value of                      `1` which is not equal to `2`.
    * F `true` => because Boolean(2) has boolean value of `true` and since both operands have the same data type and                       same value, the strict equality check returns true.
***
16. `==` equality converts the operands before the comparision is made, also called a regular equality check whereas         `===` known as strict equality check compares operands without converting them and hence if the two operands of         the different types this will return boolean value false.
***
17. It prints out `How are you?` because the first if condition converts true to numerical number 1 and `==` compares 2 with 1 which is false hence moves to `else if` condition which converts any non-zero numbers to true, so since it has value `2` whhich is converted to Boolean `true` and the statement inside this `else if` gets executed and skips     the remaining `else` condition.
***
18. ![part1-question18.js](part1-question18.js)
***
19. It will return array `[6, 8, 10]` because the `modifyArray([1, 2, 3], doSomething])` calls callback function `doSomething(num, callback)` inside the for loop. for every i = 0, 1, 2 => array[0] = 1, array[1] = 2 and array[2] = 3. So doSomething(1, function(x)) which itself calls yet another callback function called callback which does add 2 to num = array[0] = 1 => 1 + 2 = 3. And we get function(3) = 3* 2 => 6 after the doSomething finishes execution at the end of the first iteration which is pushed to the end of the array newArr. This process runs for i = 0, 1, 2 times changing the newArr = [6, 8, 10] which is returned by the function at the end.
***
20. ![part1-question20.js](part1-question20.js)
***
21. The result will be: 
```
    1
    4
    3
    2
```
      
***
