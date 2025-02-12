class HashTable:
    def __init__(self, size = 7):
        self.data_map = [None] * size

    def print(self):
        for key, val in enumerate(self.data_map):
            print(key, val)

    def _hash(self, key):
        my_hash = 0
        for letter in key:
            my_hash = (my_hash + ord(letter) * 23) % len(self.data_map)
        return my_hash

    def set_item(self, key, value):
        new_hash = self.__hash(key)
        if self.data_map[new_hash] is None: 
            self.data_map[new_hash] = [ [key, value] ] 
        else:
            self.data_map[new_hash].append( [key, value] )
            
    def get_item(self, key):
        index = self.__hash(key)
        if self.data_map[index] is not None:
            for i in range(len(self.data_map[index])):
                if self.data_map[index][i][0] == key:
                    return self.data_map[index][i][1]
        return None

    def keys(self):
        all_keys = []
        for arr in self.data_map:
            if arr is not None:
                for val in arr:
                    all_keys.append(val[0])
        
        return all_keys
            
hash_table = HashTable(size=12)
hash_table.print()
print(hash_table._hash('ballsack'))
