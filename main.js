function sum() {

    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    
    x = parseInt(x);
    y = parseInt (y);   
    
    
    console.log (x + y);

    document.getElementById("answer").innerHTML = (x+y) ;
}

function subtract(){

    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    
    x = parseInt(x);
    y = parseInt (y);   
    
    
    console.log (x - y);

    document.getElementById("answer").innerHTML = (x-y) ;

}


function multiply(){

    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    
    x = parseInt(x);
    y = parseInt (y);   
    
    
    console.log (x*y);

    document.getElementById("answer").innerHTML = (x*y) ;
}


function divide(){

    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    
    x = parseInt(x);
    y = parseInt (y);   
    
    
    console.log (x/y);

    document.getElementById("answer").innerHTML = (x/y) ;
}




