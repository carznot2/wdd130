import math

from datetime import datetime
f = open("volumes.txt", "a")
current_date=datetime.now()
#print("Today's date is: " + str(current_date))
today = datetime.now()
print('Today is:  ' +str(today))
print('WELCOME TO TIRE COUNTRY.')
print('Please enter your tire specifications.')
f.close()

pi = math.pi
w = int(input("Enter number before the slash(width in mm i.e 205): "))
a = int(input("Enter the aspect ratio of the tire (the number before the R): "))
d = int(input("Enter the rim diameter (the number after the R): "))
#Formula is v=(pi*w^2*a(wa+2,540d))/10^10
print(f"The tire you entered is a {w}/{a}R{d}")
v=(pi * (pow(w,2)*a*(w*a+2540*d)))/10000000000
print("The volume of the tire is %.2f liters" %(v))


