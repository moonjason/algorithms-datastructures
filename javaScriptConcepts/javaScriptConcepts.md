# JavaScript (and some css) Stuff for Interviews

### CSS Sprites

- https://css-tricks.com/css-sprites/



### CSS Grid

- https://www.sitepoint.com/understanding-css-grid-systems/



### The "this" keyword



### Flattened array



### Closures 



### Var vs Const vs Let 



### DOM Trees

```js
/* Common question
Given a tree with  specific nodes to visit, traverse another tree with the same structure and visit the nodes in same positions
*/
```



### ES6 Promises



### Advantages of ES6 Maps Vs. Objects

- Maps and Sets have easier ways of checking if an item exists with in them. They also have properties that make it easier to delete an item.

- I still find it that objects and arrays have more benefits in using them performance-wise but it's good to know where their counter-parts may shine

### Advantages of using Es6 Sets Vs. Arrays



### Emitters

```js
emitter = new Emitter();

// 1. Support subscribing to events.
sub = emitter.subscribe('event_name', callback);
sub2 = emitter.subscribe('event_name', callback2);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', foo, bar);

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above  
```

