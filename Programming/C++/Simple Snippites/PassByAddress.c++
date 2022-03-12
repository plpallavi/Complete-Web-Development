//Pass by Pointers/address (Call by Address)

#include<iostream>
using namespace std;

void passbyAddress( int *x, int *y)
{
	int z = *x;
	*x = *y;
	*y = z;
}
int main(){
	int a = 5, b = 6;
	cout<<"Before Swapping "<<endl<<"a: "<<a<<endl<<"b: "<<b<<endl<<endl;
	passbyAddress(&a,&b);  //call function
	cout<<"After Swapping "<<endl<<"a: "<<a<<endl<<"b: "<<b<<endl<<endl;
}
