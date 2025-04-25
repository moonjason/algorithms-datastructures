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
                print(s[k] , substr)
                if not s[k] in substr:
                    substr = s[i : k + 1]
                    longest = max(longest, len(substr))
                    k += 1 
                else: 
                    i = k 
                    k = i + 1

            i += 1
        
        return longest
# PROGRESS ^^ NOT FINISHED 



# TEST CASE 3 = "dvdf"
# TEST CASE 3 FAILS BECAUSE I'M ONLY SLIDING THE WINDOW WHEN I SEE A DUPLICATE