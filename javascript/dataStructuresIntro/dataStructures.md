# Data Structures 



**What Do they Do?**

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

**Why are there so many?**

Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used. 

**Why Care?**

The more time you spend as a developer, the more likely you'll need to use one of these data structures. Maybe you use an API that sends back a graph. And you've already worked with many of them unknowingly such as the DOM tree. And.. interviews...

**There is no "Best" Data Structure**

They all have their own strengths in different situations. That's why we learn them all.



### Some scenarios....

**Working with map/location data?**

- If you're doing something like routing to the nearest gas station or something a graph would make sense 
  - because map/location data requires several data types?? for coordinates?

**Need an ordered list with fast inserts/removals at the beginning and end?**

- Linked Lists would be good because Array.pop() and Array.shift() have to rearrange every element's index 

**Web scraping nested HTML??**

- You're going to get the data most likely from a tree

**Need to write a scheduler??**

- Use a binary heap! 