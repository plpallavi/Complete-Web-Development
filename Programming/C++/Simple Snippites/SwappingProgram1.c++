/* Wap to swap 2 variables values using 3rd variable.*/

#include<iostream>
using namespace std;
int main()
{
	cout<<"Swapping Program"<<endl;
	int x,y,temp;
	x=5;
	y=6;
	
	cout<<"Before Swapping"<<endl;
	cout<<"x = "<<x<<endl;
	cout<<"y = "<<y<<endl;
	
	temp=x; // temp=5
	x=y;    // x=6
	y=temp; //y=5
	
	cout<<"After Swapping"<<endl;
	cout<<"x = "<<x<<endl;
	cout<<"y = "<<y<<endl;

}
