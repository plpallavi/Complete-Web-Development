#include<iostream>
using namespace std;
int main()
{
	char myChar;
	
	do
	{
		cout<<"I am a programmer"<<endl<<"Enter x charcater to print the message again";
		cin>>myChar; 
	}
	while(myChar=='x');
}
