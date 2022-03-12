#include<iostream>
using namespace std;
int main()
{
	char myChar;
	cout<<"Enter a character: ";
	cin>>myChar;
	
	while(myChar=='x')
	{
		cout<<"I am a programmer"<<endl<<"Enter a character again:";
		cin>>myChar;
	}
}
