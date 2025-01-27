# https://neetcode.io/problems/validate-parentheses
# easy 

# You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

# The input string s is valid if and only if:

#     Every open bracket is closed by the same type of close bracket.
#     Open brackets are closed in the correct order.
#     Every close bracket has a corresponding open bracket of the same type.

# Return true if s is a valid string, and false otherwise.

# Example 1:
# Input: s = "[]"
# Output: true

# Example 2:
# Input: s = "([{}])"
# Output: true

# Example 3:
# Input: s = "[(])"
# Output: false

# Explanation: The brackets are not closed in the correct order.

# Constraints:
#     1 <= s.length <= 1000

class Node:
    def __init__(self, val):
        self.value = val 
        self.next = None 

class Stack:
    def __init__(self):
        self.head = Node('head') 
        self.size = 0

    def __str__(self):
        result = ''
        curr_node = self.head.next
        while curr_node: 
            result += str(curr_node.value) + '->'
            curr_node = curr_node.next
        return result[:-2]
    

    def unshift(self, val):
        new_node = Node(val)
        new_node.next = self.head.next
        self.head.next = new_node
        self.size += 1 

        
    def shift(self):
        if self.size == 0:
            return Exception('Stack already empty')
        else: 
            remove_node = self.head.next
            self.head.next = remove_node.next
            self.size -= 1
            return remove_node.value # always remove the value 
        
    
stack = Stack()
stack.unshift(5)
stack.unshift(15)
stack.unshift(4)
stack.unshift(23)
stack.unshift(9)
print(stack.__str__())
print(stack.size)

# For a pre-built stack, use lists or you can also do:  
# from collections import deque

class Solution_Optimal:
    def isValid(self, s: str) -> bool:
        stack = []
        closeToOpen = { ")" : "(", "]" : "[", "}" : "{" }

        for c in s:
            print(c)
            if c in closeToOpen:
                if stack and stack[-1] == closeToOpen[c]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)
        
        return True if not stack else False
