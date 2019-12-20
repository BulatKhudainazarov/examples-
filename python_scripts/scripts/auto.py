class Car():
    """Класс по созданию автомобиля"""
    def __init__(self, make, model, year):
        """Инициализация атрибутов автомобиля"""
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    def description_name(self):
        """"Возращаем описание автомобиля"""
        desc = (str(self.year), self.make, self.model)
        return desc.title()

    def read_odometer(self):
        """выводим пробег авто"""
        print("Пробег авто ", str(self.odometer_reading), " km")
    def update_odometer(self, km):
        """Устанавливаем значение на odometer"""
        if km >= self.odometer_reading:
            self.odometer_reading = km
        else:
            print("Не стоит этого делать")

    def increment_odometer(self, km):
        """Увеличиваем показания одометра на заданный пробег"""
        if km >= 0:
            self.odometer_reading += km
        else:
            print("Пробег не может быть отрицательным")

my_car = Car("audi", "a4", 2017)
"""my_car.odometer_reading = 30"""
my_car.update_odometer(34)
my_car.increment_odometer(6)
my_car.read_odometer()