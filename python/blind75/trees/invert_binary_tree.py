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