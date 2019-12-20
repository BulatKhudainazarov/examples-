import random

a = input("Введите букву: ")
s = ("word", "auto", "fahrrad")
b = len(random.choice(s))
print(random.choice(s))

while True:
    if a in random.choice(s): 
        print(a, "буква есть в слове")
        print(random.choice(s).count(a))
        a = input("Введите еще букву: ")
    else:
        print("буквы", a," нет в слове")
        a = input("Введите букву: ")
