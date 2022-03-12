
#pyhton tutorial by ANUJ BHAIYAAA
# how to print
print('Hello world')
print("Hi my name is Pallavi")

#Identifiers
 
#valid identifiers
name= "Pallavi"
last_name="Kumari"
_age0=20

#Invalid identifiers
#2name="pallavi" ---identifiers should not begins with a number
#class="graduation"----class is keyword i.e reserverd word in python
#@ge=20---alpha numeric char. should not be used

print(name)
print(last_name)
print(_age0)

#Data Types in python

name="Saloni"
print(name, type(name))
age=20
print(age, type(age)) 
marks=19.5
print(marks, type(marks))
is_passed=True
print(is_passed, type (is_passed))
my_complex_number=10+12j
print(my_complex_number, type(my_complex_number))
favrouit_food_list=['Dosa','Momos','Idli']
print(favrouit_food_list, type(favrouit_food_list))

#problem 1. Write a program to save the following user-->1.name, 2.age, 3.year of birth, 4.Is new user, 5.list of fav food
name="Pallavi kumari"
age= 20
year_of_birth= 2002
Is_new_user= False
list_of_fav_food=['Dosa','Momos','Idli']
print(name)
print(age)
print(year_of_birth)
print(Is_new_user)
print(list_of_fav_food) 

#Operators in Python
#Arithematic Operators
num1= 10
num2= 12
sum= num1+num2
print(sum) 
a= 20
b=8
print(a+b) #add
print(a-b) #substract
print(a*b) #multiply
print(a/b) #divide

