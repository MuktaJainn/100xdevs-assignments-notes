// function getLength(str) {
//     console.log("Original String:", str);
//     console.log("Length:", str.length);
//   }

//   getLength("Mukta")


  // function findIndexOf(str, target) {
  //   console.log("Original String:", str);
  //   console.log("Index:", str.indexOf(target));
  // }

  // //This is giving me the index of the 1st word
  // findIndexOf("Hello World World", "World");

  // function getSubstring(str, start, end) {
  //   console.log("Original String:", str);
  //   console.log("After substring:", str.substring(start, end));
  // }
  // getSubstring("Hello World", 2, 5);
  

 
  

  // const y = [1,2,3]
  // const z= [2,6,10]

  // const j = y.concat(z)
  // console.log(j)
  // function k( t){

  //   console.log(t);


  // }

  // const u = [1,2,3]

  // u.forEach(k)


  //How we can calculate how much time a function takes to run.

  const currentDate = new Date();

  // console.log("Time: " , currentDate.getTime());


  // function add(){
  //   let a = 0;
  //   for(let i=0; i<1000000000; i++){
  //      a = a + i;
  //   }
  // }

  // const t = new Date(); //yaha yeah object i.e a date time sab kuchh fix hogya hai
  // const beforeTime = t.getTime();
  // add();
  // const ti = new Date(); //creating a date-time- everything object at this instant
  // const afterTime = ti.getTime();
  // console.log(afterTime-beforeTime);



  //Stopwatch:

  function Stopwatch(){

    const h = new Date();
    console.log(h.getHours(), ":" , h.getMinutes(), ":" , h.getSeconds());

  }

  setInterval(Stopwatch, 1000);



  console.log( +"a") //unary operator-output-NaN
