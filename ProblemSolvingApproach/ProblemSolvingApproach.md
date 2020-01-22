Problem Solving Approach

### General Objectives to solving problems

- Define what an algorithm is
- Devise a plan to solve algorithms 
- Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer 



### What Is an Algorithm?

- A **process** or a **set of steps** to accomplish a certain task



### How do you Improve? 

- **Devise** a plan for solving problems
- **Master** common problem solving patterns 



## Problem Solving

- Understanding the Problem

  - Can I restate the problem in my own words?

  - What are the inputs that go into the problem?

  - What are the outputs that should come from the solution to the problem? 

  - Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question. It's still worth considering the question at this early stage.)

  - How should I label the important pieces of data that are a part of the problem? 

  - Example

    ```js
    // Write a Function which takes two numbers and returns their sum.
    
    //Can I restate the problem in my own words?
    "Implement Addition"
    //What are the inputs that go into the problem?
    "ints? floats? what about a string for large numbers?"
    //What are the outputs that should come from the solution to the problem? 
    "int? float? strings?"
    //Can the outputs be determined from the inputs? In other words, do I have enough //information to solve the problem? (You may not be able to answer this question. //It's still worth considering the question at this early stage.)
    // How should I label the important pieces of data that are a part of the problem? 
    ```

    

- Explore Concrete Examples

  - Coming up with examples can help you understand the problem better

  - Examples also provide sanity checks that your eventual solution works how it should

  - Explore Examples

    - Start with Simple Examples 
    - Progress to more Complex Examples
    - Explore Examples with Empty Inputs
    - Explore Examples with Invalid Inputs

    - ```js
      // Write a function which takes in a string and returns counts of each character in the string.
      
      charCount('aaaa');// {a: 4} 
      // do we want to include letters that aren't there? like {a: 4, b:0 , c:0 }
      charCount('hello'); // {h: 1, e:1,  l:2, o:1}
      
      "my phone number is 1823434" // do we want to include spaces, numbers?
      'Hello hi' // do we ignore casing? 
      
      // what if someone does this do?
      charCount("") //return empty object? error?
      ```

      

- Break it Down

  - Explicitly write out the steps you need to take 

  - ```js
    // Write a function which takes in a string and returns counts of each character in the string.
    
    charCount("Your Pin number is 1234")
    /* {
    	1: 1,
    	2: 1,
    	3: 1,
    	4: 1,
    	y: 1,
    	o: 1,
    	u: 1,
    	r, 1,
    	...
    } lower cased letters*/
    
    const charCount =(str) => {
       // make object to return at end 
       // loop over string
       	// if the char is a number/letter AND is a keyin object, add one to count
        // if the char is a number/letter AND not in object, add it to ojbect and set value to 1 
        // if character is something else (space, period, etc.) don't do anything 
       // return object
    }
    ```

    

- Solve / Simplify

  - If you can't solve the problem, solve a simpler problem
  - Find the core difficulty in what you're trying to do
  - Temporarily ignore that difficulty 
  - Write a simplified solution
  - Then incorporate that difficulty back in 

- Look Back and Refactor 

  - Can you check the result?
  - Can you derive the result differently?
  - Can you understand it at a glance?
  - Can you use the result or method for some other problem?
  - Can you improve the performance of your solution?
  - Can you think of other ways to refactor?
  - How have other people solved this problem? 



