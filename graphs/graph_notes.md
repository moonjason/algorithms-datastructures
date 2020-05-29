# Graphs

*Trees are a type of graph*

A data structure that represents a set of nodes and its connections 

![graph](https://www.geeksforgeeks.org/wp-content/uploads/undirectedgraph.png)

These are familiar..

- In Linked Lists, we have a graph that has nodes connected linearly 
- In trees, we had a root note, and a bunch of children that descended from that one node 

**In these types of graphs, nodes have freedom in where they connect**

## Real World Use Cases

- Social Netwroks
- Location / Mapping
  - Google Maps 
    - Nodes can be establishments
    - Roads can be connections 
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- Recommendations
  - "people also watched"
  - "you might also like"
    - You played Halo and it has a lot of nodes that share with Borderlands 3
  - "people you might know"
  - "frequently bought with"
- EVERYWHERE



Graph of Friends and their relationships with one another

*Think of LinkedIn's 1st, 2nd, 3rd connection feature*

![](https://study.com/cimages/videopreview/videopreview-full/nchjyn05gv.jpg)



## Compare & Contrast Different Types of Graphs

### Essential Graph Terms

- **Vertex** - A Node
- **Edge** - A connection
- **Undirected Graph**
  - No direction/polarity to the edges
  - There is no node with a one way connection
- **Directed Graph**
  - There are one way edges (connections)
- **Weighted Graph**
  - Each edge (connection) has a value attached to it
- **Unweighted**
  - No values in the edges (connections)



![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/undirectedgraph.png)



## Storing Graphs - Representing A Graph 



### Two Standard Approaches

#### Adjacency Matrix

- A Matrix is a 2D structure usually represented by arrays 
  - Each element pair is a value attached as false/true or 0/1 (1 being true )
  - In the example image, we mark true if the node or vertex has an edge pointing to another vertex
    - In a undirected graph, it'll be true if you a node simply has an edge pointing to another vertex

![adjacency Matrix - directed graph](https://1.bp.blogspot.com/-tSAmvx42pII/Ux5EQxZukcI/AAAAAAAACLo/dPccUjxqb5o/s1600/Adjacency+Matrix+Representation+of+Directed+Graph.JPG)

#### Adjacency List

- Per Vertex, in a multi dimensional array, we store the vertex's edges 

- If the value of the vertex is not a number maybe something like "A"

  - We store it in a hash table like this

    - ```js
      // Undirected Graph 
      {
          A: ["B", "F"],
          B: ["A", "C"]
      }
      ```

      

![adjacency list](https://www.kodefork.com/media/uploads/articles/2019/06/23/graph-ajacency-list-cpp.jpg)