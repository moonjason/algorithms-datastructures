# https://neetcode.io/problems/is-anagram
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        map = {}

        for l in s:
            if l in map:
                map[l] += 1 
            else:
                map[l] = 1 

        for l in t:
            if l not in map:
                return False
            else: 
                map[l] -= 1 
            
            if map[l] == 0:
                map.pop(l)

        if len(map.keys()) == 0:
            return True

        return False

## My 1st try solution ^ 


class Solution_Pythonic:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
            
        return sorted(s) == sorted(t)


## Pythonic Solution but o(n log n) time due to sorting 

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        countS, countT = {}, {}

        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        return countS == countT

## More Optimal than my solution since you're only looping once 

class Solution_Optimal:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        count = [0] * 26
        # print(count) => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
        # creaing a 26 alphabet array 
        # the goal is to have count return as is because if any of those 0s are actual numbers it means there was a character mismatch
        for i in range(len(s)):
            count[ord(s[i]) - ord('a')] += 1 # Grabbing the position of the first letter by subtracting the unicode point poisitions of the letter and the first letter 'a'
            count[ord(t[i]) - ord('a')] -= 1

        # print(ord('a')) 97
        # print(ord('r')) 114

        for val in count:
            if val != 0:
                return False
        return True
    
## Optimal Solution 