def find_pairs(arr1, arr2, target):
    result = []

    table = set()
    arr1 = set(arr1)

    # To make this efficient, we need to store the difference of target and currrent looped through number\

    for num in arr2:
        

    return result

arr1 = [1, 2, 3, 4, 5]
arr2 = [2, 4, 6, 8, 10]
target = 7

pairs = find_pairs(arr1, arr2, target)
print (pairs)



"""
    EXPECTED OUTPUT:
    ----------------
    [(5, 2), (3, 4), (1, 6)]

""" 