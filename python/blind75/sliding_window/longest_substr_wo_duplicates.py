class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        
        if not s:
            return 0

        longest = 1
        i = 0
        k = i + 1

        while i < len(s) - 1:
            
            substr = s[i]
            while k < len(s):
                if not s[k] in substr:
                    substr = s[i : k + 1]
                    longest = max(longest, len(substr))
                    k += 1 
                else: 
                    break

            i += 1
            k = i + 1

        return longest
# MY TRASH ANSWER ^^^

def lengthOfLongestSubstring(s: str) -> int:
    seen = set()
    longest = 0
    i = 0
    k = 0

    while k < len(s): # we only need this loop because there is no need to 'reset' the window since the set() is containing the rolling data 
        if s[k] not in seen:
            seen.add(s[k])
            longest = max(longest, k - i + 1)
            k += 1
        else:
            seen.remove(s[i])
            i += 1

    return longest
## OPTIMAL SOLUTION USING SETS https://www.w3schools.com/python/python_sets.asp
## I NEED TO MAKE MY LOOPS BETTER 

# TEST CASE 3 = "dvdf"
# TEST CASE 3 FAILS BECAUSE I'M ONLY SLIDING THE WINDOW WHEN I SEE A DUPLICATE