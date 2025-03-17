from collections import defaultdict
import pprint
def group_anagrams(strings): 
    result = []
    ht = {}
    
    for word in strings:

        total = 0    
        
        for letter in word: 
            total += ord(letter)    
        
        if total in ht:
            ht[total].append(word)
        else:
            ht[total] = [word]

    for arrs in ht.keys():
        result.append( ht[arrs] )
    
    return result 



# print("1st set:")
# print( group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) )

# print("\n2nd set:")
# print( group_anagrams(["abc", "cba", "bac", "foo", "bar"]) )

# print("\n3rd set:")
# print( group_anagrams(["listen", "silent", "triangle", "integral", "garden", "ranged"]) )



"""
    EXPECTED OUTPUT:
    ----------------
    1st set:
    [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

    2nd set:
    [['abc', 'cba', 'bac'], ['foo'], ['bar']]

    3rd set:
    [['listen', 'silent'], ['triangle', 'integral'], ['garden', 'ranged']]

"""

## Pythonic Solution

def group_anagrams(strings):
    # create an empty hash table
    anagram_groups = {}
    
    # iterate through each string in the array
    for string in strings:
        # sort each string to get its canonical form
        # sorted('eat') returns ['a', 'e', 't']
        # ''.join(['a', 'e', 't']) coverts the array of chars to 'aet' string
        canonical = ''.join(sorted(string))
    
        # check to see if the canonical form of the string exists in the hash table
        if canonical in anagram_groups:
            # if it does then add the string there
            anagram_groups[canonical].append(string)
        else:
            # otherwise create new canonical form and add the string there
            anagram_groups[canonical] = [string]
    
    # convert the hash table to a list of lists
    return list(anagram_groups.values())


## Optimal solution
# time complexity O(m * n)
# space complexity O(m)

def group_anagrams_optimal(strs):
    
    res = defaultdict(list)

    for s in strs:  
        freq = [0] * 26 # takes advantage of lower case letters
        for c in s:
            freq[ord(c) - ord('a')] += 1
        res[tuple(freq)].append(s)
        # pprint.pp(res)

    return list(res.values())


print(group_anagrams_optimal(["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]))
