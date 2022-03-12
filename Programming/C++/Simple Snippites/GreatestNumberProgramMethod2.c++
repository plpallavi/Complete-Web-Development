//greatest number program
//method 2

#include<iostream>
using namespace std;
int main()
{
	int x,y,z;
	cout<<"Enter three number: "<<endl;
	cin>>x>>y>>z;
	
	if((x>y)&&(x>z))
	//x is greater than y and z...therefore x is greatest number
	{
	cout<<x<<" is the greatest number";
	}
	else if((y>x)&&(y>z))
	//y is greater than x and z...therefore y is greatest number
	{
	cout<<y<<" is the greatest number";
	}
	else
	{
	cout<<z<<" is  the greatest number";
    }
}
