# Using JavaScript to Write Data Structures

Thanks to ES2015 Syntax we can utilize classes to write our data structures - 

JavaScript doesn't really support OOP but the class keyword helps us 



**A JavaScript Class**

- A blueprint for creating object with pre-defined properties and methods 

Syntax

```js
class Student { 
	constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

The method to create new objects **must** be called constructor

- It's a special function that gets run when the class is instantiated



The **class** keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!

```js
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("John", "Jordan");
```

Use **new** to create objects from classes.



**Instance Methods**

- Method that provide functionality to any instances 
  - e.g. Array.push()

```js
class Student { 
	constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
}
```



**Class Methods**

- **static** keyword
  - Defines a static method of a class.  Using the class method doesn't directly affect any single instantiation, it serves more as a utility function
  - we use class methods when it doesn't make sense to attach to every single new object we create 

```js
class Student { 
	constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }    
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    static enrollStudents(){
        // run code 
        return "Enrolling students";
    }
}

let student1 = new Student('Jason', 'Moon');
```

We cannot do student1.enrollStudents();

Instead we would do Student.enrollStudents()' 



**This**

- Inside all of our **instance** methods and **constructor** , the keyword **this** refers to the object created from that class (also known as an **instance**)

  

**Abstraction**

**Encapsulation**

**Polymorphism**