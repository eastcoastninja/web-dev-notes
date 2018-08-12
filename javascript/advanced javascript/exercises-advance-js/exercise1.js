
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a); // 3
}



//#2
var a = 0;
function q2() {
    a = 5; // reassigns a from 0 to 5 when called
}

function q22() {
    alert(a); // returns 5 if called after q2() else it is 0
}


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a); // returns hello if called after q3() else it is undefined
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a); // test
}

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a); // 5
}
alert(a); // 5

// with var keyword, if statements do not create a new scope
