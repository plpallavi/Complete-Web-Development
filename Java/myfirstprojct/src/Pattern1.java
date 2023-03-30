/* WAP to print the pattern
    A
   B C
  D E F
 G H I J
K L M N O
*/

import java.util.Scanner;
public class Pattern1 {
    
        public static void main(String[] args) {
            System.out.println("Enter the number: ");
            int num;
            Scanner sc= new Scanner(System.in);
            num=sc.nextInt();
            int alphabet=65;
            for(int i=0; i<num; i++){

                for(int j=0; j<num-i; j++){
                    System.out.print(" ");
                }
                for(int k=0;k<=i;k++){
                    System.out.print((char) alphabet + " ");
                    alphabet++;
                }
                System.out.println();
            }
        }
    }
