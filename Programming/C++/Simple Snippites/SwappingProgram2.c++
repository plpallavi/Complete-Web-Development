/* Wap to perform swapping of 2 variables values without using thirrd variable. */

#include<iostream>
using namespace std;
int main()
{
	cout<<"Swapping program without using 3rd variable";
	int x,y;
	x=5;
	y=6;
	
	cout<<"Before Swapping"<<endl;
	cout<<"x = "<<x<<endl;
	cout<<"y = "<<y<<endl;
	
	x=x+y;  //5+6=11
	y=x-y; //11-6=5
	x=x-y; //11-5=6
	
	cout<<"After Swapping"<<endl;
	cout<<"x = "<<x<<endl;
	cout<<"y = "<<y<<endl;
	
}
