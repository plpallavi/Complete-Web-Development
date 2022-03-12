/* 2-D arrays initialization, taking input,display output, addition, substraction */

#include<iostream>
using namespace std;
int main()
{
	//data type name arrays [rows] [columns]
	int myarray[5][5]; //declartion
	int myarray1[2][2] = {1,2,3,4,}; //declartion with initialization
	int myarray2[3][3] = {{1,1,1},{2,2,2},{3,3,3}}; //declartion with initialization
	
	for(int i=0;i<3;i++)
	{
		for(int j=0;j<3;j++)
		{
			cout<<myarray2[i][j]<<" ";
		}
		cout<<endl;
	}
	cout<<endl<<"Enter elements for 2X2 Matrix: ";
	for(int i=0;i<2;i++)
	{
		for(int j=0;j<2;j++)
		{
			cin>>myarray2[i][j];
		}
		cout<<endl;
	}
	cout<<endl<<"Enter values for a 2X2 Matrix: "<<endl;
	for(int i=0;i<2;i++)
	{
		for(int j=0;j<2;j++)
		{
			cout<<myarray1[i][j]<<" ";
			
		}
		cout<<endl;
	}
}
