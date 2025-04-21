# https://neetcode.io/problems/string-encode-and-decode

# Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

# Please implement encode and decode

# Example 1:
# Input: ["neet","code","love","you"]

# Output:["neet","code","love","you"]

# Example 2:
# Input: ["we","say",":","yes"]

# Output: ["we","say",":","yes"]

from typing import List

class Solution:
    def encode(self, strs: List[str]) -> str:
        for i, s in enumerate(strs):
            strs[i] = f"{len(s)}#{s}"

        print(''.join(strs))
        return ''.join(strs)

    def decode(self, s: str) -> List[str]:
        result = []
        i = 0

        while i < len(s):
            j = i # this part is crucial because if you dont reset J AND ONLY RELY ON THE WHILE LOOP .... J never moves since the condition is always met

            while s[j] != '#': # hashtag indicates start of new word
                j += 1
            
            length = int(s[i:j])

            print(length, i, j)

            word = s[j+1:j+1+length] # use the number delimiter to determine substring/word
            result.append(word)
            i = j + 1 + length # go to the next hash tag

        return result 