package Book;

public class Book1 extends Book{
    private int bookId;
    private String bookName;
    private  Book1 (){}
    private static Book1 book1;

    public    static Book1 createBook1(){
        if (book1==null)
            book1=new Book1();

        return book1;
    }
    public void borrowBook1(){
        System.out.println("");

    }


}
