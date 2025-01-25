# https://neetcode.io/problems/is-palindrome
# easy 

# Given a string s, return true if it is a palindrome, otherwise return false.

# A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

# Example 1:
# Input: s = "Was it a car or a cat I saw?"
# Output: true
# Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

# Example 2:
# Input: s = "tab a cat"
# Output: false
# Explanation: "tabacat" is not a palindrome.

class Solution:
    def isPalindrome(self, s: str) -> bool:

        arr1 = []
        arr2 = []

        j = len(s) - 1
        for i in range(len(s)):
            if s[i] != ' ' and s[i].isalnum(): 
                arr1.append(s[i].lower())

            if s[j] != ' ' and s[j].isalnum():
                arr2.append(s[j].lower())

            i += 1
            j -= 1

        print(arr1, arr2)
        return arr1 == arr2
    

# loops 1 time 

# time O(n) space O(n)



# Optimal approach
# Both pointers don't iterate unless its alphanumeric
# When both are alphanumeric they are compared
# Return false if the chars are diff otherwise finish the loop and return true
# Notice use of nested while loops 
# Not using arrays like I am

# def isPalindrome(self, s: str) -> bool:
#     l, r = 0, len(s) - 1

#     while l < r:
#         while l < r and not self.alphaNum(s[l]):
#             l += 1
#         while r > l and not self.alphaNum(s[r]):
#             r -= 1
#         if s[l].lower() != s[r].lower():
#             return False
#         l, r = l + 1, r - 1
#     return True

# Clever way to construct your own alphaNum solution 
#    def alphaNum(self, c):
#         return (ord('A') <= ord(c) <= ord('Z') or 
#                 ord('a') <= ord(c) <= ord('z') or 
#                 ord('0') <= ord(c) <= ord('9'))