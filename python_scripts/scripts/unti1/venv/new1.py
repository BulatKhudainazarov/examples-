import random

a = random.randint(0, 10)
b = int(input("Введите число от 0 до 10: "))

try:
    b != int
except TypeError as e:
    print('Error', e)

while type(b) == int:
    if a == b:
        print("Вы угадали!")

        a = random.randint(0, 10)
        b = int(input("Угадайте снова число от 0 до 10: "))
    elif b > a:
        print("Меньше")

        b = int(input("Введите число от 0 до 10: "))
    else:
        print("Больше")

        b = int(input("Введите число от 0 до 10: "))
print("Вы угадали!")
b = int(input("Введите число от 0 до 10: "))

import random

a = random.randint(0, 10)
b = input("Введите число от 0 до 10: ")



while type(b) == int:
    if a == b:
        print("Вы угадали!")

        a = random.randint(0, 10)
        b = int(input("Угадайте снова число от 0 до 10: "))
    elif b > a:
        print("Меньше")

        b = int(input("Введите число от 0 до 10: "))
    else:
        print("Больше")

        b = int(input("Введите число от 0 до 10: "))
print("Вы угадали!")
b = int(input("Введите число от 0 до 10: "))

###### Более красивый вариант ######

import random

a = random.randint(0, 10)
b = int(input("Введите число от 0 до 10: "))

running = True

while running:
    if a == b:
        print("Вы угадали!")

        a = random.randint(0, 10)
        b = int(input("Угадайте снова число от 0 до 10: "))
    elif b > a:
        print("Меньше")

        b = int(input("Введите число от 0 до 10: "))
    else:
        print("Больше")

        b = int(input("Введите число от 0 до 10: "))
print("Вы угадали!")
b = int(input("Введите число от 0 до 10: "))