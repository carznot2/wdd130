def get_initial (name, force_uppercase):
    if force_uppercase:
        initial=name[0:1].upper()
    else:
        initial=name[0:1]
    return initial 

first_name = input("Please enter your first name: ")
first_name_initial = get_initial(force_uppercase=True, name=first_name)

middle_name=input("Please enter your middle name: ")
middle_name_initial = get_initial(force_uppercase=True, name=middle_name)

last_name = input("Please enter your last name: ")
last_name_initial = get_initial(force_uppercase=True, name=last_name)

print('Your initials are: ' + first_name_initial, middle_name_initial, last_name_initial)