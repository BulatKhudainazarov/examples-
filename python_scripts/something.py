numbers = [-1, 9, 8, 6, 5, 3, 1, 0, -1, -3, -4, -6, -8]
total = 0
i = len(numbers) - 1
print(len(numbers))

while i >= 0 and numbers[i] <= 0:
    total += numbers[i]
    i -= 1
print(total)