print(a%b) #module operator(returns remainder)
print(a//b) #returns quotient
print(a**b) #here it means 20^8 



#Write a program to find the average of three numbers.
a= 5
b= 6
c= 7
sum=a+b+c
print(sum)
average=sum/3
print(average)


#Assingment Operators
a=5
#a= a+3
a += 3
print(a)

b=9
#b=b-4
b-=4
print(b)

c=8
#c=c*2
c*=2
print(c)


d=9
#d=d/3
d/=3
print(d)



# Relational Operators/Comparison Operator
a = 89
b = 74

print('a<b',a<b)
print('a>b',a>b)
print('a==b',a==b)
print('a!=b',a!=b)

#logical operators
x = True
y = False
print('x and y is: ', x and y)
print('x or y is: ', x or y)
print('not x is: ',not x)


#taking user input

name = input(("Enter your name: "))
print (name)

#operation by taking input from user

a = int(input("Enter num1: "))
b = int(input("Enter num2: "))
add = a + b
sub = a - b
multiply = a * b
divide = a/b
print(add)
print(sub)
print(multiply)
print(divide)

#Problem2. Write a program to take marks of a user in English,Science and Maths and print the average of these marks.
sub1 = int(input("Enter the of marks English: "))
sub2 = int(input("Enter the of marks Science: "))
sub3 = int(input("Enter the of marks Maths: "))
average = (sub1 + sub2 + sub3)/3
print(average)


#Conditional Statements
#if statement
age = 23

if age > 18:
    print("You can vote")

#print("Otherwise you can't")

age = 3
if age > 18:
    print("You can't vote")

print("In other case you can")

#If-Else statement
age = 23
if age > 18:
    print("You can vote")
else:
    print("You cannot vote")

#Elif statement
num=8
if num > 0:
    print("Positive")
elif num== 0:
    print("Zero")
else:
    print("Negative")

num=-7
if num > 0:
    print("Positive")
elif num== 0:
    print("Zero")
else:
    print("Negative")


# Range() function in Python

a = range(10)
print (a)

a = list(range(10))   
#here it will print all numbers from 0 to 10
print (a)

a= list(range(2,10))
#here it will print all numbers between from 2 to 10
print(a)

a = list(range(2, 10, 2))
#here it will print all numbers between from 2 to 10 by skiping 2 steping
print(a)


#LOOPS in python
#For Loop
#range in for looop

for x in range(10):
    print(3*x) 

for x in range(10):
    print(2*x, end=(", ")) 

#list in for loop
a = ['\nPallavi','Saloni','Shalini','Nidhi']
for name in a:
    print(name)

a = ['Pallavi ','Saloni ','Shalini ','Nidhi ']
for name in a:
    print(name*2, end=(","))


#While Loop
n = 5

while n >= 0:
    print(n)
    n -=1

#Break and Continue Statement
#Break Statement

for x in range(10):
    if x>5:
        break
    print(x)

#Continue Statement
for i in range(10):
    if i == 5:
        continue
    print(i)

# Strings in Python
name1 = 'Pallavi'
name2 = "Pallavi Kumari"
#name3 = ''My Name is Pallavi Kumari Gupta''
print(name1)
print(name2)
#print(name3)

#Indexing in string
fruit = "Mango"
print(fruit[3])

fruit = "Watermelon"
print(fruit[-6])
print(fruit[5])

#slicing of strings in Python
a = "apple"
print(a[2:4])

a = "gauva"
print(a[0:6])

a = "watermelon"
print(a[2:6:2])

a = "mango"
print(a[3:])

a = "banana"
print(a[:4])

a = "papaya"
print(a[::-1])

a = "grape"
print(a[0:5:-1])  

a = "litchi"
print(a[-1:0:-1])

a = "cherry"
print(a[-1:0:1])

#Operation with string
name1= "Pallavi "
name2= "Kumari"
fullname= name1 + name2
print(fullname)
repeatedname = fullname*2
print(repeatedname)

#Strings in for Loop
name = "Python"
for my_name in name:
    print(my_name*2)                  

 
#Strings method in Python
name="saloni"
print(name.isalpha())               

name = "saloni12"
print(name.isalpha())

a = "apple"
print('is alphabet:',a.isalpha())
print('is digit:',a.isdigit())
print('is uppercase:',a.isupper())
print('is lowercase:',a.islower())
print('lower:',a.lower())
print('upper:',a.upper())

a = "  apple  "
print(a.lstrip())
print(a.rstrip())


# Lists in Python

my_list = [1,2,3,4,5]
print(my_list)

details = ["Pallavi", 19, 000.000]
print(details)

fruits = ["Apple","Mango","Banana","Gauva"]
print(fruits[-2])

#slicing in python
numbers = [0,1,2,3,4,5,6,7,8,9]
print(numbers[3:7])
print(numbers[::-1])
print(numbers[-1:0:-2])

#how to update list in Python
fruits = ["Mango","Apple","Banana"]
fruits[1] = 'Watermelon'
print(fruits)

#how to delete elements from list
fruits = ["Mango","Apple","Banana","Gauva"]
del fruits[1]
print(fruits)

#List Comprehension
n = [n for n in range(100)]
print(n)
#for Even numbers
n = [n for n in range(100) if n%2==0]
print(n)

#for odd numbers
n = [n for n in range(100) if n%2==1]
print(n)

#for power
n = [2**i for i in range(10)]
print(n)

#list method in python

#Append Method
a = [1,2,3]
print(a)
a.append(4)
print(a)

#Insert Method
a = [1,2,4]
print(a)
a.insert(2,3)
print(a)

a = [9,7,5,3,1,2,4,6,8]
fruits = ['Apple','Banana','Mango']

#SORT Method
a.sort()
print(a)

#POP Method
a.pop(0)
print(a)

#CLEAR Method
a.clear()
print(a)

#REVERSE Method
fruits.reverse()
print(fruits)

#INDEX Method
print(fruits.index('Mango'))

#COUNT Method
print(fruits.count('Banana'))

# LIST function
n = [0,8,6,4,2,1,3,5,7,9]
#len() Function
print(len(n))
#max() function
print(max(n))
#min() function
print(min(n))
#sum() function
#print(sum())
#sequence function
s = "Pallavi"
print(list(s))

#FOR LOOP in list
a = [1,2,3,4,5]
for element in a:
    print(element * 3, end =" ")

#TUPLES in python
my_tuple = ()
print(my_tuple)
my_tuple = (1,2,3)
print(my_tuple)
my_tuple = ("Pallavi", 19)
print(my_tuple)
#----All Tuples Operation is similar to List Operation----
'''
#TUPLE FUNCTION
# 1. len(tuple)
# 2. max(tuple)
# 3. min(tuple)
# 4. seq(tuple)
# 5. count(tuple)
'''
# SETS
a = {1,2,3,4,3,2,1}
print(a)

#Indexing is not supported in sets

#Iterating through SETS
for element in a:
    print(element*3)


#Dictionary
my_dict = {}
print(my_dict)
my_dict = {1:'apple',2:'banana'}
print(my_dict)
my_dict = {'name':'pallavi', list:[1,2,3,4]}
print(my_dict)
my_dict = {1:'Apple',2:'Banana',3:'Mango'}
print(my_dict)

marks = {'Pallavi':98, 'Saloni':99, 'Mahi': 34, 'Rajni':89, 10:97, 3:79, 5:35}
print(marks)
print(marks[5])

#Iterating through a DICTIONARY
squares = {1:1, 2:4, 3:9, 4:16, 5:25, 6:36, 7:49, 8:64}
# here only value will be iterates 
for i in squares:
    print(squares[i])

# here value and key both iterates
for i in squares:
    print(i,squares[i])

# Updating a Dictionary

my_profile = {'Name':'Pallavi','Age':19, 'DOB':12-12-2002}
my_profile ['Salary']  = 000
my_profile ['Age'] = 20
print(my_profile)


# Fuctions in Python
# Modules 
import math
print(math.pi)
import math as m
print(m.pi)

from math import cos,sin,pi
print(cos(3))
print(sin(6))
print(pi)

from math import *
print(cos(3))
print(sin(6))
print(pi)

# USER DEFINED Functions
def greet():
    print('This is Pallavi')
greet()

def greet(name):
    print('Good Morning,', name)
greet('Pallavi')

def greet(name):
    print('Good Morning,', name)
    print('Please eat the cake')
greet('Pallavi')

def greet(name, dish):
    print('Good Morning,', name)
    print('Please eat,', dish)
greet('Pallavi','Maggie')

def greet(name, dish='Pasta'):
    print('Good Morning,', name)
    print('Please eat,', dish)
greet('Pallavi')

def greet(name, dish='Pasta'):
    print('Good Morning,', name)
    print('Please eat,', dish)
greet('Pallavi','Samosa')

'''def sum_of_list(a):
    print("Calculating...")
    return sum(a)

marks = [89,54,78,96,65,47]
sum_of_marks = sum_of_list(marks)

print('my sum of marks', sum_of_marks)
'''
#problem 3. Write a function which takes a liist oof names as argument and greets"Hello" to everyone
def greetings(names):
    for name in names:
        print('Hello',name)
names = ['Pallavi','Saloni','shalini']
greetings(names)

#----------------------------------------------------------PYTHON COMPLETED-----------------------------------------------------------





























































