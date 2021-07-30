
GUVI: Zen Class — Part 2 :

Find the culprits and nail them — debugging javascript loops

//1.Write a code to print the numbers in the array

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = “”;

// for (var i = 1; i < 11; i--) {
//  new_string += numsArr[i] 
// }
// console.log(new_string);

//ans:

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < 11; i++) {
    new_string += numsArr[i]
}
console.log(new_string); //1234567891011


// 2.Write a code to print the numbers in the array

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = “”;

// for (var i = 1; i < 11; i++) {
//  new_string += numsArr[i] + , 
// }
// console.log(new_string);

//ans:

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = [];

for (var i = 0; i < 11; i++) {
    new_string.push(numsArr[i]);
}
console.log(new_string.join()); //1,2,3,4,5,6,7,8,9,10,11

//3.Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

// var new_string = “”;

// for (var i = 11; i > 0; i — ) {
//  new_string += numsArr[i] + “ “ 
// }
// console.log(new_string);

//ans:

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = [];

for (var i = 10; i >= 0; i--) {
    new_string.push(numsArr[i])
}
console.log(new_string.join(" ")); // 11 10 9 8 7 6 5 4 3 2 1


//4.Write a code to replace the array value — If the number is even, replace it with ‘even’.

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = odd
//  }
// }
// console.log(numsArr);

//ans:

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= numsArr.length; i++) {
    if (numsArr[i] % 2 == 0) {
        numsArr[i] = "even";
    }
}
console.log(numsArr); // [1, "even", 3, "even", 5, "even", 7, "even", 9, "even", 11]


//5.Write a code to replace the array value — If the index is even, replace it with ‘even’.

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = even
//  }
// }
// console.log(numsArr);

//ans:

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        numsArr[i] = "even"
    }
}
console.log(numsArr);  //["even", 2, "even", 4, "even", 6, "even", 8, "even", 10, "even"]0: "even"1: 22: "even"3: 44: "even"5: 66: "even"7: 88: "even"9: 1010: "even"length: 11[[Prototype]]: Array(0)

//6.Write a code to add all the numbers in the array

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  var sum;
//  sum += numsArr[i]
// }
// console.log(sum);

//ans:

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <= 10; i++) {
    sum += numsArr[i]
}
console.log(sum); //66.

//7.Write a code to add the even numbers only

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <10; i++) {
//  if(numsArr[i]%2==0);
//  sum += numsArr[i]
// }
// console.log(sum);

//ans:

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < 10; i++) {
    if (numsArr[i] % 2 == 0) {

        sum += numsArr[i]
    }
}
console.log(sum); //30;

//8.Write a code to add the even numbers and subract the odd numbers

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2!=0);
//  {
//  sum += numsArr[i]
//  }
//  else
//  {
//  sum -= numsArr[i]
//  }
// }

//ans:

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 == 0) {
        sum += numsArr[i];

    }
    else {
        sum -= numsArr[i]
    }
}
console.log(sum); //94;

//9.Write a code to print inner arrays

// var numsArr = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++); {
//  console.log( numsArr[i])
// }

//ans:

var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
    console.log(numsArr[i]) // array 1 \n array 2;
}


//10.Write a code to print elements in the inner arrays

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;i++ )
//      str_all +=inner_array[j]
// }
// console.log(str_all);

//ans: method 1

var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = [];
for (var i = 0; i < numsArr.length; i++) {

    for (var j = 0; j < numsArr[i].length; j++) {

        str_all.push(numsArr[i][j]);
    }
}
console.log(str_all);

// ans:method 2:

var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = [];
for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];
    for (var j = 0; j < inner_array.length; j++)
        str_all.push(inner_array[j])
}
console.log(str_all);

//11.Write a code to replace the array value — If the index is even, replace it with ‘even’.

//ans:

var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = [];
for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];
    for (var j = 0; j < inner_array.length; j++) {
        if (inner_array[j] % 2 != 0) {
            inner_array[j] = "even";


        }

    }
}
console.log(numsArr);

//12.Write a code to print elements in the inner arrays in reverse

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = inner_array.length; j < 0 ;j-- )
//      str_all +=inner_array[j]
// }
// console.log(str_all);

//ans:
var numsArr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11]
];
var str_all = [];
for (var i = numsArr.length - 1; i >= 0; i--) {
    var inner_array = numsArr[i];
    for (var j = inner_array.length - 1; j >= 0; j--)
        str_all.push(inner_array[j]);
}
console.log(str_all.join(" ")); //11 10 9 8 7 6 5 4 3 2 1


//13.Write a code to add elements in the inner arrays based on odd or even values


// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var sum_odd=0;
// var sum_even=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ ){
//  if(numsArr[i]%2!=0)
//  {
//  sum_odd += numsArr[i]
//  }
//  else
//  {
//  sum_even += numsArr[i]
//  }
// }
// }
// console.log(sum_odd);
// console.log(sum_even);

//ans:



var numsArr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11]
];
var sum_odd = 0;
var sum_even = 0;
for (var i = 0; i <= numsArr.length - 1; i++) {
    var inner_array = numsArr[i];
    for (var j = 0; j <= inner_array.length - 1; j++) {
        if (inner_array[j] % 2 != 0) {
            sum_odd += inner_array[j]
        } else {
            sum_even += inner_array[j]
        }
    }
}
console.log(sum_odd); //36
console.log(sum_even); //30
