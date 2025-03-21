from typing import List

# Input: nums = [-1,0,1,2,-1,-4]

# Output: [[-1,-1,2],[-1,0,1]]

# Input: nums = [0,1,1]

# Output: []

# Input: nums = [0,0,0]

# Output: [[0,0,0]]

def threeSum(self, nums: List[int]) -> List[List[int]]:
    res = []
    nums.sort()

    for i, a in enumerate(nums):
        if a > 0: # since the problems target sum is fixed at 0, our left and right pointers will no longer provide us relevant sums
            break # this is a sweaty ass optimization ngl... 

        if i > 0 and a == nums[i - 1]: # if current number 
            continue

        l, r = i + 1, len(nums) - 1
        while l < r:
            threeSum = a + nums[l] + nums[r]
            if threeSum > 0:
                r -= 1
            elif threeSum < 0:
                l += 1
            else:
                res.append([a, nums[l], nums[r]])
                l += 1
                r -= 1
                while nums[l] == nums[l - 1] and l < r: # idea here is to keep moving the left pointer forward if we're getting the same number in sorted array
                    l += 1
                    
    return res

# https://neetcode.io/problems/three-integer-sum