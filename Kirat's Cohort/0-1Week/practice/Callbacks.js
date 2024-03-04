

function square(n){
  return n*n;
}

function cube(n){
  return n*n*n;
}

function Sum(a,b,fn){
  //Here, we were calling a function inside a function, it's not call-back as we are passing a function as an argument.
  // a = square(a);
  // b = square(b);
  return fn(a)+fn(b);

}

const time1= new Date().getTime();

//Here we, introduced the callbacks!
console.log("ans:",Sum(3 ,4 ,square)); //this is synchronous only.

const time2= new Date().getTime();

console.log("Took:" ,time2-time1 , "ms");