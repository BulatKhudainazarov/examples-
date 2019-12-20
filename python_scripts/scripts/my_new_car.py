class Car():
    """Просатя модель автомобиля"""
    def __init__(self, make, model, year):
        """Инициализирует атрибуты описания автомобиля"""
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    def get_descriptive_name(self):
        """Возвращает аккуратно отформатированные данные"""
        long_name = str(self.year) + " " + self.make + " " + self.model
        return long_name.title()

    def read_odometer(self):
        """Параметры одометра"""
        print("This car has " + str(self.odometer_reading) + " miles on it")

    def update_odometer(self, mileage):
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back on odometer!")

    def increment_odometer(self, mileage):
        self.odometer_reading += mileage
        print("This car has " + str(self.odometer_reading) + " miles on it")

my_new_car = Car("audi", "a4", 2016)
print(my_new_car.get_descriptive_name())
my_new_car.odometer_reading = 24
my_new_car.read_odometer()
my_new_car.update_odometer(25)
my_new_car.increment_odometer(100)
