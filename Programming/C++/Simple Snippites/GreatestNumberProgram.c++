/* Wap to check largest number among 3 differnt number */

#include<iostream>
using namespace std;
int main()
{
	cout<<"Largest of 3 number"<<endl;
	int x,y,z;
	cout<<"Enter a number"<<endl;
	cin>>x>>y>>z;
	
	//Nested if else condition....it means there is if condition inside a if condition
	
	if(x>y)
	//x is greater than y
	{
		if(x>z)
		{
		//x is greater than z then x will be the greatest number otherwise else codition will be execute
		cout<<x<<" is the gratest number"<<endl;
	    }
		else
		{
			cout<<z<<" is the greatest number"<<endl;
		}
    }
	else (x>y);
	{    
	//y is greater than x
		if(y>z)
		{
		//y is greater than z then  y wii be the greatest number otherwise else condition will be execute
		cout<<y<<" is the greatest nnumber"<<endl;
		}
		else
		{
			cout<<z<<" is the greatest number";
		}
	}
 } 
