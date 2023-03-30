/*
    polymorphism is the feature which describes the  use of one thing for many purposes in java plymorphism can be achivee in two ways method overoading  and method over
    writing

    create a class which is caclutalting absoulte value of a integer value and a floating value using overloading method
*/

import java.util.Scanner;

class polymorphism {
    private int value;
    private double val;

    class polymorphism (int a,double b)
    {
            value = a;
            value = b;
        }

        public int abs() {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter the int value: ");
            value = sc.nextInt();
            if (value < 0) {
                return value * (-1);
            } else {
                return value;
            }
        }

        public double abs() {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter double value: ");
            value = sc.nextdouble();
            if (val < 0) {
                return val * (-1);
            } else {
                return val;
            }
        }

    public static void main(String[] args){
        pol p=new pol(int x, double y);
        x=p.abs();
        y=p.abs();
        
        
}
}