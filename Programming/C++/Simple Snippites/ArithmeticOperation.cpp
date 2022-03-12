/* Wap to performs arithmethic operation on two numbers by creating amenu drive program where users input a number from 1 to 5 and each number correspond to a particular 
   arithmeic operation. 1.Addition, 2.Substraction, 3.Multiplication, 4.Division, 5..Modulo Operation  */
   
   #include<iostream>
   using namespace std;
   int main()
   {
   	cout<<"Arithmetic Operation Program"<<endl;
   	cout<<"1.Addition"<<endl<<"2.Substraction"<<endl<<"3.Multiplication"<<endl<<"4.Division"<<endl<<"5.Modulo Operation"<<endl;
   	cout<<"Enter the operation number to perform the apporpriate operation"<<endl;
   	int option_no;
   	cin>>option_no;
   	int x,y;
   	
   	switch (option_no)
   	{
   		case 1:
   		cout<<"Addition Operation"<<endl<<"Enter two numbers"<<endl;
   		cin>>x>>y;
   		cout<<"The Addition of "<<x<<" and "<<y<<" is: "<<(x+y);
   		break;
   		
   		case 2:
   		cout<<"Substraction Operation"<<endl<<"Enter two numbers"<<endl;
   		cin>>x>>y;
   		cout<<"The Substraction of "<<x<<" and "<<y<<" is: "<<(x-y);
   		break;
   		
   		case 3:
   		cout<<"Multiplication Operation"<<endl<<"Enter two numbers"<<endl;
   		cin>>x>>y;
   		cout<<"The Multiplication of "<<x<<" and "<<y<<" is: "<<(x*y);
   		break;
   		
   		case 4:
   		cout<<"Division Operation"<<endl<<"Enter two numbers"<<endl;
   		cin>>x>>y;
   		cout<<"The Division of "<<x<<" and "<<y<<" is: "<<(x/y);
   		break;
   		
   		case 5:
   		cout<<"Modulo Operation"<<endl<<"Enter two numbers"<<endl;
   		cin>>x>>y;
   		cout<<"The Modulo of "<<x<<" and "<<y<<" is: "<<(x%y);
   		break;
   		
   		default :
   		cout<<"Invalid Input"; 
   		break;
	   }
   }
