//WAP to print the fibonacci series...e.g- 0,1,1,2,3,5,8,13...

#include<iostream>
using namespace std;
int main()
{
	int num,first=0,second=1,next;
	
	cout<<"Enter the number of terms to be printed in the fibonacci series"<<endl;
	cin>>num;
	
	cout<<"Fibonacci series: "<<endl;
	
	for(int i=0;i<num;i++)
	{
		cout<<first<<endl;
		next=first+second;
		first=second;
		second=next;
	}
}
