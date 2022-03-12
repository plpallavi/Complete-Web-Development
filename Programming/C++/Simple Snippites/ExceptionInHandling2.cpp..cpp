//Exceptional in handling in cpp
//program 2

#include<iostream>
using namespace std;
int main(){
	int numerator, denominator,result;
	cout<<"Enter the numerator and denominator: "<<endl;
	cin>>numerator>>denominator;
	
	try
	{
		if (denominator==0)
		{
			throw denominator;
		}
		result = numerator/denominator; //division happens here
	}
	catch (int ex)
	{
		cout<<"Exception: Divide by zero is not allowed- "<<ex<<endl;
	}
	cout<<"Division is: "<<result;
	
}

