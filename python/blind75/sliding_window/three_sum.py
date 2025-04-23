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


def threeSum(self, nums: List[int]) -> List[List[int]]:
    nums.sort()  # Sort to use two-pointer and handle duplicates easily
    result = []

    for i in range(len(nums) - 2): # loop until the last triplet possible, when first element reaches 3rd last element
        # Skip duplicate elements for i
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        # Two-pointer setup
        j = i + 1
        k = len(nums) - 1

        while j < k:
            total = nums[i] + nums[j] + nums[k]

            if total < 0:
                j += 1
            elif total > 0:
                k -= 1
            else:
                # Found a valid triplet
                result.append([nums[i], nums[j], nums[k]])

                # Skip duplicate j's
                while j < k and nums[j] == nums[j + 1]:
                    j += 1
                # Skip duplicate k's
                while j < k and nums[k] == nums[k - 1]:
                    k -= 1

                # Move both pointers after a match OR after it's iterated over a duplicate
                j += 1
                k -= 1

    return result