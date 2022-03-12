// Pass by Reference (Call by Reference)

#include<iostream>
using namespace std;

passbyReference(int &x, int &y)
{
	int z=x;
	x=y;
	y=z;
}
int main(){
	int a = 5, b = 6;
	cout<<"Before Swapping "<<endl<<"a: "<<a<<endl<<"b: "<<b<<endl<<endl;
	passbyReference(a,b);  //call function
	cout<<"After Swapping "<<endl<<"a: "<<a<<endl<<"b: "<<b<<endl<<endl;
}
