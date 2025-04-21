# https://neetcode.io/problems/same-binary-tree

# Given the roots of two binary trees p and q, return true if the trees are equivalent, otherwise return false.
# Two binary trees are considered equivalent if they share the exact same structure and the nodes have the same values.

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        
        if not p and not q: 
            return True

        if not p or not q:
            return False

        if p.val != q.val:
            return False

        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right,q.right)
    
# ANNOTATED 
def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
    
    if not p and not q: # if both nodes are null then we recursed with NO mismatches 
        return True

    if not p or not q: # whle checking the same side, if one of them is null but the other has a value, IT IS A MISMATCH
        return False

    if p.val != q.val: # finally, if values are different IT IS A MISMATCH
        return False

    return self.isSameTree(p.left, q.left) and self.isSameTree(p.right,q.right) # go down each subtree and see if we get a mismatch, if we reach the end on both sides at the same time then the tree is same