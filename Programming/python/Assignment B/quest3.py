'''A company divided salary in 4 slabs:
 Grade   Basic( Rs. per month)   D.A.(% of Basic)   H.R.A.(% of Basic)
   1        10,000 or more              40%                30%
   2        5,000 - 10,000              40%                25%
   3        < 5,000 but > 2,000        	30%                20%
   4        2,000 or less               30%                15%

If the salary which is the total of Basic, D.A., and H.R.A., is above Rs.50,000 per month 
then Income Tax at the rate of 30% of the annual salary exceeding 50,000 is deducted on monthly basis at source.
Taking name of the employees and the Basic(monthly) pay as inputs, 
a pay slip, which contains Name, Basic monthly pay, DA, HRA, Monthly Income Tax and Net Monthly Salary, 
Write a python program to perform this job. '''

name1=input("Enter Name:")
basic = float(input("Enter Basic Monthly salary:"))
da=0
hra=0
incomTax=0
if(basic>=10000):
     da=basic*0.4
     hra=basic*0.3
elif(basic>=5000 and basic<10000):
     da=basic*0.4
     hra=basic*0.25
elif(basic>2000 and basic<5000):
     da=basic*0.3
     hra=basic*0.2
else:
     da=basic*0.3
     hra=basic*0.15

totalsalary=basic+da+hra
if(totalsalary>50000):
     incomeTax=(totalsalary-50000)*0.3
else:
     incomeTax=0
monthlysalary=totalsalary-incomeTax
print("--Pay Slip--")
print("Name:",name1)
print("Basic Monthly pay:",basic)
print("D.A :",da)
print("H.R.A:",hra)
print("Monthly Income Tax:",incomeTax)
print("Net Monthly Salary :",monthlysalary)

