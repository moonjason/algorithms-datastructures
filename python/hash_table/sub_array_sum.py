def subarray_sum(nums, target):
    sum_index = { 0: -1 } # key: sum of elements // value: index at which the sum occurs 
    # initalizign with 0 : -1 to handle edge case where target could be the first number in the nums array e.g. if target is 9 , 9-9 = 0
    curr_sum = 0 # hold the running sum of array elements 
    
    for i, num in enumerate(nums):
        curr_sum += num 
        
        if curr_sum - target in sum_index:
            starting_index = sum_index[curr_sum - target] + 1 
            return [starting_index, i] # ending index would be the current if we reached target 
        else: 
            sum_index[curr_sum] = i 
            
            
    return []

nums = [1, 2, 3, 4, 5]
target = 9
print ( subarray_sum(nums, target) )

nums = [-1, 2, 3, -4, 5]
target = 0
print ( subarray_sum(nums, target) )

nums = [2, 3, 4, 5, 6]
target = 3
print ( subarray_sum(nums, target) )

nums = []
target = 0
print ( subarray_sum(nums, target) )



"""
    EXPECTED OUTPUT:
    ----------------
    [1, 3]
    [0, 3]
    [1, 1]
    []

"""
