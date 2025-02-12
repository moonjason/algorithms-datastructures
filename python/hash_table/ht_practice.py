# Write a function item_in_common(list1, list2) that takes two lists as input and returns True if there is at least one common item between the two lists, False otherwise.
# Use a dictionary to solve the problem that creates an O(n) time complexity.

def item_in_common(list1, list2):
    ht = {}

    for num in list1:
        ht[num] = 1 

    for num in list2:
        if num in ht:
            return True

    return False


## ========
# Problem: Given an array of integers nums, find all the duplicates in the array using a hash table (dictionary).

def find_duplicates(nums):
    ht = {}
    result = []
    
    for num in nums:
        if num in ht and ht[num] == 0:
            result.append(num)
            ht[num] += 1
        else:

            ht[num] = 0
    
    return result 
            
## ========


def first_non_repeating_char(string):
    char_counts = {}
    for char in string:
        char_counts[char] = char_counts.get(char, 0) + 1
    for char in string:
        if char_counts[char] == 1:
            return char
    return None

# print( first_non_repeating_char('aabbcc') )