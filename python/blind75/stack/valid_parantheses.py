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
                if stack and stack[-1] == closeToOpen[c]: # when we get to the closing parentheses, check the nearest open parentheses to see if it matches
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c) # the if statement has us only store the open brackets first this is important
        
        return True if not stack else False


# my re-attempt
def isValid(self, s: str) -> bool:
    if len(s) % 2 != 0:
        return False

    stack = [] #filo
    # loop through the string and check for opening brackets 
    # we want pop from the stack when a parenthese are validly closed
        # when we find a closed bracket, let's see if the opening is properly placed hence the stack
    ht = {
        '}': '{',
        ']': '[',
        ')': '('
    }


    for char in s:
        if char not in ht:
            stack.append(char)
        else: # when there is a closed bracket ... 
            if stack and stack[len(stack) - 1] == ht[char]: # if the most recent char is a matching opening paranthese  
                # we check if stack exists incase there are only closed brackets 
                stack.pop()
            else:
                return False

    return True if not stack else False
