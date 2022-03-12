// File handling in C++

#include<iostream>
#include<fstream>
using namespace std;
int main(){
	char arr[100];
	cout<<"Enter youur name and age: "<<endl;
	cin.getline(arr,100);
	
	ofstream myfile("xyz.txt");
	// myfile.open("xyz.txt");
	myfile<<arr;
	myfile.close();
	cout<<"File write operation performed successfully"<<endl<<endl;
		
}
