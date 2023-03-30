/* WAP to print the pattern the given pattern up to n times
  *
 * *
* * *
 */

import java.util.Scanner;

public class Pattern {

    public static void main(String[] args) {
        System.out.println("Enter the number: ");
        int num;
        Scanner sc = new Scanner(System.in);
        num = sc.nextInt();
        for (int i = 0; i < num; i++) {
            for (int j = 0; j < num - i; j++) {
                System.out.print(" ");
            }
            for (int k = 0; k <= i; k++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
