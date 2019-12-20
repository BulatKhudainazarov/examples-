import random

running = True
health = 10
word = ("hello", "good", "change", "listen", "gills", "near", "wait")

letter_of_user = input("Введите букву из случайного слова: ")

word_of_pc = random.choice(word)

while running:
    if letter_of_user in word_of_pc:
        print("Это буква есть в слове! ")

    else:
        health -= 1
        print("Минус жизнь!")
        print("У вас", health, "жизнь(ей)")
        if health == 0:
            print("Вы проиграли!")
            break
    letter_of_user = input("Введите букву из случайного слова: ")