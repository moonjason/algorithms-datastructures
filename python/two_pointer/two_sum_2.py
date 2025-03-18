from typing import List

# https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

# Input: numbers = [2,7,11,15], target = 9
# Output: [1,2]
# Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

# Input: numbers = [2,3,4], target = 6
# Output: [1,3]
# Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

# Input: numbers = [-1,0], target = -1
# Output: [1,2]
# Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

def twoSum(numbers: List[int], target: int) -> List[int]:
    l = 0
    r = len(numbers) - 1

    while l < r:
        if numbers[l] + numbers[r] == target:
            break; 
        elif numbers[l] + numbers[r] > target:
            r -= 1
        else:
            l += 1

    return [l + 1,r + 1]


# print(twoSum([2,7,11,15], 9))
# print(twoSum([-1000,-1,0,1], 1))
print(twoSum([-5,-3,0,2,4,6,8], 5))