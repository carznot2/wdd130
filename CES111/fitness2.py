

import datetime

print("Enter patients name:  ")
x = input()
birthday = input('Enter your patients birthday (use this format i.e. yyyy/mm/dd):  ')
year, month, day = list(map(int, birthday.split("/")))
birthdate = datetime.date(year, month, day)


# print(f"We show your patients birthday as being {birthdate.strftime('%Y/%m/%d')}")

gender=input ("What is patient's gender? Please enter 'M' for Male or 'F' for Female:  ")

# if (gender=='M'):
#     print ("We have this patient entered as a Male")
# elif (gender=='F'):
#     print ("We have this patient entered as a Female")


weight=input("Now please enter your patient's weight (in U.S. pounds):  ")
height=input("Please enter your patient's height in inches:  ")

# print("Patients name is: (patient_name")