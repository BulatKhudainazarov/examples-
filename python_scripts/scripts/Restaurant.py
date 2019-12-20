class Restaurant:

    def __init__(self, restaurant_name, cuisine_type):
        #количество обслуженных посетителей
        self.restaurant_name = restaurant_name
        self.cuisine_type = cuisine_type

    def describe_restaurant(self):
        print("Name this restaurant is", self.restaurant_name)
        print("This restaurant talks", self.cuisine_type)

    def open_restaurant(self, when_open, when_close):
        self.when_open = when_open
        self.when_close = when_close
        print("The restaurant is open from", self.when_open, "to", self.when_close)

    def caller_served(self, number_served):
        self.restaurant = number_served
        print("They served" + " " + str(self.restaurant) + " callers")

    def increment_number_served(self, numberin_served):
        self.restaurant += numberin_served
        print("Today they served fully " + str(self.restaurant) + " callers")

class Flavors():

    def __init__(self, flavors = ["banana", "chocolate", "strawberry"]):
        self.flavors = flavors

    def flavors_printing(self):
        print("This IceCreamStand has these ices flavors: " + ', '.join(self.flavors))

class IceCreamStand(Restaurant):

    def __init__(self, restaurant_name, cuisine_type):
        super().__init__(restaurant_name, cuisine_type)
        self.flavors = Flavors()

this_restaurant = Restaurant("Ravintola", "parhain ruokaa vain meillä!")
this_restaurant.describe_restaurant()
this_restaurant.open_restaurant(str(10), str(19))
this_restaurant.caller_served(21)
this_restaurant.increment_number_served(19)
print("\n")
this_restaurant = Restaurant("Sushi bar", "hyvät hinnat!")
this_restaurant.describe_restaurant()
this_restaurant.open_restaurant(str(9), str(20))
this_restaurant.caller_served(25)
print("\n")
ice_cream = IceCreamStand("IceCreamStand", "We have best flavors")
ice_cream.describe_restaurant()
ice_cream.flavors.flavors_printing()