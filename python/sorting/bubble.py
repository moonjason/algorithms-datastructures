def bubble_sort(arr):
    for i in range(len(arr), 0, -1):  # Outer loop: decrementing i
        no_swaps = True  # Flag to track if a swap was made
        for j in range(i - 1):  # Inner loop: iterate through unsorted portion
            if arr[j] > arr[j + 1]:
                # Swap elements
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                no_swaps = False  # Set flag to False as a swap occurred
        if no_swaps:  # If no swaps were made, the array is sorted
            break
    return arr

# What's happening is that there are two loops
# The first loop's index is in the end of the array
# While the inner loop starts at the front of the array
# Comparisons between pairs occur throughout the entire array until no swap happens in one INNER pass through
