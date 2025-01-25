class Solution:
    def hasDuplicate(self, nums: list[int]) -> bool:
        map = {}

        for n in nums: 
            if n in map:
                return True
            else:
                map[n] = 1 

        return False



# https://neetcode.io/problems/duplicate-integer