# Write a program to input the value of N. Print all the ODD and EVEN numbers between 1 to N.

n= int(input("Enter a number : "))
for number in range(1, n+1):
    if(number % 2 != 0):
        print("{0}".format(number))
        