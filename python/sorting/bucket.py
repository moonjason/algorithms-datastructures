# bucketSort()
#   create N buckets each of which can hold a range of values
#   for all the buckets
#     initialize each bucket with 0 values
#   for all the buckets
#     put elements into buckets matching the range
#   for all the buckets 
#     sort elements in each bucket
#   gather elements from each bucket
# end bucketSort

def bucketSort(array):
    bucket = []

    # Create empty buckets
    for i in range(len(array)):
        bucket.append([])

    print(bucket, 'empty buckets') #an array of arrays

    # Insert elements into their respective buckets
    for j in array:
        index_b = int(10 * j) #bucket indexing
        print(index_b, 'index_b')
        bucket[index_b].append(j)

    print(bucket, 'After Bucketing')

    # Sort the elements of each bucket
    for i in range(len(array)):
        bucket[i] = sorted(bucket[i])

    print(bucket, 'After Sorting each individual bucket')

    # Get the sorted elements
    k = 0
    for i in range(len(array)):
        for j in range(len(bucket[i])):
            array[k] = bucket[i][j]
            k += 1
    return array


array = [.42, .32, .33, .52, .37, .47, .51]
print("Sorted Array in descending order is")
print(bucketSort(array))