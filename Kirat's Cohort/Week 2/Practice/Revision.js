//In asynchronous fn, js is running synchronously only, just we are delegating some work to someone else
//In case of setTimeout - > web api(the c++ code)
//in case of readFile -> operating system

setTimeout(function(){
    
    setTimeout(function(){
        console.log("In second time out")
    },1000)
    console.log("I'm in first set Time out") 
}, 4000)




//It's like bro first wait for 4 ms, then execute what's inside the first set timeout.
//Control reaches line7, now delegates the task to some other source that will wait for 1 ms, 
//console.log("I'm in first set Time out") would get executed synchronously.

//At a time only the first settimeout reaches the call stack from the callback queue, and when it reaches there 
//then the second set-time out is handled by the web apis.




let n = new Promise(function(resolve){
   
    resolve();
    console.log(n);
})


// In the code snippet you provided, you are trying to log the Promise object n within the executor function of the Promise itself. However, at the time of logging n, the Promise hasn't been fully constructed yet. JavaScript engines handle Promise resolution and execution of the executor function asynchronously. Therefore, n is not fully defined when you try to log it.

// Here's what's happening in your code:

// You create a new Promise n with an executor function.

// Inside the executor function, you immediately call resolve(), which resolves the Promise.

// Then, you try to log the Promise object n.

// However, logging n at that point doesn't provide any meaningful information because the Promise object itself is not fully constructed or resolved at that moment. The console.log(n) statement executes synchronously when the Promise is still pending and doesn't give you any useful information about the state of the Promise or its resolution.

// If you want to observe the state of the Promise after it's resolved, you should use the then() method to attach a callback that will execute after the Promise is resolved. For instance: