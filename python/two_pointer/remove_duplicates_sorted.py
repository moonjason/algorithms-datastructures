# https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

# Input: nums = [0,0,1,1,1,2,2,3,3,4]
# Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        # since sorted, we blessed
        # set current number on left pointer 
        # move right pointer over if we find a duplicate
        l = 0 
        r = l + 1

        while l < len(nums) - 1:

            if nums[l] != nums[r]:
                l = r 
                r = l + 1
            else:
                nums.pop(r)
    

# CAN ALSO USE A HASH MAP