//pointers in c++

#include<iostream>
using namespace std;
int main(){
	
	int var = 5;
	
	//data type *pointername
	int    *ip;   //pointer too a intger
	double *dp;   //pointer to a double
	char   *cp;   //pointer to a character
	float  *fp;   //pointer to a float
	
	ip=&var;
	
	cout<<"variable value: "<<var<<endl;
	cout<<"Address in pointer: "<<ip<<endl;
	cout<<"pointer pointing to value: "<<*ip<<endl;
	
	*ip=6;
	
	cout<<endl;
	cout<<"variable value: "<<var<<endl;
	cout<<"Address in pointer: "<<ip<<endl;
	cout<<"pointer pointing to value: "<<*ip<<endl;
	
}
