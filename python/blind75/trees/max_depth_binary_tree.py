# https://neetcode.io/problems/depth-of-binary-tree

from typing import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:

        if root is None:
            return 0

        # compute the height of left and right subtrees
        lHeight = self.maxDepth(root.left)
        rHeight = self.maxDepth(root.right)

        return max(lHeight, rHeight) + 1



#         10  (max(2,2) + 1 = 3)
#        /   \
#       5     15  (max(0,1) + 1 = 2)
#      / \      \
#     3   7      18  (max(0,0) + 1 = 1)
#    (1)  (1)

# ON THE LEFT SIDE  NODE(5) --> (max(1,1) + 1 = 2)