class Solution(object):
    def maxProduct(self, nums):
        """
        :type nums: List[int]  example: [2,3,-2,4]
        :rtype: int
        """
        
        res = max(nums)
        currMin, currMax = 1, 1

        for n in nums: 
            if n == 0: # 0 marks the end of the "subarray" because any product of 0 won't be the max nor min because its 0
                currMin, currMax = 1, 1
                continue
            
            tmp = currMax * n
            currMax = max(n * currMax, n * currMin, n) # using max() and min() accounting for if the nums array contains a negative value 
            currMin = min(tmp, n * currMin, n)
            res = max(res,currMax)

        return res
    

# https://leetcode.com/problems/maximum-product-subarray/