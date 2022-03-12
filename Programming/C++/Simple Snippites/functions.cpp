// Functions in cpp

#include<iostream>
using namespace std;
int maximum (int a, int b);  //forward declaration
int main(){
	
	int a,b;
	
	cout<<"Enter two numbers to find the greatest: "<<endl;
	cin>>a>>b;
	int c = maximum(a,b); //function call
	cout<<"greatest value is: "<<c<<endl;
	return 0;
}
int maximum (int x, int y)  //signature part
{
	if(x>y)
	return x;
	else
	return y;
} 
