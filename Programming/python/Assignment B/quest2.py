'''2.Write a program in python that will accept 3 angles of the triangle and check that triangle is possible, 
if possible than check that is it “Acute angled traingle”(All angle are <90 degree),
”Right angled triangle”(One angle is 90 degree) or “Obtuse”(One angle is >90 degree).
Also print a “Triangle is not possible” if the sum of the angles are not 180 degree. '''

x = int(input("Enter the value of x : "))
y = int(input("Enter the value of y : "))
z = int(input("Enter the value of z : "))

if(x+y+z==180):
    
    if(x<90 and y<90 and z<90):
        print("Acute Angled Triangle")
        
    elif(x==90 or y==90 or z==90):
        print("Right Angled Triangle")
        
    else:
        print("Obtuse Angled Triangle")
    
else:
    print("Its not a Triangle")
 