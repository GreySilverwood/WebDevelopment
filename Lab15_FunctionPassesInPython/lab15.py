"""
Zaiqiang Li
Tuesday, June 25th
"""

# Define a function that takes two numbers and return the sum of them
def addition(x, y):
    return x+y

# Calling function addition()
result = addition(2, 5)
print(result)
print(addition(8,-10))

# Define a function to calculate the area of a rectangle using the length and the width
def arearectangle(length, width):
    area = length*width
    return area

# Calling Function arearectangle
print(f"The area of a rectangle is {arearectangle(3,5)}.")

# Define a function to check if a number is positive, negative or zero
def ispositive(num):
    try:
        if num > 0:
            return "positive"
        elif num < 0:
            return "negative"
        elif num == 0: 
            return "zero"
        else:
            return "undefined"
    except:
        return "undefined"
    
# Calling function ispositive()
n = 8
print(f"The number is {ispositive(n)}.")

# Define a function that checks if a number is an even number%2 == 0
def iseven(num):
    try:
        if num%2 == 0:
            return True
        else:
            return False
    except:
        return "ERROR"

# Calling Function iseven()
x = 11
print(f"Is the number even? {iseven(x)}.")


print("\n ===== CLASSES =====")
class MyClass:
    # attribute (variable)
    i = 12345

    # method (function)
    def testing(self):
        return "Hello World!"
    
# Calling class MyClass
# Step 1) Create the instance class property
newclass = MyClass()

# Step 2) Call the instance class property
instanceproperty = newclass.i

# Step 3) Call the instance class method
instancemethod = newclass.testing()

print(f"Instance class property: {instanceproperty}")
print(f"Instance Class Method: {instancemethod}")


print("\n ====== CAR CLASS EXAMPLE =====")
class Car:
    # Instantiation Object
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    # Method to return the information of the car
    def get_description_car(self):
        return (f"{self.year}, {self.make}, {self.model}")
    
# Create an instance of the class Car
newCar = Car("Audi", "A4", 2020)

# Access method get_description_car
car_description = newCar.get_description_car()
print(car_description)
