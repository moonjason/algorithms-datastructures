# https://neetcode.io/problems/invert-a-binary-tree
# You are given the root of a binary tree root. Invert the binary tree and return its root.

# Input: root = [1,2,3,4,5,6,7]
# Output: [1,3,2,7,6,5,4]

# Input: root = [3,2,1]
# Output: [3,1,2]

# Input: root = []
# Output: []

from typing import Optional, TreeNode

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    if not root:
        return None

    queue = []
    queue.append(root)
    
    while queue:
        node = queue.pop(0)
        
        # temp1 = node.left 
        # temp2 = node.right
        # node.left = temp2
        # node.right = temp1

        node.left, node.right = node.right, node.left

        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)


    return root



## BREADTH FIRST SEARCH (LEVEL ORDER SEARCH) 

# ● Create an empty queue Q 
# ● Enqueue the root node of the tree to Q 
# ● Loop while Q is not empty 
#           ○Dequeue a node from Q and visit it 
#           ○ Enqueue the left child of the dequeued node if it exists 
#           ○ Enqueue the right child of the dequeued node if it exists .




## POST ORDER SOLUTION (left, right, root)
## USES RECURSION 

def mirror(root):
    if root is None:
        return
    
    # Invert the left and right subtree
    mirror(root.left)
    mirror(root.right)
    # once these resolve (meaning that the bottom of the tree was reached), the swap happens 
    # looking at below example, when root = 2, and mirror(4) and mirror(5) are finished, the swap happens 

    # Swap the left and right subtree
    temp = root.left
    root.left = root.right
    root.right = temp

# INITAL TREE 

#        1
#       / \
#      2   3
#     / \  / \
#    4   5 6  7


# CALL STACK REPRESENTATION 
#  mirror(1)
#  ├── mirror(2)
#  │    ├── mirror(4)
#  │    ├── mirror(5)
#  ├── mirror(3)
#       ├── mirror(6)
#       ├── mirror(7)

# FINAL EXECTUION ORDER OF POST ORDER TRAVERSAL
# 4 → 5 → 2 → 6 → 7 → 3 → 1
