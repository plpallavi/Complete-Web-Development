/*  WAP in java to create a class consisting of radius area and perimeter as member data and the following member methods
1 - input radius
2 - calculate area and perimeter of circle
3 - Display calculated area and  perimeter
*/
import java.util.Scanner;
public class Circle {
    private double radius, area, perimeter;
    public void input(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the radius: ");
        radius= sc.nextDouble();
    }
    public void calculate(){
        area=Math.PI * Math.pow(radius,2);
        perimeter= 2 * Math.PI * radius;
    }
    public void display(){
        System.out.println("Area= "+ area + "\nPerimeter= " + perimeter);
    }
    public static void main(String args[]){
        Circle c = new Circle();
        c.input();
        c.calculate();
        c.display();
    }    
}
