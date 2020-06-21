/**
 * SAYLANI WEB AND MOBILE APP DEVELOPMENT
 * JAVASCRIPT ASSIGNMENT [ Chap 21 to 36 ]
 * Iqbal Anas
 * 03232202360
 * Roll Number : WM4461
 * Email : iqbalanas99.ia@gmail.com
 */

//         ----- CHAP  21 to 25 -----

/**
 
//Task # 01

 var firstname = prompt("Enter First Name : ")
 var LastName  = prompt("Enter Last Name : ")
 var fullName  = firstname + " " + LastName
 alert("Your Full Name is : "+fullName)


// Task # 02

var favMobile = prompt("Which is your Favourite Mobile Phone ? : ")
var LengthOfInput = favMobile.length
alert("Length of Your input is : "+LengthOfInput)


// Task # 03

var String1 = "Pakistani"
var n = String1.indexOf("n")
alert("Index of n in "+String1+ " is "+n)
 

 var String2 = "Hello World"
var n = String2.lastIndexOf("l")
alert("Last index of l in "+String2+ " is "+n)


 // Task # 05
 var String3 = "Pakistani"
 var n = String3.charAt(3)
 alert("Character at index 3 in "+String3+ " is "+n)


 //Task # 06

 var firstname = prompt("Enter First Name : ")
 var LastName  = prompt("Enter Last Name : ")
 alert("Your Full Name is : "+firstname.concat(LastName))
 
var City="Pakistan's Beautiful city is Hyderabad"
 var newText = City.replace("Hyder", "Islam");
 alert(newText)


//Task # 08
 var message = "Ali and Sami are best friends. They play cricket and football together.";
 var message2 = message.replace(/and/g, "&");
 alert(message2)

//Task # 09

var String4="472"
var number1=parseInt(String4)
alert("Value : "+String4+"\nType : "+"String\n"+"Value : " +number1+"\nType : "+"number" )



//Task # 10

var UserInput=prompt("Enter whats you want : ")
var UpperCase = UserInput.toUpperCase()
alert(UpperCase)

//Task # 11
var str = "javascript".split(" ")
for(var i=0 ;i < str.length ; i++){
    str[i] = str[i][0].toUpperCase()+str[i].slice(1)
}
alert(str)


//Task # 12

var num=35.36
var numtostring=num.toString().replace(".","")
alert(numtostring)


//Task # 13

var username = prompt("Enter Username : ")
var specialSymbol="!,.@"

for(var i=0; i<specialSymbol.length; i++){
    if(specialSymbol.indexOf(username.charAt(i)) != -1){
        alert("Please Enter a valid username")
        break;
    }
    else{
        alert("Succesfully Login")
        break;
    }
}


//Task # 14

var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var search=prompt("Welcome to Iqbal Bekery, What do you want to order sir/ma'am? : ").toLowerCase()
if(A.indexOf(search) != -1){
    alert("Cookie is Available at index "+ A.indexOf(search) +" in our bakery")
}
else{
    alert("We are sorry "+ search +" is not Available in our bakery")
}



//Task # 15
var temp = 0 ;
var pass=prompt("Enter Password : ")
if(pass.length <= 6 || ( pass.charCodeAt(0) >= 48 && pass.charCodeAt(0) <=57 )){
    alert("Password cannot begin with number or symbol")
    
    }
    else{

        for(var i=0;i<pass.length;i++){

            if((pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) || (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122) || (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57)){
            temp++;
            }
            else{

            }
        }
        if(temp == pass.length){
                alert("Corect Password")
        }
        else{
                alert("Password not correct")
        }

    }

  

 //Task # 16

 var university = "University of Karachi";
 var result = university.split("")
 
 alert(result)


 //Task # 17

 var UserInput2="Pakistan"
 alert(UserInput2[UserInput2.length-1])



 //Task # 18
 var Text2 = "the quick brown fox jumps over the lazy dog"
 var n= (Text2.match(/the/g) || []).length
 alert(n)

 **/


 /**
 //    ****     ----- CHAP  26 to 30 -----      ****\

//Task # 01

var posInteger = prompt("Enter any positive integer")
alert("number : "+posInteger+"\n"+"Round Off Value : "+ Math.round(posInteger) +"\n"+"Floor Value : "+ Math.floor(posInteger) +"\n"+"Ceil Value : "+Math.ceil(posInteger))

//Task # 02

var negInteger = prompt("Enter any Negative integer")
alert("number : "+negInteger+"\n"+"Round Off Value : "+ Math.round(negInteger) +"\n"+"Floor Value : "+ Math.floor(negInteger) +"\n"+"Ceil Value : "+Math.ceil(negInteger))


//Task # 03
var obsValue = prompt("Enter any integer")
alert(Math.abs(obsValue))


//Task # 04
alert("Random Dice Value : "+Math.round((Math.random())))


//Task # 05

if(Math.floor( Math.random()*2 +1 ) == 1){
alert(1+"\n"+"Random Coin Value : Tails")
}
else{
    alert(2+"\n"+"Random Coin Value : Heads")
}


//Task # 06
alert("Random Number betweem 1 and 100 : "+Math.floor(Math.random()*100))



//Task # 07

var weight=prompt("Enter Weight in Kilograms : ")
var weightInKG=parseFloat(weight)
alert("The weight of user is "+weightInKG+" kilograms")



//Task # 08
var RandomSecret= Math.floor(Math.random()*10)+1
var number = prompt("Enter number from 1 to 10 : ")
if(number == RandomSecret){
    alert("Congratulations! You are winner of the Lucky")
}
else{
    alert("Try again")
}
**/


