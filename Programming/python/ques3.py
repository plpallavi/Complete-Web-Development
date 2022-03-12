# 3. Write a program to define function to compute Greatest Common Divisor (GCD) and Lowest Common Multiple (LCM) of two numbers.

n1 = int(input("Enter First number :\n"))
n2 = int(input("Enter Second number :\n"))
x = n1
y = n2
while(n2!=0):
    t = n2
    n2 = n1 % n2
    n1 = t
gcd = n1
print("\nGCD of {0} and {1} = {2}".format(x,y,gcd))
lcm = (x*y)/gcd
print("LCM of {0} and {1} = {2}".format(x,y,lcm))
