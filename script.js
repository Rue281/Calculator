
let screen = document.querySelector(".screen");

//temporary array
let tempArr = [];

//final data array
let dataArr = [];


let add = function(a,b){
    console.log(a+b);
    screen.innerText = a+b;
    return a+b;
}

let subtract = function(a,b){
    screen.innerText = a-b;
    return a-b;
}

let multiply = function(a,b){
    screen.innerText = a*b;
    return a*b;
}

let divide = function(a,b){
    if(b===0){
        screen.innerText = "Can't divide by Zero!!";
    }
    else{
        screen.innerText = a/b;
        return a/b;
    }
    
}

let operate = function(operator,a,b){
    switch(operator){
        case "+":
             add(a,b);
            break;

        case "-" : 
             subtract(a,b);
            break;

        case "*" : 
             multiply(a,b);
            break;

        case "/" : 
             divide(a,b);
            break;
    }
}

// display the number when the number button is clicked
function display(id){
    let element = parseInt(document.getElementById(id).innerText);
    //save in tempArray
    tempArr.push(element);
    //view on screen
    screen.innerText = tempArr.join("");
    console.log(tempArr);
}


//"add"
let addBtn = document.querySelector(".add");
addBtn.addEventListener("click",function(event){

    /***TODO: Refactoring */

    //store number in tempArr
    let num =parseInt (tempArr.join(""));
    tempArr = [];
    storeData(event.target.innerText,num)
});

//"subtract"
let subtractBtn = document.querySelector(".subtract");
subtractBtn.addEventListener("click",function(event){

    //store number in tempArr
    let num =parseInt (tempArr.join(""));
    tempArr = [];
    storeData(event.target.innerText,num)
});

//multiply
let multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener("click",function(event){

    //store number in tempArr
    let num =parseInt (tempArr.join(""));
    tempArr = [];
    storeData(event.target.innerText,num)
});

//divid
let dividBtn = document.querySelector(".divid");
dividBtn.addEventListener("click",function(event){

    //store number in tempArr
    let num =parseInt (tempArr.join(""));
    tempArr = [];
    storeData(event.target.innerText,num)
});


//store data
function storeData(operator,firstNumber){
    dataArr[0]=operator;
    dataArr[1]=firstNumber;
    screen.innerText = "";
    console.log("operator in storeData: "+operator);
    console.log("number in storeData: "+firstNumber);
    console.log(dataArr);
}


let equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click",function(event){
    console.log(event.target.innerText);
    let secondNumber = parseInt( screen.innerText);
    dataArr.push(secondNumber);
    console.log("on screen: "+ dataArr);
    operate(...dataArr);

    //clear arrays and screen
    dataArr = [];
    tempArr = [];
});
