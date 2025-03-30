from typing import Optional


# https://neetcode.io/problems/linked-list-cycle-detection

# Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.

# There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.

# Internally, index determines the index of the beginning of the cycle, if it exists.
# The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.

# Note: index is not given to you as a parameter.

# Example 1: 
# Input: head = [1,2,3,4], index = 1
# Output: true

# Example 2:
# Input: head = [1,2], index = -1
# Output: false


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def hasCycleNaive(self, head: Optional[ListNode]) -> bool:
        ht = {}
        result = False
        curr = head 
        while curr.next is not None:
            if curr not in ht:
                ht[curr] = 1
            else:
                result = True 
                break 
            curr = curr.next 
        
        return result 
    
    def hasCycleOptimal(self, head: Optional[ListNode]) -> bool:
        fast = head
        slow = head

        while fast != None and fast.next != None:
            fast = fast.next.next
            slow = slow.next 
            if fast == slow:
                return True
        
        return False
    
## DEV NOTES FOR OPTIMAL SECOND SOLUTION 
## This is called Floyd's Cycle Detection Algorithm AKA slow/fast pointer, AKA tortoise/hair solution
## Pay attention to the While loop condition
## We want the 2nd pointer (fast pointer) to exist as it's always ahead
## If it ever hits None, there is no cycle 

