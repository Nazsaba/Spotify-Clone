let pencilPrice=10;
let erasorPrice=5;
// let output="The total price is : " + (pencilPrice+erasorPrice) + " Rupees.  "
let output=`The total prise is : ${pencilPrice+erasorPrice} Rupees. `;
console.log(output)
// Arithmatic Oparetion
let a=10;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
// unary Oparetor
let x=5;
let y=20;
console.log(x++);
console.log(++x);
// assignment Oparetor
b=a;
console.log(b);
let age=16;
console.log(age<=18);

// conditional statement
// if statement

// console.log("Before my if statement");
// let Age=14;
// if(Age>=18){
//     console.log("You can vote")
// }
// if(Age<18){
//     console.log("You can not vote");
// }
// console.log("After my if statement");

let firstName="saba";
if(firstName=="saba"){
    console.log(`welcome ${firstName}`);
}
// trafic signal
 let color="yellow";

  if(color=="red"){
    console.log("Stop light color is red")
  }
  else if (color=="yellow"){
    console.log("go slow light color is yellow");
  }
  else if(color=="green"){
    console.log("run light color is green");
  }

//   else -if 

let agee=14;
if(agee>=18){
    console.log("You can vote");
}
else if(agee<18){
    console.log("You can not vote");
}
//  greding

let marks=20;
if(marks>=80){
    console.log("You got A+");
}
else if(marks>=60){
    console.log("You got A");
}
else if(marks>=33){
    console.log("You got B");
}
else if(marks<33){
    console.log("Sorry you are fail");
}
// session

let month="january";

if(month==="january"){
    console.log("winter is here");
}
else if (month==="april"){
    console.log("summer is here")
}

// else

    let ag=10;
    if(ag>=18){
        console.log("You can vote");
    }
    else{
        console.log("you can not vote");
    }

    // practice quetions

    let size="L";
    if(size=="xl"){
        console.log("The popcorn price is .250");
    }
    else if(size=="L"){
        console.log("The popcorn price is .200");
    }
    else if(size=="M"){
        console.log("The popcorn price is .100");
    }
    else{
        console.log("The popcorn price is .50");
    }

    // nested if-else

        let mark=45;
        if(mark>=33){
            console.log("pass");
            if(mark>=80){
                console.log("Grade:o");
            }else{
                console.log("Grade:A");
            }
        }
        else{
            console.log("better luck next time");
        }

        // Logical Oparetor

        let markse=90;
        if(markse>=33 || markse>=80){
            console.log("pass");
            console.log("A+");
        }
        // practices quetion

        let str="apple";
        if((str[0]==='a')&&(str.length>3)){
            
            console.log("good string");
        }
        else{
            console.log("not");
        }

        let num=12;
        if((num%3===0)&&((num+1==15)||(num-1==11))){
            console.log("safe");
        }
        else{
            console.log("unsafe");
        }

        // Switch Statement

        let colors="";
        switch (colors){
            case"red":
                console.log("Stop");
                break;
            case"yellow":
                console.log("go slow");
                break;
            case"green":
                console.log("Go");
                break;
            default:
                console.log("light is broken");
        }

        // calander 

        let day="6";
        switch(day){
                case "1":
                console.log("Today is monday");
                 break;
                case "2":
                console.log("Today is Tuesday");
                 break;
                case "3":
                console.log("Today is Wednesday");
                 break;
                case "4":
                console.log("Today is Thursday");
                 break;
                case "5":
                console.log("Today is Friday");
                 break;
                case "6":
                console.log("Today is Saturday");
                 break;
                case "7":
                console.log("Today is sonday");
                 break;
                 default:
                    console.log("inviled");
        }

        // alert
        // alert("Something is wrong!");
        // console.log("This is a simle msg");
        // console.error("This is an error msg")
        //  console.warn("This is an worning msg");

        // //  Prompt for input user

        // let firstname=prompt("enter your firstName");
        // let lastName=prompt("enter your lastName");
        // console.log("Welsome",firstname,lastName,"!");
        
        
        // String Method

            // let msg="    hello    "
           let password= prompt("set your password");
           console.log(password.trim());

        //   method chaining

        let msg="ILoveCoding";
        let newMsg=msg.trim().toUpperCase();
        console.log(newMsg);

        // slice
        console.log(msg.slice(-2));

        // replace

       console.log(msg.slice("love","do"));