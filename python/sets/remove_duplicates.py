# def remove_duplicates(my_list):
#     duplicates = set()
#     result = []
#     for num in my_list:
#         if num not in duplicates:
#             duplicates.add(num)
    
#     for num in duplicates:
#         result.append(num)
        
#     return result
    

def remove_duplicates(my_list): 
    # Convert the list to a set and then back to a list to remove duplicates 
    new_list = list(set(my_list)) 
    return new_list
    


my_list = [1, 2, 3, 4, 1, 2, 5, 6, 7, 3, 4, 8, 9, 5]
new_list = remove_duplicates(my_list)
print(new_list)


## SETS CANNOT HAVE DUPESSSSSS
## SETS CANNOT HAVE DUPESSSSSS
## SETS CANNOT HAVE DUPESSSSSS
## SETS CANNOT HAVE DUPESSSSSS
## SETS CANNOT HAVE DUPESSSSSS
## SETS CANNOT HAVE DUPESSSSSS
## SETS CANNOT HAVE DUPESSSSSS
## SETS CANNOT HAVE DUPESSSSSS


"""
    EXPECTED OUTPUT:
    ----------------
    [1, 2, 3, 4, 5, 6, 7, 8, 9]

    (Order may be different as sets are unordered)

"""