/**
 //    ****     ----- CHAP  31 to 34 -----      ****\

//Task # 01

var currDate = new Date();

var dateString = currDate.toString();
alert("Current Date And Time : "+dateString)


//Task # 02
var month = new Date()
var currMonth = month.getMonth()+1;
if(currMonth == 1){
    alert("Current Month : January")
}
else if(currMonth == 2){
    alert("Current Month : February")
}
else if(currMonth == 3){
    alert("Current Month : March")
}
else if(currMonth == 4){
    alert("Current Month : April")
}
else if(currMonth == 5){
    alert("Current Month : May")
}
else if(currMonth == 6){
    alert("Current Month : June")
}
else if(currMonth == 7){
    alert("Current Month : July")
}
else if(currMonth == 8){
    alert("Current Month : August")
}
else if(currMonth == 9){
    alert("Current Month : September")
}
else if(currMonth == 10){
    alert("Current Month : October")
}
else if(currMonth == 11){
    alert("Current Month : November")
}
else if(currMonth == 12){
    alert("Current Month : December")
}


//Task # 03

var DayNames = ["","Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var Days = new Date();
var currDay = Days.getDay()+1;
var Today = DayNames[currDay]
alert("Day : "+currDay+"\n"+Today)

//Task # 04

var Day = new Date();
var curDay = Day.getDay();

if(curDay == 0 || curDay == 6 ){
    alert("It's Fun day")
}
else{
    alert("Working Day")
}

//Task # 05

var dates = new Date();
var curDay = dates.getDate();
if(curDay<16){
    alert("First fifteen days of the month")
}
else{
    alert("Last fifteen days of the month")
}

//Task # 06
var DateCurr = new Date()
var date1970 = new Date("Wed Jan 01 1970 00:00:00 GMT-0800 (Pacific Standard Time)")
//              year  month   days hours  mins  sec + from jan 2020
var calMin1970 = 50  *  12  * 30 * 24   *  60  * 60 + 5*30*24*60*60

alert("Current Date : "+DateCurr+"\n"+"Elapsed Minutes Since January 1,1970: "+calMin1970)


//Task # 07

var dt = new Date()
var h = dt.getHours()
var m = dt.getMinutes()
var s = dt.getSeconds()
if(h>12){
    alert("Time : "+h+":"+m+":"+s+" AM"+"\n"+"Its AM")
}
else{
    alert("Time : "+h+":"+m+":"+s+" PM"+"\n"+"Its PM")
}



//Task # 08
var month = 12;
var d=new Date(2020,month,0)
alert("Later Date : "+d)


//Task # 09
var Ramadan = new Date(2015,5,18)
var RamadanTime = Ramadan.getTime()

var DtCurr = new Date()
var CurrTime = DtCurr.getTime()

var CalCulateTime = CurrTime - RamadanTime
var CalCulateDays = Math.floor(CalCulateTime / (1000*60*60*24))
alert(CalCulateDays +" day have passed since 1st Ramadan, 2015")


//Task # 10
var begin2015 = new Date(2015,0,1)
var Time2015 = begin2015.getTime()

var SecFrom2015 = Time2015.getSeconds()

var CurrDt = new Date()
var CurrentTime = CurrDt.getTime()
var TimeCurr = CurrentTime.getSeconds()

var DifferenceSeconds = TimeCurr - SecFrom2015
var CalCulateSecons = Math.abs(DifferenceSeconds/1000)
alert("On Reference date : "+CalCulateSecons)


//Task # 11
var currDateTime = new Date()
document.write("Current Date: "+currDateTime + "<br>");
var a = currDateTime.setHours(currDateTime.getHours()-1)
document.write("1 Hour ago, it was : "+currDateTime);


//Task # 12
var currentDate = new Date()
document.write("current date: " + currentDate + "<br>");
var hunderedYearsAgo=currentDate.setMonth(currentDate.getMonth()-12*100)
document.write("100 years back , it was " + currentDate);



//Task # 13

var age = prompt("Enter Your Age : ")
document.write("Your age : " + age+"<br>");
var CDt=new Date()

CDt.setFullYear(CDt.getFullYear()-age)
document.write("Your Birth Year : "+CDt);



//Task # 14
var CustomerName = prompt("Enter Customer Name : ")
var CurrentMonth = prompt("Enter Current Month : ")
var numOfUnit = prompt("Enter Number Of Unit : ")
var ChargePerUnit = prompt("Enter Charge per Unit : ")

var surcharge = prompt("Enter Payment Surcharge : ")

var NetAmountwithinDUE =  numOfUnit*ChargePerUnit
var NetAmountAfterDUE = NetAmountwithinDUE + surcharge

document.write("Customer Name : "+CustomerName);
document.write("<br>Month : "+CurrentMonth);
document.write("<br>Number Of Unit : "+numOfUnit);
document.write("<br>Charges Per Unit : "+ChargePerUnit);
document.write("<br>Net Amount Payable (Within Due Date) : "+NetAmountwithinDUE);
document.write("<br>Late Payment Surcharge : "+surcharge);
document.write("<br>Gross Amount Payable (After Due Date) : "+NetAmountAfterDUE);
**/


