# https://neetcode.io/problems/two-integer-sum 
# easy 

# Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

# You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

# Return the answer with the smaller index first. 

# Input: 
# nums = [3,4,5,6], target = 7

# Output: [0,1]

# Input: nums = [4,5,6], target = 10

# Output: [0,2]

# Input: nums = [5,5], target = 10

# Output: [0,1]


class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        map = {}

        for i, n in enumerate(nums):
            diff = target - n
            if diff in map: 
                return [diff, i]
            else: 
                map[n] = i


# PRETTY SURE THIS IS OPTIMAL
# In order to complete this problem with only one loop through, 
# We store the number to see if it might be the required DIFFERENCE 
# Index is the value while the number is the key
# Check if diff of the target and current number exists in the map 