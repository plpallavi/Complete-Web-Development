// WAP to create an integer array of size n and sort the array and display it in ascending order.

import java.util.Scanner;
public class Array {
    public static void main(String[] args){
        int n,arr[];
        System.out.println("Enter the size of an array: ");
        Scanner sc=new Scanner(System.in);
        n=sc.nextInt();
        arr=new int[n];
        System.out.println("Enter array elements: ");

        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
        }
        for(int j=0; j<n-1; j++){
            for(int m=0; m<n-1-j; m++){
                if(arr[m]<arr[m+1]){
                    int temp = arr[m]; 
                    arr[m] = arr[m+1];
                    arr[m+1]= temp;
                }
            }
        }

        System.out.println("Sorted array is: ");
        for(int k=0; k<n; k++){
            System.out.print(arr[k]+" ");
        }
        
    } 
}
