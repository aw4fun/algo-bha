def binary_search(items, point):
    low = 0
    high = len(items)-1

    while low <= high:
        mid = (low + high)/2
        guess = items[mid]
        if guess == point:
            return mid
        if guess > point:
            high = mid - 1
        else:
            low = mid + 1
    return None


my_list = [1, 2, 3, 4, 5, 6, 7]
print(binary_search(list, 3))
# print(binary_search(my_list, -1))
