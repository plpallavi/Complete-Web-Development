/* Wap to check if a number is palindrom or not...
121, 363,989 are some example of palindrom number
123 is not palindrom number*/

#include<iostream>
using namespace std;
int main()
{
	cout<<"Enter the number to check it is palindrom or not: "<<endl;
	int n,num,digit,rev=0;
	cin>>num;
	n=num;
	while(num!=0)
	{
		digit=num%10;
		rev=(rev*10) + digit;
		num=num/10;
	}
	
	if(n==rev)
	{
	cout<<"Palindrom number"<<endl;
	}
	
	else
	{
	cout<<"Not a palindrom number"<<endl;
	}
}
