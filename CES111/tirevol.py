#import the math module for tire volume
import math

#print a description of this program for the user to see.
# ASSIGNMENT: Write a Python program named tire_volume.py that reads from the keyboard the three numbers 
# for a tire and computes and outputs the volume of space inside that tire.
print("This program computes and outputs the volume of space inside a tire.")

# v = π w2 a(w a + 2,540 d) / 10,000,000,000
# v is the volume in liters,
# π is the constant PI, which is the ratio of the circumference of a circle divided by its diameter (use math.pi),
# w is the width of the tire in millimeters,
# a is the aspect ratio of the tire, and
# d is the diameter of the wheel in inches.

#I WILL NEED THE FOLLOWING:
# Get the width (w) of the tire in millimeters.
# Get the aspect (a) ratio of the tire
# Get the diameter (d) of the wheels in inches.


pi = math.pi
w = int(input("Please enter number before the slash(width in mm i.e 205): "))
a = int(input("Please enter the aspect ratio of the tire (the number before the R): "))
d = int(input("Please enter the rim diameter (the number after the R): "))
#All numbers aquired.  Formula is v=(pi*w^2*a(wa+2,540d))/10^10
print(f"The tire you entered is a {w}/{a}R{d}")
v=(pi * (pow(w,2)*a*(w*a+2540*d)))/10000000000
print("The volume of the tire is %.2f liters" %(v))