/**

 //    ****     ----- CHAP  35 to 38 -----      ****\

//Task # 01


function date() {
    document.write(new Date());
}

date();

// task 2
function greet(firstName, lastName) {
    firstName = firstName.toUpperCase()
    lastName = lastName.toUpperCase()
    document.write("Hello " + firstName + " " + lastName + "!");
}
greet(prompt("Enter your first name"), prompt("Enter your last name"));

// task 3
var sum;
function greet(firstNum, secondNum) {
    document.write("First Number is : " + firstNum + "<br>")
    document.write("Second Number is : " + secondNum + "<br>")
    sum = firstNum + secondNum
    document.write("Sum: " + sum);
}
greet(+prompt("Enter first number"), +prompt("Enter second number"));

// task 4
function calculator(num1, operator, num2) {
    switch (operator) {
        case "+":
            return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 + num2);

        case "-":
            return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 - num2);

        case "*":
            return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 * num2);

        case "/":
            return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 / num2);

        case "5":
            return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 % num2);

        default:
            return document.write("Grr an error accurred")
        }
}

calculator(+prompt("Enter 1st Number"), prompt("Enter Operator: + - * / %"), +prompt("Enter 2nd Number"));

// task 5
function square(argu) {
    document.write("Input is: " + argu + "<br>")
    document.write("Square is: " + argu * argu);
}
square(+prompt("Enter number for square"));

// task 6
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }else {
        return num * factorial(num-1);
    }
}
var num = +prompt("Enter Number for factorial");
var answer = factorial(num);
document.write("The factorial of " + num + " is " + answer);

// task 7
function counting(num1, num2) {
document.write("Starting number is: " + num1 + "<br>")
document.write("Ending number is: " + num2 + "<br>")
    for (var i = num1; i <= num2; i++) {
        document.write(i + "<br>");
    }
}
counting(+prompt("Enter starting number"), +prompt("Enter ending number"));

// task 8
function hypotenuse(base, perpendicular) {
    function square(v1, v2) {
        document.write("First value is: " + v1 + "<br>");
        var v1Square = v1*v1;
        document.write("Sqaure root of " + v1 + " is: " + v1Square + "<br><br>");
        document.write("Second value is: " + v2 + "<br>");
        var v2Square = v2*v2;
        document.write("Sqaure root of " + v2 + " is: " + v2Square + "<br><br>");
        var sqrt = v1*v1 + v2*v2;
        document.write("Sum of " + v1Square + " and " + v2Square + " is " + sqrt + "<br><hr>");
    }
    square(base, perpendicular)
    document.write("Hypotenuse: " + Math.hypot(base, perpendicular))
}
hypotenuse(+prompt("Enter Base"), +prompt("Enter Perpendicular"));

// task 9
var height = 5;
function area(width, height) {
    document.write("Area of a rectangle is: " + width * height);
}
area(10, height);

// task 10
function palindrome(word) {
    var reverse = word.split("").reverse().join("");
    switch (word) {
        case reverse:
            return document.write(word + " and " + reverse + " is same so this is a Palindrome word");

        default:
            return document.write(word + " and " + reverse + " is not same so this is not a Palindrome word");

    }
}
palindrome(prompt("Enter word"));

// task 11
function titleCase(string) {
    string = string.split(" ");
    for (var i = 0; i < string.length; i++) {
        var firstLetter = string[i].slice(0, 1);
        firstLetter = firstLetter.toUpperCase();
        var otherLetters = string[i].slice(1);
        otherLetters = otherLetters.toLowerCase();
        var result = firstLetter + otherLetters;
        document.write(result + " ");
    }
     
}
titleCase("the quick brown fox jumps over the lazy dog" + "<br>");


// task 12
function longestWord(word) {
  word = word.split(" ");
  var result = word[0];
  for(var i = 1 ; i < word.length ; i++) {
    if(result.length < word[i].length) {
    result = word[i];
    } 
  }
  return document.write(result);
}
longestWord('Web Development Tutorial');

// task 13
function check(string, letter) {
    var lett = letter;
    string = string.toLowerCase();
    letter = string.match(/s/g).length;
    document.write("There are " + letter + " occurence(s) of word " + '"' + lett + '"');
}
check("JSResourceS.com", "s")

// task 14
document.write("<h1>The Geometrizer</h1> <br>")
function calcCircumference(radius) {
    var circumference = 2 * 3.142 * radius
    document.write("The circumference is " + circumference.toFixed(3) + "<br>");
    function calcArea(radius) {
        radius = radius * radius
        var area = 3.142 * radius;
        document.write("The area is " + area);
    }
    calcArea(20);
 }
 calcCircumference(20);

 **/