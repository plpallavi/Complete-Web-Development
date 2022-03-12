/* Wap to calculate factorial of a number e.g. 5!=5x4x3x2x1=120 */

#include<iostream>
using namespace std;
int main()
{
	cout<<"Enter a number to calculate its factorial"<<endl;
	int x, fact;
	cin>>x; //x=5
	fact=x; //fact=5
	
	while(x>1)
	{
		x--; //x=4
		fact=fact*x;  //fact=5*4=120
	}
	cout<<"Factorial of a number is "<<fact;
}
