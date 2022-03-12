// Pass by Value (Call by Value)

#include<iostream>
using namespace std;

void passByValue(int x,int y){
int z=x;
x=y;
y=z;
}

int main(){
	int a=5,b=6;
	cout<<"Before Swapping "<<endl<<"a: "<<a<<endl<<"b: "<<b<<endl<<endl;
	passByValue(a,b);
	cout<<"After Swapping "<<endl<<"a: "<<a<<endl<<"b: "<<b<<endl<<endl;
}

