/* 2-D Arrays addition, subtraction */

#include<iostream>
using namespace std;
int main()
{
	int myarray[5][5]; //declartion
	int myarray1[2][2] = {1,2,3,4,}; //declartion with initialization
	int myarray2[3][3] = {{1,1,1},{2,2,2},{3,3,3}}; //declartion with initialization
	
	int A[2][2],B[2][2],addition[2][2],subtraction[2][2];
	
	cout<<"Enter the values of 2-D array A: "<<endl;
	for(int i=0;i<2;i++)
	{
		for(int j=0;j<2;j++)
		{
			cin>>A[i][j];
		}
	}
	cout<<"Enter the values of 2-D array B: "<<endl;
	for(int i=0;i<2;i++)
	{
		for(int j=0;j<2;j++)
		{
			cin>>B[i][j];
		}
	}
	for(int i=0;i<2;i++)
	{
		for(int j=0;j<2;j++)
		{
			addition[i][j]=A[i][j]+B[i][j];
			
		}
	}
	
	for(int i=0;i<2;i++)
	{
		for(int j=0;j<2;j++)
		{
			subtraction[i][j]=A[i][j]-B[i][j];
		}
	}
	
	cout<<"Values of Addition Arrays are: "<<endl;
	for(int i=0;i<2;i++)
	{
		for(int j=0;j<2;j++) 
		{
			cout<<endl<<addition[i][j];
		}
	}
	
	cout<<endl<<"Values of Subtraction Arrays are: "<<endl;
	for(int i=0;i<2;i++)
	{
		for(int j=0;j<2;j++)
		{
			cout<<endl<<subtraction[i][j];
		}
	}
}
