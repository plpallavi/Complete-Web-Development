#include<iostream>
using namespace std;
int main()
{
	cout<<"Enter the number: ";
	int x;
	cin>>x;
	
	if(x<0)
	{
		cout<<"negative";
	}
	else if(x>0)
	{
		cout<<"positive";
	}
	else
	{
		cout<<"the number is 0";
	}
	
}
