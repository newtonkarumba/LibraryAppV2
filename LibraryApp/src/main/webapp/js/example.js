     /*
      "This" keyword

     when dealing with this, understand your scope.

     eg.
     function tihsClassFunction()
     {
     console.log("This is going to be a class.....");
     }
     var newClass = new thisClassFunction();


     */




     var name ="sane";

     function play(){
     var name = "ferran";
     console.log(this.name);
     }
     var newCook = new play();
     console.log(this.name);

   //Example 2 with  'This' keyword

      var person = {
        fname: "Newton",
        lname: "Dope",
         id: 1234,
         fullname: function(){
         return this.fname + " " + this.lname + " " + this.id;
         }
        };
        document.getElementById('demo').innerHTML=person.fullname();



 console.log("This is another example of this to display the global object(window)");

        function myFunc(){
        return this;
        }

 console.log("This is an example of the call() ");
        var person1 = {
             fullName: function() {
            return this.firstName + " " + this.lastName;
          }
        }
        var person2 = {
          firstName:"Newton",
          lastName: "Pep",
        }
       var result= person1.fullName.call(person2);  //will return the name of person 2

        document.getElementById('demo2').innerHTML = result();

 console.log("This is another example of the call() ");

        var person = {
          fullName: function() {
            return this.firstName + " " + this.lastName;
          }``
        }
        var person1 = {
          firstName:"Lionel",
          lastName: "Messi"
        }
        var person2 = {
          firstName:"Sergio",
          lastName: "Aguero"
        }
            document.getElementById("demo2").innerHTML = person.fullName.call(person1);

 console.log("This is an example of Objects ");
         var car= "Serena";
         var car2 ={model: "Subaru", make: 2018, color: "red"},


         document.getElementById("demo3").innerHTML = car;
         document.getElementById("demo4").innerHTML = "The second car is a  " + car2.model +
                                                        " made on " + car2.make + " of color " + car2.color;

console.log("This is a call that takes arguments separetely: ");

    var person = {
      fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
      }
    }
    var person1 = {
      firstName:"John",
      lastName: "Doe"
    }
    person.fullName.call(person1, "Oslo", "Norway");




 console.log("Functional Binding ");

             let user = {
               firstName: "Messi",
               sayHi() {
                 alert(`Hello, ${this.firstName}!`);
               }
             };
            document.getElementById("demo5").innerHTML = setTimeout(user.sayHi, 1000);


  console.log("Functional Binding using the key word bind ");
        let user = {
          firstName: "Vincent"
        };

        function func() {
          alert(this.firstName);
        }

        let funcUser = func.bind(user);
       document.getElementById("demo6").innerHTML =  funcUser();

 console.log("Apply() method also similar to the call() method ");

         var person = {
           fullName: function() {
             return this.firstName + " " + this.lastName;
           }
         }
         var person1 = {
           firstName:"Mike",
           lastName: "Dean"
         }

         document.getElementById("demo").innerHTML =person.fullName.apply(person1);

console.log("Apply() method also takes arguments as an array ");
        var person = {
          fullName: function(city, country) {
            return this.firstName + " " + this.lastName + "," + city + "," + country;
          }
        }
        var person1 = {
          firstName:"John",
          lastName: "Doe"
        }
        var dets =  person.fullName.apply(person1, ["Thika", "Mombasa"]);
                   document.getElementById("demo6").innerHTML = dets;


 console.log(" to get the maximum value ");
         document.getElementById("demo7").innerHTML = Math.max(1,2,3);

 console.log(" to get the maximum value using apply ");

        document.getElementById("demo").innerHTML = Math.max.apply(0, [1,2,3]);

console.log(" Prototypes ");
//All objects inherit attributed and methods from prototypes
/* For example
Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
*/
        function Person(first, last, age, eye) {
          this.firstName = first;
          this.lastName = last;
          this.age = age;
          this.eyeColor = eye;
        }

        Person.prototype.nationality = "Irish";

        var myFather = new Person("Jack", "Daniels", 50, "brown");
        document.getElementById("demo8").innerHTML =
        "The nationality of my father is " + myFather.nationality;

        //Also You can say

        function Person(first, last, age, eye) {
          this.firstName = first;
          this.lastName = last;
          this.age = age;
          this.eyeColor = eye;
        }

        Person.prototype.name = function() {
          return this.firstName + " " + this.lastName
        };

        var myFather = new Person("John", "Doe", 50, "blue");
        document.getElementById("demo9").innerHTML =
        "My father is " + myFather.name();



         //Object Literals

       var name = "Leroy torres";

       var play = {
       name = "silva",
       showDetails: function(){
       console.log(this.name);
       }
       }
       console.log(this.name)
       console.log(play.showDetails());












console.log(" AJAX ");
/* Ajax is useful to developers since it allows you to:
Read data from a web server - after the page has loaded
Update a web page without reloading the page
Send data to a web server - in the background
AJAX is a technique for accessing web servers from a web page.
AJAX stands for Asynchronous JavaScript And XML*/
