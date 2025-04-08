# https://neetcode.io/problems/top-k-elements-in-list

# Given an integer array nums and an integer k, return the k most frequent elements within the array.
# The test cases are generated such that the answer is always unique.
# You may return the output in any order.

# Example 1:
# Input: nums = [1,2,2,3,3,3], k = 2
# Output: [2,3]

# Example 2:
# Input: nums = [7,7], k = 1
# Output: [7]

from typing import List 

class Solution:
    def topKFrequent(nums: List[int], k: int) -> List[int]:
        # store nums in obj
        # sort by max, and then remove, then go to the next max depending on what k is 
        ht = {}
        result = []
        for num in nums:
            if num in ht:
                ht[num] += 1
            else:
                ht[num] = 1

        # sort the ht by highest frequency 
        ht = [key for key, value in sorted(ht.items(), key=lambda item:item[1], reverse=True)]
            
        # while k > 0:  
        #     result.append(ht[0])
        #     ht.pop(0)
        #     k -= 1 
        for i in range(k): # <== more optimized since we dont pop 
            result.append(ht[i])

        return result


print(Solution.topKFrequent([1,2,2,3,3,3], 2)) 


# time complexity would be O(n log n) (sorting) -- space complexity would be O(n)
