
// GUVI: Zen Class — Part 1: Find the culprits and nail them — debugging javascript

//1.Find the culprit;
// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( "I’m JavaScript!');
//  </script>
//  Whats the error in this ?
// </body>
// </html>

alert("I'm JavaScript!");


//2.Find the culprit and invoke the alert

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script> //<script src="script.js"></script> 
// </body>
// </html>
// alert("I’m invoked!");


//3.Explain the below how it works

alert("I'm JavaScript!"); // alert I'm JavaScript!
alert('Hello') // Hello
alert(`Wor 
 ld`)
// Wor
//   ld
alert(3 +
    1
    + 2); //  6

//4.Fix the below to alert Guvi geek

// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"

let admin = 9, fname = 10.5;
fname = "Guvi";
lname = "geek"
admin = fname + " " + lname; // Guvi geek
alert(admin); // "Guvi geek"

//5.Fix the below to alert hello Guvi geek

// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( 'hello ${name}' );

let fname = 10.5;
fname = "Guvi";
lname = "geek"
let name = fname + " " + lname;
alert(`hello ${fname} ${lname}`); // hello Guvi geek
alert(`hello ${name}`);

//6.Fix the below to alert sum of two numbers

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a + b); //12

//7.If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

// var a = "2" > "12";
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

// var a = "2" > "12";  values are string so  a condtion true; so we get code is blasted;
var a = 2 > 12;
//Don't touch below this
if (a) {
    console.log("Code is Blasted")
}
else //var a = 2 > 12; condtion are fasle so else executed:
{
    console.log("Diffused")  // Diffused
}

//8.How to get the success in console.

let a = prompt("Enter a number?");
//Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }
// let b = parseInt(prompt("Enter a number?"));

//Don't modify any code below this
if (a) {
    console.log('OMG it works for any number inc 0');
}
else {
    console.log("Success");
}



//9.How to get the correct score in console

// let value = prompt('How many runs you scored in this ball');
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

let value = prompt('How many runs you scored in this ball');
if (value ==4) {
      console.log("You hit a Four"); 
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

//10.Fix the code to welcome the Employee
// let login = 'Employee';
// let message = (login == 'Employee') ? :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';
// console.log(message);

let login = 'Employee';
let message = (login == 'Employee') ? "welcome the Employee" : "hy"
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
        '';
console.log(message);

//11.Fix the code to welcome the boss

// You cant change the value of the msg
// let message;
// if (null || 2 || undefined )
// {
//  let message = "welcome boss";
// }
// else
// {
//  let message = "Go away";
// }
//   console.log(message);

// You cant change the value of the msg
let message="welcome the Boss"
if (let == null || 2 || undefined )
{
    let message = "welcome boss";

}
else
{
    let message = "Go away";

}
console.log(message);




// 11.Fix the code to welcome the boss

// You cant change the value of the msg
// let message;
// if (null || 2 || undefined )
// {
//  let message = "welcome boss";
// }
// else
// {
//  let message = "Go away";
// }
//   console.log(message);

// You cant change the value of the msg
let message = "welcome the boss";
if (2 || null || undefined) {
    let message = "welcome boss";

}
else {
    let message = "Go away";

}
console.log(message);

// 12.Fix the code to welcome the boss

// let message;
// let lock = 2;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);

let message;
let lock;
//Dont change any code below this 
if (null || lock || undefined) {
    message = "Go away";
}
else {
    message = "welcome";
}
console.log(message); // welcome


//13.Fix the code to welcome the boss
// let message;
// let lock = 2;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

let message;
let lock = "";
//Dont change any code below this
if (lock && " " || undefined) {
    message = "Go away";
}
else {
    message = "welcome";
}
console.log(message); //welcome

//14.Change the code to print 

// 3
// 2
// 1
//You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log( --i );
// }

//You can change only 2 characters

let i = 3;
while (i) {
    console.log(i--);
}

// 15.Change the code to print 1 to 10 in 4 lines

// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)

let num = 10;
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//16.Change the code to print even numbers

//You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 1) {
//     console.log(num)
//   }

//ans:

//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
}

//17.Change the code to print all the gifts

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log('Wrapped ${'gifts[i]'} and added a bow!');
// }

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
    console.log(`Wrapped "${gifts[i]}" and added a bow!`);
}

//18.Fix the code to disarm the bomb.

// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }


//ans:

let countdown = 100;
while (countdown < 0) {
    countdown--;
    if (countdown == 0) {
        console.log("bomb triggered");
    }
}

//19.Whats the msg printed and why?

// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);

//ans;

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
    msg += "hi";
}
if (lemeout) {
    msg += "hello";
}
console.log(msg);

// lemein =="0" its true so ""+"hi" => hi printed.

//20.Whats the msg printed and why? Guess you answer before running it.

// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);

//ans:

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
    msg += "hi";
}
if (lemeout) {
    msg += 'hello';
}
console.log(msg); //hi

//lemin ="0" its true so if(true)=> hi printed.
