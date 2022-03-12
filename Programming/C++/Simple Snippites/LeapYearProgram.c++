/* Wap to check if enterd year is leap year or not.
  1. every leap year is always divisible by 4.
  2. if year divisible by 100 and 400 both the year is leap year else it is not.
  3. if year is divisible by 4 but  not divisible by 100 then it is leap year.*/
#include<iostream>
using namespace std;
int main()
{
	int year;
	cout<<"Enter year to check if its leap year or not"<<endl;
	cin>>year;
	
	if(year%4==0)
	{
		if(year%100==0)
		{
			if(year%400==0)
			{
				cout<<"Leap year"<<endl;	
			}
			else
			{
				cout<<"Not a leap year"<<endl;
			}
		}
		else
		{
			cout<<"Leap year"<<endl;
		}
	}
	else
	{
		cout<<"Not a leap year"<<endl;
	}	
}
