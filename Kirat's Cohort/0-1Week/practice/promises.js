const fs = require('fs');

function mukta(print){
fs.readFile("a.txt" , "utf-8" , function(err,data){
    
        print(data);
  
})

}

function print(d){
    console.log(d + "1");
}

mukta(print);

//I just made my wrapper around the already made asyn function to made my own asyn fn,
//THIS IS UGLY WAY- SO WE INTRODUCED PROMISES.


//CLEANER WAY - USING PROMISES.



function mukta1(){
    return new Promise(function(resolve){
fs.readFile("a.txt" , "utf-8" , function(err,data){
    
        resolve(data);
  
})

    })

}


function print1(d){
    console.log(d + "2");
}

let a = mukta1(); //synchronously return the promise.
console.log(a); //here we'll get pending, because promise has'nt been resolved yet
a.then(print1) ; //the data of the promise comes asynchronously.
console.log("This will print before the data of the file.") 

//Both the above and below is same.

mukta1().then(print1);





//INITIALIZING A PROMISE.


const d = new Promise(function(resolve){
     
    //   resolve()//here promise is resolving right there
      setTimeout(resolve,1000) //here promise is resolving after 1 ms
})

function ondone(){
    console.log("Hey there");
}
//Three states of promises -> pending(resolve hasn't been called yet), resolved(resolved has been called.)

d.then(ondone) //call ondone only when promise is resolved.
console.log(d);
console.log("p executed synchronously, ondone is executed asynchronously")
