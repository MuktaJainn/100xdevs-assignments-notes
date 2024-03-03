function print(){

    console.log("Testing asyn nature");
}

function print2(){
    console.log("Inside print 2")
}
function synsleep(){
    for(let i =0; i<10000000; i++){

    }
    console.log("done");
}
setTimeout(print2, 1000);
setTimeout(print, 0);
synsleep();
console.log("Hello");


//First hello would be printed and then Testing asyn nature 
//As, setTimeout is executing seperately, js program is executing normally.



/*, even though setTimeout(print, 0) schedules the print() function to run "asynchronously", it does not interrupt the synchronous execution flow of the rest of the code. Therefore, the "Testing asyn nature" message appears at the end of the output.*/




const fs = require("fs");//node js library that lets us read the files

fs.readFile("a.txt" , "utf-8" , function(err,data){ //we'll get undefined in case our file is not read
    console.log(data);
})



console.log("THis will print before the file content")

//we are getting null, if data is passed first and then err because the data read is passed in the second argument of the anonymous fn




//Fetch, fs.readFile, setTimeout - asyn fn.

//Anonymous fn - the fn who are being passed inside a fn alongwith their definition, we don't need to give them a name


//Out of all the asyn fn, the one which take less time will be executed first