// Inline Functions

#include<iostream>
using namespace std;

inline int add(int a, int b)
{
	return (a + b);
}
int main()
{
	cout<<"Addition of 2 and 8 is: "<<add(2,8)<<endl;
}
