# https://neetcode.io/problems/anagram-groups 

# Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
# An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

# Example 1
# Input: strs = ["act","pots","tops","cat","stop","hat"]

# Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

# Example 2
# Input: strs = ["x"]

# Output: [["x"]]

# Example 3
# Input: strs = [""]

# Output: [[""]]


from typing import List
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]: # MY ATTEMPT, since my own use of ord() with a hast table caused issues 
        ht = {}
        result = []
        for string in strs:
            sorted_str = ''.join(sorted(string))
            if sorted_str not in ht:
                ht[sorted_str] = [string]
            else:
                ht[sorted_str].append(string)

        for key in ht: # PYTHONIC WAY OF REWRITING THIS:  list(ht.values())
            result.append(ht[key])
        
        return result 
    

    def groupAnagramsOptimal(self, strs: List[str]) -> List[List[str]]: 
        ht = defaultdict(list) 

        for string in strs:
            freq = [0] * 26

            for l in string:
                freq[ord(l) - ord('a')] += 1  

            ht[tuple(freq)].append(string)

        return list(ht.values())
    


print(Solution.groupAnagramsOptimal(None, strs=["act","pots","tops","cat","stop","hat"]))
    