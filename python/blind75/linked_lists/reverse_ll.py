from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
    # goal is to redirect the head of node to null first
    
    if not head:
        return None

    curr = head
    prev = None
    
    while curr:
        temp = curr.next
        curr.next = prev

        prev = curr
        curr = temp

    return prev # MAKE SURE TO RETURN THE HEAD OF THE REVERSED LIST 