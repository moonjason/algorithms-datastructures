# https://neetcode.io/problems/buy-and-sell-crypto   - Easy
# You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

# You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

# Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

# Example 1:
# Input: prices = [10,1,5,6,7,1]
# Output: 6
# Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

# Example 2:
# Input: prices = [10,8,7,5,2]
# Output: 0
# Explanation: No profitable transactions can be made, thus the max profit is 0.

# Constraints:
#     1 <= prices.length <= 100
#     0 <= prices[i] <= 100


class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        maxProfit = 0
        l, r = 0, 1

        while r < len(prices):
            if prices[r] < prices[l]:
                l = r
                r = l + 1
            else:
                currProfit = prices[r] - prices[l] 
                maxProfit = max(currProfit, maxProfit)
                r += 1 

        return maxProfit


# ^^ 2 point approach - My Solution
# time: 0(n), space: O(1)

# class Solution:
#     def maxProfit(self, prices: List[int]) -> int:
#         maxP = 0
#         minBuy = prices[0]

#         for sell in prices:
#             maxP = max(maxP, sell - minBuy)
#             minBuy = min(minBuy, sell)
#         return maxP


## Dynamic Programming - Also Optimal 
# time: 0(n), space: O(1)
# keeps track of the smallest purchase price 
# THEN, it checks if current value in loop minus the smallest purchase price is greater than the maxProfit

# Clean