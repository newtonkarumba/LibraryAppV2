package Book;

import java.util.Scanner;

public class Book {
    private int bookId;
    private String bookName;
    public int option;



    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }
    public void borrowBook1(){
        System.out.println("Please Enter the book you would like to borrow: ");
        System.out.println("1. English for Beginners. ");
        System.out.println("2. Math for Beginners. ");
        System.out.println("3. Counselling for Arsenal fans. ");
        System.out.println("4. How to fill up a stadium like Man-city.");

        Scanner s = new Scanner(System.in);
        switch (option){
            case 1: 
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
        }

    }
}
