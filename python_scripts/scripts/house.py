class House:
    def __init__(self, window, door, seat, cleaning):
        self.window = window
        self.door = door
        self.seat = seat
        self.cleaning = cleaning

    def open_door(self):
        """Мы открываем дверь от дома"""
        print("the ", self.door.title(), " is opened")

    def open_window(self):
        """Мы открываем окно"""
        print("the ", self.window.title(), " is opened")

    def take_away_seat(self):
        """Убрать что стул"""
        print("the ", self.seat.title(), " is took")

    def cleaning_this_house(self):
        """Убираться дома"""
        print(self.cleaning.title(), " is cleaned")

my_house = House("window1", "door1", "seat1", "cleaning1")
my_house.open_door()
my_house.open_window()
my_house.take_away_seat()
my_house.cleaning_this_house()