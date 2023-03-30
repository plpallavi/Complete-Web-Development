// WAP to calculate the transpose of a matrix
import java.util.Scanner;
public class MatrixArray {
    public static void main(String[] args){
        int m1[][],m2[][];
        int r,c,i,j;
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the no. of row and coloumn of a matrix: ");
        r=sc.nextInt();
        c=sc.nextInt();
        m1 = new int [r][c];
        m2 = new int [r][c];
        System.out.println("Enter the original matrix: ");
        for(i=0; i<r; i++){
            for(j=0; j<c; j++){
                m1[i][j]=sc.nextInt();
            }
        }
        for(i=0;i<r;i++){
            for(j=0; j<c; j++){
                m2[j][i]= m1[i][j];
            }
        }
        System.out.println("Original matrix: ");
        for(i=0; i<r; i++){
            for(j=0; j<c; j++){
                System.out.print(m1[i][j]+"\t");
            }
            System.out.println();
        }

        System.out.println("Transposed matrix is: ");
        for(i=0; i<c; i++){
            for(j=0;j<r;j++){
                System.out.print(m1[i][j]+"\t");
            }
            System.out.println();
        }

    
    }
}
